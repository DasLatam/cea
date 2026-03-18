# DAS LATAM CEA

Plataforma web para analizar oportunidades de productos en Mercado Libre Argentina con una combinación de herramienta, scoring, contenido original y roadmap de producto.

## Estado de esta entrega

Esta versión corrige dos problemas estructurales de la iteración anterior:

1. deja de hacer fallback directo del navegador a `api.mercadolibre.com`, que generaba `403` por restricciones del lado cliente;
2. deja explícito el estado real de cada fuente y mantiene la UX operativa con un modo demo interno cuando las fuentes externas fallan.

## Qué funciona

- Home editorial con contenido original
- Herramienta de búsqueda con score e insights
- Guardado de búsquedas y favoritos en Supabase si está configurado
- Guías, categorías, análisis, discovery editorial, roadmap y página de fuentes
- Popup anti-adblock por detección de extensiones que bloquean anuncios
- API de búsqueda con tres capas:
  - Mercado Libre API pública
  - reconstrucción desde HTML público
  - semilla interna demo claramente señalada

## Qué sigue en roadmap

- Google demand signals
- Meta audience signals
- Alibaba sourcing
- Discovery automático
- Tracking histórico completo
- Calculadora financiera avanzada
- Newsletter

## Variables de entorno

Copiá `.env.example` a `.env.local`.

### Necesarias

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL`

### Opcionales

- `NEXT_PUBLIC_ADSENSE_CLIENT`
- `RESEND_API_KEY`
- `EMAIL_FROM`

## Base de datos

Ejecutar en Supabase:

- `supabase/migrations/001_init.sql`

## Notas importantes

- Si Mercado Libre bloquea la consulta pública desde Vercel, la app intentará HTML público.
- Si tampoco hay datos suficientes, la UI no queda vacía: entra en modo semilla interna demo.
- Los ítems demo no se guardan como favoritos para no mezclar datos reales con simulados.

## Desarrollo

```bash
npm install
npm run dev
```
