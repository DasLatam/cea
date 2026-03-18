import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForToken } from "@/lib/meli/oauth";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const expectedState = req.cookies.get("meli_oauth_state")?.value;

  if (!code) {
    return NextResponse.json({ ok: false, error: "Missing code" }, { status: 400 });
  }

  if (!state || !expectedState || state !== expectedState) {
    return NextResponse.json({ ok: false, error: "State inválido" }, { status: 400 });
  }

  try {
    const account = await exchangeCodeForToken(code);

    const res = NextResponse.json({
      ok: true,
      connected: true,
      meli_user_id: account.meli_user_id,
      scope: account.scope,
      expires_at: account.expires_at,
    });

    res.cookies.set("meli_oauth_state", "", { path: "/", maxAge: 0 });
    return res;
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error.message || "No se pudo completar OAuth" },
      { status: 500 }
    );
  }
}