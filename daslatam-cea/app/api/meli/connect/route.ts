import { NextResponse } from "next/server";
import crypto from "crypto";

const AUTH_BASE = process.env.MERCADOLIBRE_AUTH_BASE || "https://auth.mercadolibre.com.ar";
const CLIENT_ID = process.env.MERCADOLIBRE_CLIENT_ID!;
const REDIRECT_URI = process.env.MERCADOLIBRE_REDIRECT_URI!;

export async function GET() {
  const state = crypto.randomBytes(24).toString("hex");

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

  return res;
}