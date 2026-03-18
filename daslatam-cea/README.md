# DAS LATAM CEA v5

Aplicación web en Next.js para analizar oportunidades de productos en Mercado Libre Argentina.

## Qué incluye esta versión

- Home editorial con contenido original.
- Página de herramientas separada del contenido.
- Guías y páginas indexables para mejorar evaluación de calidad del sitio.
- Diseño inspirado en la lógica visual amarillo / celeste / blanco.
- Popup anti-AdBlock que bloquea el acceso hasta desactivar la extensión y revalidar.
- Búsquedas guardadas y favoritos en Supabase.
- Fallback de búsqueda:
  - intenta primero con la API pública desde el servidor
  - si falla, intenta respaldo HTML en servidor
  - si vuelve a fallar, el cliente intenta directo desde el navegador
- sitemap y robots.

## Variables necesarias

Copiar `.env.example` a `.env.local`.

## Supabase

1. Ejecutar `supabase/migrations/001_init.sql`.
2. Cargar en Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy en Vercel

- Framework: Next.js
- Root Directory: carpeta del proyecto
- Build Command: `next build`
- Output: automático

## Notas

- Si Mercado Libre rechaza la API pública desde el servidor, la interfaz muestra la fuente alternativa utilizada.
- El anti-AdBlock es un control del lado cliente y puede ajustarse o retirarse fácilmente si preferís un enfoque menos restrictivo.
