# Configuración simple de app de Mercado Libre

1. Entrá a Developers de Mercado Libre con tu cuenta principal.
2. Creá una aplicación nueva.
3. Definí un redirect URI HTTPS fijo, por ejemplo: `https://daslatamcea.vercel.app/api/meli/callback`.
4. Copiá APP_ID y SECRET_KEY.
5. Abrí la URL de autorización con tu APP_ID y redirect URI.
6. Autorizá la app y copiá el `code` de la URL de callback.
7. Intercambiá ese `code` por `access_token` y `refresh_token` contra `https://api.mercadolibre.com/oauth/token`.
8. Guardá en Vercel: `MERCADOLIBRE_CLIENT_ID`, `MERCADOLIBRE_CLIENT_SECRET`, `MERCADOLIBRE_REDIRECT_URI`, `MERCADOLIBRE_ACCESS_TOKEN`, `MERCADOLIBRE_REFRESH_TOKEN`.
