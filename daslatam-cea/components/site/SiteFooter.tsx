import Link from "next/link";

const footerColumns = [
  {
    title: "Plataforma",
    links: [
      { href: "/como-funciona", label: "Cómo funciona" },
      { href: "/metodologia", label: "Metodología" },
      { href: "/fuentes", label: "Fuentes" },
      { href: "/roadmap", label: "Roadmap" },
    ],
  },
  {
    title: "Contenido útil",
    links: [
      { href: "/guias", label: "Guías prácticas" },
      { href: "/categorias/fitness", label: "Fitness" },
      { href: "/categorias/hogar", label: "Hogar" },
      { href: "/categorias/mascotas", label: "Mascotas" },
    ],
  },
  {
    title: "Relación con usuarios",
    links: [
      { href: "/suscribirse", label: "Suscribirse" },
      { href: "/contacto", label: "Contáctenos" },
      { href: "/about", label: "About" },
      { href: "/herramientas", label: "Herramientas" },
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
          <p className="footer-kicker">DAS LATAM CEA</p>
          <h2>Información práctica para vender mejor en Argentina.</h2>
          <p>
            En esta primera etapa priorizamos contenido original, criterios de análisis,
            contexto operativo y una base editorial sólida. La capa de herramientas
            avanzadas se liberará por fases para evitar promesas vacías y mantener un
            producto creíble.
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
        <p>
          © {new Date().getFullYear()} DAS LATAM CEA. Sitio editorial y de referencia sobre comercio electrónico en Argentina.
        </p>
        <p>
          El contenido no reemplaza asesoramiento contable, legal, impositivo ni de comercio exterior.
        </p>
      </div>
    </footer>
  );
}
