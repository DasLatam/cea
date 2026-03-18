import { getSupabaseAdmin } from "@/lib/supabase/server";

export type MeliAccount = {
  id?: string;
  meli_user_id: number;
  nickname?: string | null;
  site_id?: string | null;
  access_token: string;
  refresh_token: string;
  scope?: string | null;
  token_type?: string | null;
  expires_at?: string | null; // compat con el código viejo
  access_token_expires_at?: string | null;
  refresh_token_expires_at?: string | null;
  connected: boolean;
  last_refresh_at?: string | null;
  last_error?: string | null;
  last_error_code?: string | null;
  last_error_message?: string | null;
  created_at?: string;
  updated_at?: string;
};

function normalizeAccount(row: Record<string, unknown> | null): MeliAccount | null {
  if (!row) return null;

  return {
    id: (row.id as string | undefined) ?? undefined,
    meli_user_id: Number(row.meli_user_id),
    nickname: (row.nickname as string | null | undefined) ?? null,
    site_id: (row.site_id as string | null | undefined) ?? null,
    access_token: String(row.access_token ?? ""),
    refresh_token: String(row.refresh_token ?? ""),
    scope: (row.scope as string | null | undefined) ?? null,
    token_type: (row.token_type as string | null | undefined) ?? "Bearer",
    expires_at: (row.expires_at as string | null | undefined) ?? null,
    access_token_expires_at:
      (row.access_token_expires_at as string | null | undefined) ??
      (row.expires_at as string | null | undefined) ??
      null,
    refresh_token_expires_at: (row.refresh_token_expires_at as string | null | undefined) ?? null,
    connected: Boolean(row.connected),
    last_refresh_at: (row.last_refresh_at as string | null | undefined) ?? null,
    last_error: (row.last_error as string | null | undefined) ?? null,
    last_error_code: (row.last_error_code as string | null | undefined) ?? null,
    last_error_message: (row.last_error_message as string | null | undefined) ?? null,
    created_at: (row.created_at as string | undefined) ?? undefined,
    updated_at: (row.updated_at as string | undefined) ?? undefined,
  };
}

export async function getMeliAccountByUserId(meliUserId: number) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("meli_oauth_accounts")
    .select("*")
    .eq("meli_user_id", meliUserId)
    .maybeSingle();

  if (error) throw error;
  return normalizeAccount(data as Record<string, unknown> | null);
}

export async function getPrimaryConnectedMeliAccount() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("meli_oauth_accounts")
    .select("*")
    .eq("connected", true)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  return normalizeAccount(data as Record<string, unknown> | null);
}

export async function upsertMeliAccount(account: MeliAccount) {
  const supabase = getSupabaseAdmin();
  const now = new Date().toISOString();

  const payload = {
    meli_user_id: account.meli_user_id,
    nickname: account.nickname ?? null,
    site_id: account.site_id ?? "MLA",
    access_token: account.access_token,
    refresh_token: account.refresh_token,
    scope: account.scope ?? null,
    token_type: account.token_type ?? "Bearer",
    expires_at: account.access_token_expires_at ?? account.expires_at ?? null,
    access_token_expires_at: account.access_token_expires_at ?? account.expires_at ?? null,
    refresh_token_expires_at: account.refresh_token_expires_at ?? null,
    connected: account.connected,
    last_refresh_at: account.last_refresh_at ?? null,
    last_error: account.last_error ?? null,
    last_error_code: account.last_error_code ?? null,
    last_error_message: account.last_error_message ?? null,
    updated_at: now,
  };

  const { data, error } = await supabase
    .from("meli_oauth_accounts")
    .upsert(payload, { onConflict: "meli_user_id" })
    .select("*")
    .single();

  if (error) throw error;
  return normalizeAccount(data as Record<string, unknown>) as MeliAccount;
}

export async function setMeliAccountError(
  meliUserId: number,
  lastError: string,
  code?: string | null,
) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("meli_oauth_accounts")
    .update({
      last_error: lastError,
      last_error_code: code ?? null,
      last_error_message: lastError,
      updated_at: new Date().toISOString(),
    })
    .eq("meli_user_id", meliUserId);

  if (error) throw error;
}

export async function getMeliConnectionStatus() {
  const account = await getPrimaryConnectedMeliAccount();

  return {
    connected: Boolean(account?.connected),
    account,
    config: {
      clientId: Boolean(process.env.MERCADOLIBRE_CLIENT_ID),
      clientSecret: Boolean(process.env.MERCADOLIBRE_CLIENT_SECRET),
      redirectUri: Boolean(process.env.MERCADOLIBRE_REDIRECT_URI),
      supabase: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY && (process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL)),
    },
  };
}
