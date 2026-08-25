export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  // CEA se mudó a hiox.com.ar/cea/ el 2026-08-25: la subcarpeta hace que la
  // autoridad se sume al dominio en vez de arrancar de cero en el suyo. La URL
  // incluye el prefijo, así que canonical, Open Graph y sitemap salen bien solos.
  "https://hiox.com.ar/cea";

export const SITE_NAME = "Comercio Electrónico en Argentina";
export const SITE_DESCRIPTION = "CEA · Comercio Electrónico en Argentina";
export const ADSENSE_ACCOUNT = "ca-pub-8899449255698853";
