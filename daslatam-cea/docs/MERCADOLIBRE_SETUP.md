# Configuración correcta de Mercado Libre OAuth

## Variables necesarias en Vercel

- `MERCADOLIBRE_CLIENT_ID`
- `MERCADOLIBRE_CLIENT_SECRET`
- `MERCADOLIBRE_REDIRECT_URI`
- `MERCADOLIBRE_API_BASE=https://api.mercadolibre.com`
- `MERCADOLIBRE_AUTH_BASE=https://auth.mercadolibre.com.ar`
- `SUPABASE_URL` o `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## Importante

No guardes `access_token` ni `refresh_token` en variables de entorno para operación normal.
Los tokens deben quedar persistidos en `public.meli_oauth_accounts` y rotarse desde backend.

## Redirect URI correcta

Registrá exactamente:

`https://daslatamcea.vercel.app/api/meli/redirect`

La ruta `/api/meli/callback` queda reservada para notificaciones/webhooks, no para el intercambio OAuth.

## Flujo de conexión

1. Entrá a `/api/meli/status` y verificá configuración.
2. Abrí `/api/meli/connect`.
3. Mercado Libre redirige a `/api/meli/redirect?code=...&state=...`.
4. El backend intercambia `code` por tokens.
5. Los tokens quedan guardados en Supabase.
6. Probá `/api/meli/users-me`.

## Diagnóstico rápido

### `/api/meli/status`
Debe mostrar:
- `config.clientId: true`
- `config.clientSecret: true`
- `config.redirectUri: true`
- `config.supabase: true`

### Error `invalid_grant`
Suele significar una de estas cosas:
- refresh token vencido o revocado
- refresh token ya usado y rotado
- inconsistencia de app / redirect URI

Si persiste, reconectá desde `/api/meli/connect`.
