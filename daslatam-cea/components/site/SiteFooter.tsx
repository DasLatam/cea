import Link from "next/link";

const footerColumns = [
  {
    title: "Contenido útil",
    links: [
      { href: "/guias", label: "Guías" },
      { href: "/como-funciona", label: "Cómo funciona" },
      { href: "/metodologia", label: "Metodología" },
      { href: "/fuentes", label: "Fuentes" },
    ],
  },
  {
    title: "Para detectar oportunidades",
    links: [
      { href: "/oportunidades", label: "Oportunidades" },
      { href: "/temporadas-y-tendencias", label: "Temporadas y tendencias" },
      { href: "/roadmap", label: "Roadmap" },
      { href: "/herramientas", label: "Herramientas" },
    ],
  },
  {
    title: "Herramientas disponibles",
    links: [
      { href: "/herramientas/vender-todo-el-ano", label: "Vender todo el Año" },
      { href: "/herramientas/calculadora-costos", label: "Calculadora de costos real" },
      { href: "/herramientas", label: "Próximamente" },
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
    title: "Legal y SEO",
    links: [
      { href: "/terminos", label: "Términos y condiciones" },
      { href: "/privacidad", label: "Privacidad" },
      { href: "/sitemap.xml", label: "Sitemap XML" },
      { href: "/robots.txt", label: "robots.txt" },
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
            CEA reúne guías, metodología y herramientas prácticas para ayudar a vendedores,
            emprendedores e importadores a tomar decisiones con más criterio. La propuesta del sitio es
            ordenar ideas, mostrar caminos concretos y dar contexto antes de invertir stock, capital o
            tiempo en una categoría. Hoy ya podés usar herramientas simples y leer contenido pensado para
            el mercado argentino; las próximas capas del producto se publicarán por etapas, sin exagerar
            alcances ni prometer automatizaciones frágiles.
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
