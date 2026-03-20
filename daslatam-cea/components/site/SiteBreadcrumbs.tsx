"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  about: "Sobre el sitio",
  "como-funciona": "Cómo funciona",
  metodologia: "Metodología",
  guias: "Guías",
  fuentes: "Fuentes",
  suscribirse: "Novedades",
  contacto: "Contacto",
  privacidad: "Privacidad",
  terminos: "Términos",
  roadmap: "Roadmap",
  analisis: "Análisis",
  discovery: "Discovery",
  herramientas: "Herramientas",
  categorias: "Categorías",
  fitness: "Fitness",
  hogar: "Hogar",
  mascotas: "Mascotas",
  belleza: "Belleza",
  "mapa-del-sitio": "Mapa del sitio",
  "validar-producto": "Validar producto",
  "margen-real": "Margen real",
  "importar-desde-china": "Importar desde China",
  "importacion-courier": "Importación courier",
  "peso-y-fragilidad": "Peso y fragilidad",
  "monotributo-mercado-libre": "Monotributo y Mercado Libre",
};

export function SiteBreadcrumbs() {
  const pathname = usePathname();

  if (!pathname || pathname === "/" || pathname.startsWith("/api/")) {
    return null;
  }

  const parts = pathname.split("/").filter(Boolean);
  const crumbs = parts.map((part, index) => {
    const href = "/" + parts.slice(0, index + 1).join("/");
    return {
      href,
      label: labels[part] || part.replace(/-/g, " "),
    };
  });

  return (
    <div className="crumbs-bar">
      <div className="shell crumbs-shell" aria-label="Ruta de navegación">
        <Link href="/" className="crumb-link">
          Inicio
        </Link>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <span key={crumb.href} className="crumb-item">
              <span className="crumb-separator">/</span>
              {isLast ? (
                <span className="crumb-current">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="crumb-link">
                  {crumb.label}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
