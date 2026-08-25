// CEA vive en hiox.com.ar/cea/ y un robots.txt SÓLO se lee en la raíz del
// dominio: el que quedara en /cea/robots.txt no lo mira ningún buscador, y
// publicarlo ahí es dejar un archivo que parece que manda y no manda nada.
// Las reglas y el `Sitemap:` los pone el robots.txt de hiox, que sí está en la
// raíz y anuncia el sitemap de cada app (ver hiox/build.py::sitemaps_apps).
//
// Se deja el archivo, y no se borra, para que el próximo que busque "dónde está
// el robots de CEA" encuentre esta explicación en vez de nada.
export const dynamic = "force-static";

export default function robots() {
  return { rules: [{ userAgent: "*", allow: "/" }] };
}
