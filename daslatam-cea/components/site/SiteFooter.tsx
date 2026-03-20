import Link from "next/link";

const footerColumns = [
  {
    title: "Contenido",
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
    title: "Relación con lectores",
    links: [
      { href: "/suscribirse", label: "Suscribirse" },
      { href: "/contacto", label: "Contáctenos" },
      { href: "/about", label: "Sobre el sitio" },
      { href: "/mapa-del-sitio", label: "Mapa del sitio" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terminos", label: "Términos y condiciones" },
      { href: "/privacidad", label: "Privacidad" },
      { href: "/sitemap.xml", label: "Sitemap XML" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer site-footer--dark">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <p className="footer-kicker footer-kicker--light">CEA</p>
          <h2>Comercio Electrónico en Argentina</h2>
          <p>
            Un espacio editorial para entender mejor productos, categorías, márgenes, logística,
            importación y decisiones de e-commerce en el mercado argentino. La sección de herramientas
            seguirá creciendo por etapas, pero el objetivo actual es ofrecer contenido realmente útil,
            claro y bien ordenado para quien necesita decidir con más criterio.
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
        <p>El contenido es informativo y no reemplaza asesoramiento profesional específico.</p>
      </div>
    </footer>
  );
}
