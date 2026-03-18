import { NextResponse } from "next/server";
import { getMeliConnectionStatus } from "@/lib/meli/store";

export async function GET() {
  try {
    const status = await getMeliConnectionStatus();

    return NextResponse.json({
      ok: true,
      connected: status.connected,
      config: status.config,
      account: status.account
        ? {
            meli_user_id: status.account.meli_user_id,
            nickname: status.account.nickname,
            site_id: status.account.site_id,
            expires_at: status.account.access_token_expires_at ?? status.account.expires_at,
            last_refresh_at: status.account.last_refresh_at,
            last_error: status.account.last_error,
            last_error_code: status.account.last_error_code,
            updated_at: status.account.updated_at,
          }
        : null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        connected: false,
        error: error instanceof Error ? error.message : "No se pudo leer el estado OAuth de Mercado Libre.",
      },
      { status: 500 },
    );
  }
}
