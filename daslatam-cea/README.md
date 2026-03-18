# DAS LATAM CEA

Aplicación web en Next.js para analizar oportunidades de productos en Mercado Libre Argentina.

## Qué incluye esta entrega

- Búsqueda en Mercado Libre Argentina con endpoint robusto
- Dashboard con KPIs
- Scoring de productos
- Insights automáticos
- Guardado automático de búsquedas en Supabase
- Guardado de productos favoritos
- Estructura escalable por módulos
- AdSense integrado de forma segura
- Favicon incluido para eliminar el 404 de `/favicon.ico`

## Problemas corregidos respecto de la versión anterior

1. **`/api/ml/search` devolvía 500**
   - Ahora valida la respuesta de Mercado Libre
   - Si Mercado Libre falla, responde JSON consistente con mensaje de error

2. **`Unexpected end of JSON input` en el frontend**
   - Ahora el cliente maneja respuestas no OK y nunca intenta parsear JSON vacío

3. **`/favicon.ico` devolvía 404**
   - Se incluye `public/favicon.ico`

4. **`adsbygoogle.js ERR_BLOCKED_BY_CLIENT`**
   - No es un bug de la app: normalmente lo causa un bloqueador de anuncios
   - La app sigue funcionando aunque el anuncio no cargue

## Requisitos

- Node 18+
- Proyecto de Supabase
- Tablas creadas con el SQL de `supabase/migrations/001_init.sql`

## Instalación

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Variables necesarias

### Obligatorias para búsquedas
- `NEXT_PUBLIC_SITE_URL`

### Obligatorias para guardar búsquedas/favoritos en Supabase
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

### Opcionales
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_ADSENSE_CLIENT`
- `NEXT_PUBLIC_ADSENSE_SLOT_SEARCH`
- `RESEND_API_KEY`
- `EMAIL_FROM`

## Base de datos

Ejecutá este archivo SQL en Supabase:

```text
supabase/migrations/001_init.sql
```

## Flujo actual

- El usuario busca un producto
- El backend consulta Mercado Libre
- Se normalizan resultados
- Se calcula score + insights + flags
- Se devuelve un dashboard enriquecido
- La búsqueda se guarda automáticamente en Supabase usando un `session_id` local
- Se puede marcar un ítem como favorito

## Nota de arquitectura

Esta entrega usa **session_id anónimo** para que funcione ya, sin forzarte a implementar login antes de tiempo.  
La migración a Supabase Auth después es directa: solo habría que agregar `user_id` en `search_runs` y `saved_items`.

## Deploy en Vercel

### Root Directory
Si el repo contiene esta app en la raíz:
- Root Directory vacío

Si está dentro de una subcarpeta:
- configurar esa subcarpeta como Root Directory

### Environment Variables
Cargar en Vercel las mismas variables de `.env.local`.

## Próximos pasos razonables

- Autenticación con Supabase Auth
- Alertas por email con Resend
- Cálculo de costos, fees y margen neto
- Integración con Alibaba
- Estacionalidad por categoría / trends
- Reglas de monotributo y alertas fiscales
