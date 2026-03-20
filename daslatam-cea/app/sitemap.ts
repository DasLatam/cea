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
  "/herramientas/vender-todo-el-ano",
  "/herramientas/calculadora-costos",
  "/mapa-del-sitio",
  "/oportunidades",
  "/temporadas-y-tendencias",
  "/categorias/fitness",
  "/categorias/hogar",
  "/categorias/mascotas",
  "/categorias/belleza",
];

export default function sitemap(): SitemapEntry[] {
  const base = "https://daslatamcea.vercel.app";

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/herramientas/")
        ? 0.9
        : route === "/herramientas" || route === "/guias"
        ? 0.85
        : 0.7,
  }));
}
