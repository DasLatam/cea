import { getValidAccessToken } from "@/lib/meli/oauth";

type SearchSource = "public-api" | "oauth-api" | "none";

export type MercadoLibreSearchAttempt = {
  ok: boolean;
  source: SearchSource;
  payload: Record<string, unknown> | null;
  publicStatus?: number;
  oauthStatus?: number;
  oauthConfigured: boolean;
  strategiesTried: string[];
  upstreamDetails?: string;
};

const SEARCH_HEADERS: Record<string, string> = {
  Accept: "application/json, text/plain, */*",
  "Accept-Language": "es-AR,es;q=0.9,en;q=0.8",
  "User-Agent": "Mozilla/5.0 (compatible; DAS LATAM CEA/1.0; +https://daslatam.org)",
  Referer: process.env.NEXT_PUBLIC_SITE_URL || "https://daslatamcea.vercel.app/",
  Origin: process.env.NEXT_PUBLIC_SITE_URL || "https://daslatamcea.vercel.app",
};

async function fetchSearch(url: string, token?: string) {
  const response = await fetch(url, {
    headers: token
      ? {
          ...SEARCH_HEADERS,
          Authorization: `Bearer ${token}`,
        }
      : SEARCH_HEADERS,
    cache: "no-store",
  });

  const text = await response.text();
  let payload: Record<string, unknown> | null = null;

  if (text) {
    try {
      payload = JSON.parse(text) as Record<string, unknown>;
    } catch {
      payload = null;
    }
  }

  return {
    ok: response.ok,
    status: response.status,
    text,
    payload,
  };
}

export async function searchMercadoLibre(query: string, limit = 30): Promise<MercadoLibreSearchAttempt> {
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}&limit=${limit}`;
  const strategiesTried: string[] = [];

  const publicAttempt = await fetchSearch(url);
  strategiesTried.push("ml-public-api");

  if (publicAttempt.ok && publicAttempt.payload) {
    return {
      ok: true,
      source: "public-api",
      payload: publicAttempt.payload,
      publicStatus: publicAttempt.status,
      oauthConfigured: Boolean(process.env.MERCADOLIBRE_CLIENT_ID && process.env.MERCADOLIBRE_CLIENT_SECRET),
      strategiesTried,
    };
  }

  let oauthConfigured = false;
  try {
    const accessToken = await getValidAccessToken();
    oauthConfigured = true;

    const oauthAttempt = await fetchSearch(url, accessToken);
    strategiesTried.push("ml-oauth-api");

    if (oauthAttempt.ok && oauthAttempt.payload) {
      return {
        ok: true,
        source: "oauth-api",
        payload: oauthAttempt.payload,
        publicStatus: publicAttempt.status,
        oauthStatus: oauthAttempt.status,
        oauthConfigured: true,
        strategiesTried,
        upstreamDetails: publicAttempt.text.slice(0, 280),
      };
    }

    return {
      ok: false,
      source: "none",
      payload: null,
      publicStatus: publicAttempt.status,
      oauthStatus: oauthAttempt.status,
      oauthConfigured: true,
      strategiesTried,
      upstreamDetails: oauthAttempt.text.slice(0, 280) || publicAttempt.text.slice(0, 280),
    };
  } catch (error) {
    return {
      ok: false,
      source: "none",
      payload: null,
      publicStatus: publicAttempt.status,
      oauthConfigured,
      strategiesTried,
      upstreamDetails:
        publicAttempt.text.slice(0, 280) ||
        (error instanceof Error ? error.message : "No se pudo usar el canal OAuth."),
    };
  }
}
