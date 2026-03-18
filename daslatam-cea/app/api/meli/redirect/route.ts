import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForToken } from "@/lib/meli/oauth";

function wantsJson(req: NextRequest) {
  return (
    req.nextUrl.searchParams.get("mode") === "json" ||
    req.headers.get("accept")?.includes("application/json")
  );
}

function safeReturnTo(raw: string | undefined) {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return "/herramientas";
  return raw;
}

function uiRedirect(req: NextRequest, path: string, params: Record<string, string>) {
  const url = new URL(path, req.url);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  return url;
}

function clearCookies(res: NextResponse) {
  res.cookies.set("meli_oauth_state", "", { path: "/", maxAge: 0 });
  res.cookies.set("meli_oauth_return_to", "", { path: "/", maxAge: 0 });
}

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const expectedState = req.cookies.get("meli_oauth_state")?.value;
  const returnTo = safeReturnTo(req.cookies.get("meli_oauth_return_to")?.value);

  if (!code) {
    if (wantsJson(req)) {
      return NextResponse.json({ ok: false, error: "Missing code" }, { status: 400 });
    }
    const res = NextResponse.redirect(uiRedirect(req, returnTo, { meli: "error", reason: "missing_code" }));
    clearCookies(res);
    return res;
  }

  if (!state || !expectedState || state !== expectedState) {
    if (wantsJson(req)) {
      return NextResponse.json({ ok: false, error: "State inválido" }, { status: 400 });
    }
    const res = NextResponse.redirect(uiRedirect(req, returnTo, { meli: "error", reason: "invalid_state" }));
    clearCookies(res);
    return res;
  }

  try {
    const account = await exchangeCodeForToken(code);

    if (wantsJson(req)) {
      const res = NextResponse.json({
        ok: true,
        connected: true,
        meli_user_id: account.meli_user_id,
        nickname: account.nickname,
        scope: account.scope,
        expires_at: account.access_token_expires_at ?? account.expires_at,
      });
      clearCookies(res);
      return res;
    }

    const res = NextResponse.redirect(
      uiRedirect(req, returnTo, {
        meli: "connected",
        user: String(account.meli_user_id),
      }),
    );
    clearCookies(res);
    return res;
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo completar OAuth";

    if (wantsJson(req)) {
      return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }

    const res = NextResponse.redirect(
      uiRedirect(req, returnTo, {
        meli: "error",
        reason: message.slice(0, 180),
      }),
    );
    clearCookies(res);
    return res;
  }
}
