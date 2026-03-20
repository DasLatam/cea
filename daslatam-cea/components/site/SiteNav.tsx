import Link from "next/link";

const primaryLinks = [
  { href: "/", label: "Inicio" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/guias", label: "Guías" },
  { href: "/fuentes", label: "Fuentes" },
  { href: "/suscribirse", label: "Suscribirse" },
  { href: "/contacto", label: "Contáctenos" },
];

export function SiteNav() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="/" className="brand-mark" aria-label="DAS LATAM CEA">
          <span className="brand-pill">DAS LATAM</span>
          <span className="brand-text">CEA · Comercio Electrónico en Argentina</span>
        </Link>

        <nav className="nav-links" aria-label="Navegación principal">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/herramientas" className="button-primary nav-cta">
          Herramientas
        </Link>
      </div>
    </header>
  );
}
