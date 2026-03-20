import Link from "next/link";

const footerColumns = [
  {
    title: "Explorar",
    links: [
      { href: "/guias", label: "Guías" },
      { href: "/como-funciona", label: "Cómo funciona" },
      { href: "/metodologia", label: "Metodología" },
      { href: "/fuentes", label: "Fuentes" },
    ],
  },
  {
    title: "Secciones",
    links: [
      { href: "/analisis", label: "Análisis" },
      { href: "/discovery", label: "Discovery" },
      { href: "/roadmap", label: "Roadmap" },
      { href: "/herramientas", label: "Herramientas" },
    ],
  },
  {
    title: "Relación con usuarios",
    links: [
      { href: "/suscribirse", label: "Suscribirse" },
      { href: "/contacto", label: "Contáctenos" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terminos", label: "Términos y condiciones" },
      { href: "/privacidad", label: "Privacidad" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <p className="footer-kicker">CEA · Comercio Electrónico en Argentina</p>
          <h2>Información práctica para tomar mejores decisiones comerciales.</h2>
          <p>
            Este sitio reúne guías, contexto operativo, criterios de evaluación y contenido útil para
            vendedores, importadores y emprendedores que trabajan con comercio electrónico en Argentina.
            La sección de herramientas se irá habilitando por fases, pero la base actual ya busca ser
            útil, clara y accionable para el público general.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="footer-column">
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} CEA · Comercio Electrónico en Argentina.</p>
        <p>Este sitio funciona gracias a DASLATAM.org.</p>
        <p>
          El contenido no reemplaza asesoramiento contable, legal, impositivo ni de comercio exterior.
        </p>
      </div>
    </footer>
  );
}
