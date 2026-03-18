# DAS LATAM CEA

Plataforma web para analizar oportunidades de productos en Mercado Libre Argentina con una combinación de herramienta, scoring, contenido original, calendario comercial y módulos externos por credenciales.

## Estado de esta entrega

Esta versión corrige tres problemas de base:

1. elimina el modo demo como fallback de resultados;
2. deja explícito cuándo Mercado Libre está bloqueando el upstream con `403`;
3. separa claramente UX, scoring y contenido de la capa de conectores externos.

## Qué funciona hoy

- Home editorial con contenido original
- Herramienta de búsqueda con score e insights
- Guardado de búsquedas y favoritos en Supabase si está configurado
- Guías, categorías, análisis, discovery editorial, roadmap y página de fuentes
- Popup anti-adblock por detección de extensiones que bloquean anuncios
- Calendario de oportunidades con alerta de compra 60 días antes
- API de búsqueda con este orden:
  - Mercado Libre API pública
  - Mercado Libre con token OAuth propio del backend
  - reconstrucción desde HTML público

## Qué no debe marcarse como operativo sin credenciales

- Google demand signals
- Meta audience signals
- Alibaba sourcing

## Variables de entorno

Copiá `.env.example` a `.env.local`.

### Base mínima

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL`

### Mercado Libre

- `MERCADOLIBRE_ACCESS_TOKEN`

### Google Ads

- `GOOGLE_ADS_DEVELOPER_TOKEN`
- `GOOGLE_ADS_CLIENT_ID`
- `GOOGLE_ADS_CLIENT_SECRET`
- `GOOGLE_ADS_REFRESH_TOKEN`
- `GOOGLE_ADS_CUSTOMER_ID`

### Meta

- `META_ACCESS_TOKEN`
- `META_AD_ACCOUNT_ID`

### Alibaba

- `ALIBABA_APP_KEY`
- `ALIBABA_APP_SECRET`

## Base de datos

Ejecutar en Supabase:

- `supabase/migrations/001_init.sql`

## Notas importantes

- Si Mercado Libre responde `403` desde el upstream, la app ya no mostrará resultados demo.
- La salida robusta para ese bloqueo es un token OAuth propio de Mercado Libre en backend.
- Google Trends API no debe darse por hecho: el acceso oficial sigue siendo limitado y, para datos históricos accionables, conviene pensar Google Ads API.
- Meta reach estimate requiere Marketing API y ad account real.

## Desarrollo

```bash
npm install
npm run dev
```


## Mercado Libre OAuth rápido

- `MERCADOLIBRE_REDIRECT_URI` debe coincidir exactamente con la URL configurada en Developers.
- Para iniciar la autorización, visitá `/api/meli/redirect`.
- Mercado Libre volverá a esa misma URL con `?code=...` y el endpoint intentará intercambiar el code por tokens.
- `app/api/meli/callback/route.ts` queda reservado para notificaciones/webhooks.
