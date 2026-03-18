import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export type MeliAccount = {
  id?: string;
  meli_user_id: number;
  access_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  expires_at: string; // ISO string
  connected: boolean;
  last_error?: string | null;
};

export async function getMeliAccountByUserId(meliUserId: number) {
  const { data, error } = await supabase
    .from("meli_oauth_accounts")
    .select("*")
    .eq("meli_user_id", meliUserId)
    .maybeSingle();

  if (error) throw error;
  return data as MeliAccount | null;
}

export async function getFirstMeliAccount() {
  const { data, error } = await supabase
    .from("meli_oauth_accounts")
    .select("*")
    .eq("connected", true)
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  return data as MeliAccount | null;
}

export async function upsertMeliAccount(account: MeliAccount) {
  const { data, error } = await supabase
    .from("meli_oauth_accounts")
    .upsert(account, { onConflict: "meli_user_id" })
    .select()
    .single();

  if (error) throw error;
  return data as MeliAccount;
}

export async function setMeliAccountError(meliUserId: number, lastError: string) {
  const { error } = await supabase
    .from("meli_oauth_accounts")
    .update({ last_error: lastError, updated_at: new Date().toISOString() })
    .eq("meli_user_id", meliUserId);

  if (error) throw error;
}