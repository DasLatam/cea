import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

const AUTH_BASE = process.env.MERCADOLIBRE_AUTH_BASE || "https://auth.mercadolibre.com.ar";
const CLIENT_ID = process.env.MERCADOLIBRE_CLIENT_ID;
const REDIRECT_URI = process.env.MERCADOLIBRE_REDIRECT_URI;

function sanitizeReturnTo(raw: string | null) {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return "/herramientas";
  return raw;
}

export async function GET(req: NextRequest) {
  if (!CLIENT_ID || !REDIRECT_URI) {
    return NextResponse.json(
      { ok: false, error: "Faltan MERCADOLIBRE_CLIENT_ID o MERCADOLIBRE_REDIRECT_URI." },
      { status: 500 },
    );
  }

  const state = crypto.randomBytes(24).toString("hex");
  const returnTo = sanitizeReturnTo(req.nextUrl.searchParams.get("returnTo"));

  const url = new URL(`${AUTH_BASE}/authorization`);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("client_id", CLIENT_ID);
  url.searchParams.set("redirect_uri", REDIRECT_URI);
  url.searchParams.set("state", state);

  const res = NextResponse.redirect(url.toString());
  res.cookies.set("meli_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });
  res.cookies.set("meli_oauth_return_to", returnTo, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });

  return res;
}
