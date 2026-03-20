import { SITE_URL } from "@/lib/site";

const routes = [
  "",
  "/guias",
  "/metodologia",
  "/herramientas",
  "/herramientas/calculadora-costos",
  "/herramientas/vender-todo-el-anio",
  "/suscribirse",
  "/contacto",
  "/terminos",
  "/privacidad",
  "/fuentes",
  "/mapa-del-sitio",
];

export default function sitemap() {
  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
