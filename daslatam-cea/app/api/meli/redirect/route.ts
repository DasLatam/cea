import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForToken } from "@/lib/meli/oauth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function redirectWithParams(baseUrl: string, params: Record<string, string>) {
  const url = new URL(baseUrl);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  return url;
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");
  const reason = url.searchParams.get("error_description");
  const expectedState = req.cookies.get("meli_oauth_state")?.value;

  const appBase =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    `${url.protocol}//${url.host}`;

  const target = `${appBase}/herramientas`;

  if (error) {
    const res = NextResponse.redirect(
      redirectWithParams(target, {
        meli: "error",
        reason: reason || error,
      })
    );
    res.cookies.set("meli_oauth_state", "", { path: "/", maxAge: 0 });
    return res;
  }

  if (!code) {
    const res = NextResponse.redirect(
      redirectWithParams(target, {
        meli: "error",
        reason: "Missing code",
      })
    );
    res.cookies.set("meli_oauth_state", "", { path: "/", maxAge: 0 });
    return res;
  }

  if (!state || !expectedState || state !== expectedState) {
    const res = NextResponse.redirect(
      redirectWithParams(target, {
        meli: "error",
        reason: "State inválido",
      })
    );
    res.cookies.set("meli_oauth_state", "", { path: "/", maxAge: 0 });
    return res;
  }

  try {
    const account = await exchangeCodeForToken(code);

    const res = NextResponse.redirect(
      redirectWithParams(target, {
        meli: "connected",
        user: String(account.meli_user_id),
      })
    );

    res.cookies.set("meli_oauth_state", "", { path: "/", maxAge: 0 });
    return res;
  } catch (err: any) {
    const message =
      err?.message || "No se pudo completar OAuth";

    const res = NextResponse.redirect(
      redirectWithParams(target, {
        meli: "error",
        reason: message,
      })
    );

    res.cookies.set("meli_oauth_state", "", { path: "/", maxAge: 0 });
    return res;
  }
}