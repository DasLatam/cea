import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/discovery", label: "Discovery" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/guias/validar-producto", label: "Guías" },
  { href: "/analisis", label: "Análisis" },
  { href: "/fuentes", label: "Fuentes" },
];

export default function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Principal">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="nav-link">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
