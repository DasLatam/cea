import Link from "next/link";

const mainSections = [
  {
    title: "Guías",
    description:
      "Lecturas para validar productos, calcular margen real, importar con criterio y ordenar decisiones comerciales antes de comprometer stock.",
    links: [
      { href: "/guias", label: "Ver índice de guías" },
      { href: "/guias/validar-producto", label: "Validar un producto antes de comprar stock" },
      { href: "/guias/margen-real", label: "Calcular margen real y no margen de fantasía" },
      { href: "/guias/importar-desde-china", label: "Importar desde China con criterio comercial" },
      { href: "/guias/importacion-courier", label: "Importación por courier" },
      { href: "/guias/peso-y-fragilidad", label: "Peso, fragilidad y devoluciones" },
      { href: "/guias/monotributo-mercado-libre", label: "Monotributo y Mercado Libre" },
    ],
  },
  {
    title: "Metodología",
    description:
      "Explica cómo cruzar tendencias, competencia, costos, señales de demanda, proveedores y publicidad antes de decidir qué vender.",
    links: [
      { href: "/metodologia", label: "Ver metodología" },
      { href: "/fuentes", label: "Ver fuentes de análisis" },
    ],
  },
  {
    title: "Herramientas",
    description:
      "Recursos prácticos para poner fechas, números y escenarios sobre una hipótesis concreta.",
    links: [
      { href: "/herramientas", label: "Ver herramientas" },
      { href: "/herramientas/calculadora-costos", label: "Calculadora de costos real" },
      { href: "/herramientas/vender-todo-el-anio", label: "Vender todo el año" },
    ],
  },
];

const supportPages = [
  { href: "/suscribirse", label: "Suscribirse" },
  { href: "/contacto", label: "Contáctenos" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos y condiciones" },
];

const recommendedPath = [
  "Empezá por Metodología si todavía estás explorando un nicho o una idea de producto.",
  "Pasá por Fuentes para ver dónde mirar demanda, tendencia, competencia y proveedores con más criterio.",
  "Usá las Guías para bajar esa información a decisiones concretas de margen, importación y operación.",
  "Cuando la hipótesis esté más clara, entrá a las Herramientas para poner números y calendario.",
];

function Card({
  title,
  description,
  links,
}: {
  title: string;
  description: string;
  links: { href: string; label: string }[];
}) {
  return (
    <article
      style={{
        background: "#fff",
        border: "1px solid #e4e8ef",
        borderRadius: 24,
        padding: 24,
        boxShadow: "0 8px 24px rgba(16,17,20,0.04)",
        display: "grid",
        gap: 14,
        alignContent: "start",
      }}
    >
      <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.08 }}>{title}</h2>
      <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>
        {description}
      </p>
      <div style={{ display: "grid", gap: 10 }}>
        {links.map((item) => (
          <Link key={item.href} href={item.href} style={{ textDecoration: "none", color: "#0b6db4", fontWeight: 800 }}>
            {item.label}
          </Link>
        ))}
      </div>
    </article>
  );
}

export default function SitemapPage() {
  return (
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "34px 20px 56px" }}>
      <section style={{ display: "grid", gap: 16, maxWidth: 920, marginBottom: 30 }}>
        <span
          style={{
            display: "inline-flex",
            width: "fit-content",
            padding: "8px 12px",
            borderRadius: 999,
            background: "#fff7c8",
            color: "#6d5600",
            fontWeight: 800,
          }}
        >
          Mapa del sitio
        </span>
        <h1 style={{ margin: 0, fontSize: "clamp(2.2rem,4vw,3.6rem)", lineHeight: 1.02 }}>
          Un recorrido claro para encontrar rápido lo que necesitás
        </h1>
        <div
          className="reading-block"
          style={{ display: "grid", gap: 14, color: "#374151", fontSize: 18, lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}
        >
          <p style={{ margin: 0 }}>
            Esta página ordena las secciones principales de CEA para que no tengas que navegar a ciegas.
            En vez de listar enlaces sueltos, la idea es mostrar qué función cumple cada bloque del sitio y
            por dónde conviene empezar según la etapa en la que estés.
          </p>
          <p style={{ margin: 0 }}>
            Si todavía no definiste producto o nicho, conviene arrancar por la metodología y las fuentes.
            Si ya tenés una hipótesis concreta, probablemente te sirva más ir directo a las guías o a las
            herramientas.
          </p>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gap: 18,
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          marginBottom: 28,
        }}
      >
        {mainSections.map((section) => (
          <Card key={section.title} title={section.title} description={section.description} links={section.links} />
        ))}
      </section>

      <section
        style={{
          display: "grid",
          gap: 22,
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(280px, 0.9fr)",
          alignItems: "start",
        }}
      >
        <article
          style={{
            background: "#fff",
            border: "1px solid #e4e8ef",
            borderRadius: 24,
            padding: 24,
            boxShadow: "0 8px 24px rgba(16,17,20,0.04)",
            display: "grid",
            gap: 14,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.08 }}>Recorrido sugerido</h2>
          <ol style={{ margin: 0, paddingLeft: 22, display: "grid", gap: 12, color: "#4b5563", lineHeight: 1.75 }}>
            {recommendedPath.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <aside
          style={{
            background: "#fff",
            border: "1px solid #e4e8ef",
            borderRadius: 24,
            padding: 24,
            boxShadow: "0 8px 24px rgba(16,17,20,0.04)",
            display: "grid",
            gap: 14,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 26, lineHeight: 1.08 }}>Páginas complementarias</h2>
          <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>
            Acá tenés los accesos que completan la estructura pública del sitio para suscripción,
            contacto y documentación general.
          </p>
          <div style={{ display: "grid", gap: 10 }}>
            {supportPages.map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none", color: "#0b6db4", fontWeight: 800 }}>
                {item.label}
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
