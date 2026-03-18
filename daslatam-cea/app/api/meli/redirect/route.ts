import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

function getRequiredEnv() {
  return {
    clientId: process.env.MERCADOLIBRE_CLIENT_ID,
    clientSecret: process.env.MERCADOLIBRE_CLIENT_SECRET,
    redirectUri: process.env.MERCADOLIBRE_REDIRECT_URI,
  };
}

function buildAuthUrl(clientId: string, redirectUri: string, state?: string) {
  const url = new URL('https://auth.mercadolibre.com.ar/authorization');
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', redirectUri);
  if (state) url.searchParams.set('state', state);
  return url.toString();
}

export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const state = searchParams.get('state') ?? undefined;

  const { clientId, clientSecret, redirectUri } = getRequiredEnv();

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      {
        ok: false,
        error: 'missing_env',
        message:
          'Faltan MERCADOLIBRE_CLIENT_ID o MERCADOLIBRE_REDIRECT_URI en variables de entorno.',
        expectedRedirectUri: `${origin}/api/meli/redirect`,
      },
      { status: 500 },
    );
  }

  if (error) {
    return NextResponse.json(
      {
        ok: false,
        error,
        message: 'Mercado Libre devolvió un error durante la autorización.',
      },
      { status: 400 },
    );
  }

  // Step 1: start authorization by visiting this route without a code.
  if (!code) {
    return NextResponse.redirect(buildAuthUrl(clientId, redirectUri, state));
  }

  // Step 2: Mercado Libre redirected back with ?code=...
  if (!clientSecret) {
    return NextResponse.json(
      {
        ok: false,
        error: 'missing_env',
        message:
          'Recibimos el code, pero falta MERCADOLIBRE_CLIENT_SECRET para intercambiarlo por tokens.',
        code,
      },
      { status: 500 },
    );
  }

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: clientId,
    client_secret: clientSecret,
    code,
    redirect_uri: redirectUri,
  });

  const tokenResponse = await fetch('https://api.mercadolibre.com/oauth/token', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
    cache: 'no-store',
  });

  const rawText = await tokenResponse.text();

  let payload: any = null;
  try {
    payload = JSON.parse(rawText);
  } catch {
    payload = { raw: rawText };
  }

  if (!tokenResponse.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: 'token_exchange_failed',
        status: tokenResponse.status,
        payload,
      },
      { status: 502 },
    );
  }

  const accessToken = payload?.access_token ?? null;
  const refreshToken = payload?.refresh_token ?? null;

  return NextResponse.json({
    ok: true,
    message:
      'Token obtenido correctamente. Copiá estos valores a Vercel si todavía no lo hiciste.',
    expiresIn: payload?.expires_in ?? null,
    userId: payload?.user_id ?? null,
    scope: payload?.scope ?? null,
    accessToken,
    refreshToken,
  });
}
