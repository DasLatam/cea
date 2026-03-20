type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};

const routes = [
  "",
  "/about",
  "/como-funciona",
  "/metodologia",
  "/guias",
  "/guias/validar-producto",
  "/guias/margen-real",
  "/guias/importar-desde-china",
  "/guias/importacion-courier",
  "/guias/peso-y-fragilidad",
  "/guias/monotributo-mercado-libre",
  "/fuentes",
  "/contacto",
  "/suscribirse",
  "/roadmap",
  "/privacidad",
  "/terminos",
  "/herramientas",
  "/categorias/fitness",
  "/categorias/hogar",
  "/categorias/mascotas",
  "/categorias/belleza",
  "/analisis",
  "/discovery",
];

export default function sitemap(): SitemapEntry[] {
  const base = "https://daslatamcea.vercel.app";

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
