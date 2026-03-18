import { getFirstMeliAccount, upsertMeliAccount, type MeliAccount } from "./store";

const API_BASE = process.env.MERCADOLIBRE_API_BASE || "https://api.mercadolibre.com";
const CLIENT_ID = process.env.MERCADOLIBRE_CLIENT_ID!;
const CLIENT_SECRET = process.env.MERCADOLIBRE_CLIENT_SECRET!;
const REDIRECT_URI = process.env.MERCADOLIBRE_REDIRECT_URI!;

type TokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  user_id: number;
  refresh_token: string;
};

function calcExpiresAt(expiresInSeconds: number) {
  const now = Date.now();
  return new Date(now + expiresInSeconds * 1000).toISOString();
}

export async function exchangeCodeForToken(code: string) {
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    redirect_uri: REDIRECT_URI,
  });

  const res = await fetch(`${API_BASE}/oauth/token`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json?.error_description || json?.message || "No se pudo intercambiar code por token.");
  }

  const token = json as TokenResponse;

  const account: MeliAccount = {
    meli_user_id: token.user_id,
    access_token: token.access_token,
    refresh_token: token.refresh_token,
    scope: token.scope,
    token_type: token.token_type,
    expires_at: calcExpiresAt(token.expires_in),
    connected: true,
    last_error: null,
  };

  return upsertMeliAccount(account);
}

export async function refreshAccessToken(refreshToken: string) {
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    refresh_token: refreshToken,
  });

  const res = await fetch(`${API_BASE}/oauth/token`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  const json = await res.json();

  if (!res.ok) {
    const msg = json?.error_description || json?.message || "No se pudo refrescar el token.";
    const err = new Error(msg);
    (err as any).meliError = json;
    throw err;
  }

  const token = json as TokenResponse;

  const account: MeliAccount = {
    meli_user_id: token.user_id,
    access_token: token.access_token,
    refresh_token: token.refresh_token,
    scope: token.scope,
    token_type: token.token_type,
    expires_at: calcExpiresAt(token.expires_in),
    connected: true,
    last_error: null,
  };

  return upsertMeliAccount(account);
}

export async function getValidAccessToken() {
  const account = await getFirstMeliAccount();
  if (!account) {
    throw new Error("No hay cuenta de Mercado Libre conectada.");
  }

  const expiresAt = new Date(account.expires_at).getTime();
  const now = Date.now();

  // refrescar si faltan menos de 60 segundos
  if (now < expiresAt - 60_000) {
    return account.access_token;
  }

  const refreshed = await refreshAccessToken(account.refresh_token);
  return refreshed.access_token;
}