"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/guias", label: "Guías" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/suscribirse", label: "Suscribirse" },
  { href: "/contacto", label: "Contáctenos" },
];

const labelByPath: Record<string, string> = {
  "/": "Inicio",
  "/guias": "Guías",
  "/metodologia": "Metodología",
  "/herramientas": "Herramientas",
  "/suscribirse": "Suscribirse",
  "/contacto": "Contáctenos",
  "/oportunidades": "Oportunidades",
  "/temporadas-y-tendencias": "Temporadas y tendencias",
};

function humanizeSegment(segment: string) {
  if (segment === "vender-todo-el-anio") return "Vender todo el año";
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
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
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e7ebf1",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "14px 20px 10px",
        }}
      >
        <div style={{ display: "flex", gap: 18, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                aria-hidden
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 4,
                  background: "#ffe600",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
                }}
              />
              <div>
                <div style={{ fontWeight: 900, letterSpacing: 0.4 }}>CEA</div>
                <div style={{ fontSize: 13, color: "#5d6470" }}>Comercio Electrónico en Argentina</div>
              </div>
            </div>
          </Link>

          <nav style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    color: active ? "#101114" : "#445062",
                    background: active ? "#ffe600" : "transparent",
                    border: active ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent",
                    borderRadius: 999,
                    padding: "10px 14px",
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div style={{ marginTop: 10, fontSize: 13, color: "#6c7480", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Inicio</Link>
          {breadcrumbItems.map((item) => (
            <span key={item.href} style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
              <span>/</span>
              <Link href={item.href} style={{ color: "inherit", textDecoration: "none" }}>
                {item.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
