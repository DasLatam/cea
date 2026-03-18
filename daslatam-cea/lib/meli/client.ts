import { getValidAccessToken } from "./oauth";

const API_BASE = process.env.MERCADOLIBRE_API_BASE || "https://api.mercadolibre.com";

export async function meliFetch(path: string, init?: RequestInit) {
  const accessToken = await getValidAccessToken();

  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });

  const json = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(json?.message || json?.error_description || `Mercado Libre respondió ${res.status}`);
  }

  return json;
}