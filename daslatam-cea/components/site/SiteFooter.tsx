import Link from "next/link";

const useful = [
  { href: "/guias", label: "Guías" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/oportunidades", label: "Oportunidades" },
  { href: "/temporadas-y-tendencias", label: "Temporadas y tendencias" },
  { href: "/suscribirse", label: "Suscribirse" },
  { href: "/contacto", label: "Contáctenos" },
];

const tools = [
  { href: "/herramientas/vender-todo-el-anio", label: "Vender todo el año" },
  { href: "/herramientas/calculadora-costos", label: "Calculadora de costos real" },
  { href: "/herramientas", label: "Próximas herramientas" },
];

const legal = [
  { href: "/terminos", label: "Términos y condiciones" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/mapa-del-sitio", label: "Mapa del sitio" },
  { href: "/sitemap.xml", label: "Sitemap XML" },
  { href: "/robots.txt", label: "robots.txt" },
];

function LinkList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      {items.map((item) => (
        <Link key={item.href} href={item.href} style={{ color: "#f3f5f7", textDecoration: "none" }}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer style={{ background: "#0d1015", color: "#f3f5f7", marginTop: 56 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "36px 20px 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: 28 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div aria-hidden style={{ width: 18, height: 18, borderRadius: 4, background: "#ffe600" }} />
              <div>
                <div style={{ fontWeight: 900, letterSpacing: 0.4 }}>CEA</div>
                <div style={{ color: "#c5cbd3", fontSize: 14 }}>Comercio Electrónico en Argentina</div>
              </div>
            </div>
            <p className="footer-intro" style={{ color: "#d7dde4", lineHeight: 1.75, margin: 0, textAlign: "justify", hyphens: "auto" }}>
              CEA reúne guías, metodología y herramientas prácticas para ayudar a vendedores, marcas y emprendedores que quieren tomar mejores decisiones en comercio electrónico. El objetivo del sitio es ordenar información útil, bajar errores frecuentes y convertir ideas dispersas en criterios de trabajo más claros.
            </p>
          </div>

          <div>
            <h3 style={{ marginTop: 0, marginBottom: 14, fontSize: 18 }}>Secciones</h3>
            <LinkList items={useful} />
          </div>

          <div>
            <h3 style={{ marginTop: 0, marginBottom: 14, fontSize: 18 }}>Herramientas</h3>
            <LinkList items={tools} />
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", marginTop: 28, paddingTop: 22 }}>
          <div style={{ fontWeight: 800, marginBottom: 14 }}>Legal y SEO</div>
          <div className="footer-legal-row" style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "space-between" }}>
            {legal.map((item) => (
              <Link key={item.href} href={item.href} style={{ color: "#f3f5f7", textDecoration: "none" }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", marginTop: 24, paddingTop: 20, display: "grid", gap: 10 }}>
          <p style={{ margin: 0, color: "#c5cbd3", textAlign: "center" }}>
            El contenido es informativo y no reemplaza asesoramiento profesional específico.
          </p>
          <p style={{ margin: 0, color: "#c5cbd3", textAlign: "center" }}>
            Este sitio funciona gracias a <a href="https://daslatam.org" target="_blank" rel="noreferrer" style={{ color: "#ffe600" }}>DASLATAM.org</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
