import Link from "next/link";

const primaryLinks = [
  { href: "/guias", label: "Guías" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/suscribirse", label: "Novedades" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteNav() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="/" className="brand-mark" aria-label="Comercio Electrónico en Argentina">
          <span className="brand-square" aria-hidden="true" />
          <span className="brand-lockup">
            <span className="brand-kicker">CEA</span>
            <span className="brand-text">Comercio Electrónico en Argentina</span>
          </span>
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
