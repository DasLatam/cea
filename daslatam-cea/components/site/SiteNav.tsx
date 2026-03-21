"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/guias", label: "Guías" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/fuentes", label: "Fuentes" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/suscribirse", label: "Suscribirse" },
];

const labelByPath: Record<string, string> = {
  "/": "Inicio",
  "/guias": "Guías",
  "/metodologia": "Metodología",
  "/fuentes": "Fuentes",
  "/herramientas": "Herramientas",
  "/suscribirse": "Suscribirse",
  "/contacto": "Contáctenos",
  "/oportunidades": "Oportunidades",
  "/temporadas-y-tendencias": "Temporadas y tendencias",
};

function humanizeSegment(segment: string) {
  if (segment === "vender-todo-el-anio") return "Vender todo el año";
  return segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function SiteNav() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const label = labelByPath[href] || humanizeSegment(segment);
    return { href, label };
  });

  return (
    <header className="site-nav-header">
      <div className="site-nav-shell">
        <div className="site-nav-main">
          <Link href="/" className="site-nav-brand" aria-label="CEA · Comercio Electrónico en Argentina">
            <span className="site-nav-brand-mark" aria-hidden />
            <span className="site-nav-brand-copy">
              <span className="site-nav-brand-title">CEA</span>
              <span className="site-nav-brand-subtitle">Comercio Electrónico en Argentina</span>
            </span>
          </Link>

          <nav className="site-nav-links" aria-label="Navegación principal">
            {links.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? "site-nav-link site-nav-link--active" : "site-nav-link"}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {breadcrumbItems.length > 0 ? (
          <div className="site-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="site-breadcrumbs-link">
              Inicio
            </Link>
            {breadcrumbItems.map((item) => (
              <span key={item.href} className="site-breadcrumbs-item">
                <span className="site-breadcrumbs-separator">/</span>
                <Link href={item.href} className="site-breadcrumbs-link">
                  {item.label}
                </Link>
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
