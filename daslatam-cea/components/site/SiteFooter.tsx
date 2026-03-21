import Link from "next/link";

const sections = [
  { href: "/guias", label: "Guías" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/fuentes", label: "Fuentes" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/suscribirse", label: "Suscribirse" },
  { href: "/contacto", label: "Contáctenos" },
];

const tools = [
  { href: "/herramientas/vender-todo-el-anio", label: "Vender todo el año" },
  { href: "/herramientas/calculadora-costos", label: "Calculadora de costos real" },
];

const startHere = [
  { href: "/metodologia", label: "Cómo validar un producto" },
  { href: "/guias/margen-real", label: "Cómo calcular margen real" },
  { href: "/fuentes", label: "Fuentes para investigar" },
];

const legal = [
  { href: "/terminos", label: "Términos y condiciones" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/mapa-del-sitio", label: "Mapa del sitio" },
];

function LinkList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <div className="site-footer-link-list">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="site-footer-link">
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer-dark">
      <div className="site-footer-shell">
        <div className="site-footer-top">
          <div className="site-footer-brand-block">
            <div className="site-footer-brand-row">
              <div aria-hidden className="site-footer-brand-mark" />
              <div>
                <div className="site-footer-brand-title">CEA</div>
                <div className="site-footer-brand-subtitle">Comercio Electrónico en Argentina</div>
              </div>
            </div>
            <p className="site-footer-intro">
              CEA reúne guías, metodología, fuentes y herramientas prácticas para ayudar a tomar mejores
              decisiones comerciales. La propuesta del sitio es ordenar información útil, bajar errores
              frecuentes y convertir intuiciones en criterios de trabajo más claros.
            </p>
          </div>

          <div className="site-footer-links-area">
            <div className="site-footer-column">
              <h3>Secciones</h3>
              <LinkList items={sections} />
            </div>

            <div className="site-footer-column">
              <h3>Puntos de partida</h3>
              <LinkList items={startHere} />
            </div>

            <div className="site-footer-column">
              <h3>Herramientas publicadas</h3>
              <LinkList items={tools} />
            </div>
          </div>
        </div>

        <div className="site-footer-legal-block">
          <div className="site-footer-legal-title">Legal y SEO</div>
          <div className="site-footer-legal-row">
            {legal.map((item) => (
              <Link key={item.href} href={item.href} className="site-footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>El contenido es informativo y no reemplaza asesoramiento profesional específico.</p>
          <p>
            Este sitio funciona gracias a{" "}
            <a href="https://daslatam.org" target="_blank" rel="noreferrer">
              DASLATAM.org
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
