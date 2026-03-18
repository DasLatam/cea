import {
  getMeliAccountByUserId,
  getPrimaryConnectedMeliAccount,
  setMeliAccountError,
  upsertMeliAccount,
  type MeliAccount,
} from "@/lib/meli/store";

const API_BASE = process.env.MERCADOLIBRE_API_BASE || "https://api.mercadolibre.com";
const CLIENT_ID = process.env.MERCADOLIBRE_CLIENT_ID!;
const CLIENT_SECRET = process.env.MERCADOLIBRE_CLIENT_SECRET!;
const REDIRECT_URI = process.env.MERCADOLIBRE_REDIRECT_URI!;
const EARLY_REFRESH_MS = 90_000;

export type TokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  user_id: number;
  refresh_token: string;
};

type MeliErrorPayload = {
  error?: string;
  message?: string;
  error_description?: string;
  status?: number;
};

type MeliUserProfile = {
  id: number;
  nickname?: string;
  site_id?: string;
};

function calcExpiresAt(expiresInSeconds: number) {
  const now = Date.now();
  return new Date(now + expiresInSeconds * 1000).toISOString();
}

function isExpired(expiresAt?: string | null, skewMs = 0) {
  if (!expiresAt) return true;
  return Date.now() >= new Date(expiresAt).getTime() - skewMs;
}

function asMessage(errorPayload: MeliErrorPayload | null, fallback: string) {
  return (
    errorPayload?.error_description ||
    errorPayload?.message ||
    errorPayload?.error ||
    fallback
  );
}

function extractErrorCode(errorPayload: MeliErrorPayload | null) {
  return errorPayload?.error || null;
}

async function requestToken(body: URLSearchParams) {
  const res = await fetch(`${API_BASE}/oauth/token`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  const json = (await res.json().catch(() => null)) as TokenResponse & MeliErrorPayload | null;

  if (!res.ok || !json) {
    const err = new Error(asMessage(json, "Mercado Libre no devolvió un token válido."));
    (err as Error & { meliError?: MeliErrorPayload | null }).meliError = json;
    throw err;
  }

  return json as TokenResponse;
}

async function fetchUserProfile(accessToken: string): Promise<MeliUserProfile | null> {
  try {
    const res = await fetch(`${API_BASE}/users/me`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;
    return (await res.json()) as MeliUserProfile;
  } catch {
    return null;
  }
}

async function persistToken(token: TokenResponse) {
  const profile = await fetchUserProfile(token.access_token);

  const account: MeliAccount = {
    meli_user_id: token.user_id,
    nickname: profile?.nickname ?? null,
    site_id: profile?.site_id ?? "MLA",
    access_token: token.access_token,
    refresh_token: token.refresh_token,
    scope: token.scope,
    token_type: token.token_type,
    expires_at: calcExpiresAt(token.expires_in),
    access_token_expires_at: calcExpiresAt(token.expires_in),
    connected: true,
    last_refresh_at: new Date().toISOString(),
    last_error: null,
    last_error_code: null,
    last_error_message: null,
  };

  return upsertMeliAccount(account);
}

export async function exchangeCodeForToken(code: string) {
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    redirect_uri: REDIRECT_URI,
  });

  const token = await requestToken(body);
  return persistToken(token);
}

export async function refreshAccessToken(refreshToken: string) {
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    refresh_token: refreshToken,
  });

  const token = await requestToken(body);
  return persistToken(token);
}

export async function getValidAccessToken() {
  const account = await getPrimaryConnectedMeliAccount();
  if (!account) {
    throw new Error("No hay cuenta de Mercado Libre conectada.");
  }

  const expiresAt = account.access_token_expires_at ?? account.expires_at;
  if (!isExpired(expiresAt, EARLY_REFRESH_MS)) {
    return account.access_token;
  }

  try {
    const refreshed = await refreshAccessToken(account.refresh_token);
    return refreshed.access_token;
  } catch (error) {
    const maybeError = error as Error & { meliError?: MeliErrorPayload | null };
    const errorCode = extractErrorCode(maybeError.meliError ?? null);
    const message = maybeError.message || "No se pudo refrescar el token de Mercado Libre.";

    // Mitigación práctica ante concurrencia: si otro request ya rotó el refresh token,
    // volvemos a leer la fila y usamos el token nuevo si sigue vigente.
    const reloaded = await getMeliAccountByUserId(account.meli_user_id).catch(() => null);
    if (
      errorCode === "invalid_grant" &&
      reloaded &&
      reloaded.refresh_token !== account.refresh_token &&
      !isExpired(reloaded.access_token_expires_at ?? reloaded.expires_at, 30_000)
    ) {
      return reloaded.access_token;
    }

    await setMeliAccountError(account.meli_user_id, message, errorCode).catch(() => undefined);

    if (errorCode === "invalid_grant") {
      throw new Error(
        "Mercado Libre devolvió invalid_grant. El refresh token puede haber sido rotado, vencido o revocado. Si persiste, reconectá la cuenta desde /api/meli/connect.",
      );
    }

    throw error;
  }
}
