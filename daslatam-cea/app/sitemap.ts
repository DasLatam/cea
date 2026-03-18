import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://daslatamcea.vercel.app";

const routes = [
  "",
  "/herramientas",
  "/como-funciona",
  "/metodologia",
  "/discovery",
  "/roadmap",
  "/fuentes",
  "/guias/validar-producto",
  "/guias/margen-real",
  "/guias/importar-desde-china",
  "/guias/peso-y-fragilidad",
  "/guias/monotributo-mercado-libre",
  "/guias/importacion-courier",
  "/categorias/fitness",
  "/categorias/hogar",
  "/categorias/mascotas",
  "/categorias/belleza",
  "/analisis",
  "/about",
  "/contacto",
  "/privacidad",
  "/terminos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "/herramientas" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/herramientas" ? 0.9 : 0.7,
  }));
}
