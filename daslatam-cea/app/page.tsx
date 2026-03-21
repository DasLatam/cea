import Link from "next/link";

export const metadata = {
  title: "Inicio",
  description:
    "Guías, metodología y herramientas prácticas para validar productos, calcular margen real y planificar campañas de comercio electrónico en Argentina.",
  keywords: [
    "comercio electrónico argentina",
    "mercado libre argentina",
    "validar productos",
    "calcular margen real",
    "importar desde china",
    "herramientas ecommerce argentina",
  ],
  openGraph: {
    title: "CEA · Comercio Electrónico en Argentina",
    description:
      "Criterio, método y herramientas para elegir mejor productos, calcular costos y planificar campañas con más orden.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CEA · Comercio Electrónico en Argentina",
    description:
      "Guías, metodología y herramientas prácticas para vender con más criterio en Argentina.",
  },
};

const quickStarts = [
  {
    title: "Validar antes de comprar",
    text: "Usá las guías para filtrar mejor una idea, revisar demanda, leer la competencia y evitar compras impulsivas.",
    href: "/guias",
    cta: "Leer guías",
  },
  {
    title: "Bajar una idea a números",
    text: "Pasá por la calculadora para ver si el producto soporta comisiones, logística, impuestos y embalaje sin inventarte margen.",
    href: "/herramientas/calculadora-costos",
    cta: "Abrir calculadora",
  },
  {
    title: "Planificar el año comercial",
    text: "Ordená campañas, ventanas de compra e importación con la agenda anual para no llegar tarde a las fechas fuertes.",
    href: "/herramientas/vender-todo-el-anio",
    cta: "Ver agenda anual",
  },
];

const included = [
  "Guías para elegir mejor un producto, estimar margen y evitar errores frecuentes.",
  "Metodología para cruzar tendencias, competencia, costos, redes y señales de demanda.",
  "Herramientas prácticas para calcular y planificar antes de comprometer stock.",
  "Fuentes concretas para mirar Mercado Libre, Google, Meta y proveedores con más criterio.",
];

export default function HomePage() {
  return (
    <main className="page-shell home-page-shell">
      <section className="home-hero-grid">
        <div className="surface-card home-hero-primary">
          <span className="page-chip page-chip--yellow">CEA · Comercio Electrónico en Argentina</span>

          <h1 className="home-hero-title">Criterio y herramientas para vender mejor en Argentina</h1>

          <div className="reading-block page-intro-reading home-hero-copy">
            <p style={{ margin: 0 }}>
              CEA está pensado para quienes quieren dejar de improvisar al momento de elegir un producto,
              calcular un margen, importar con más criterio o planificar campañas sin llegar tarde.
            </p>
            <p style={{ margin: 0 }}>
              El objetivo no es prometer productos mágicos. El objetivo es ayudarte a ordenar la
              información, bajar errores frecuentes y tomar decisiones comerciales con una base más seria.
            </p>
          </div>

          <div className="home-actions">
            <Link href="/herramientas" className="button-primary home-action-link">
              Ir a herramientas
            </Link>
            <Link href="/guias" className="button-secondary home-action-link">
              Explorar guías
            </Link>
          </div>
        </div>

        <aside className="surface-card home-hero-side">
          <div style={{ display: "grid", gap: 10 }}>
            <span className="side-kicker">Qué te ayuda a resolver CEA</span>
            <h2 className="home-side-title">
              Una base práctica para elegir mejor, calcular con criterio y planificar con tiempo
            </h2>
          </div>

          <ul className="home-side-list">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="home-side-process">
            <div className="home-side-process-title">Cómo conviene recorrerlo</div>
            <p style={{ margin: 0 }}>
              Si todavía estás explorando una idea, empezá por la metodología y las fuentes. Cuando ya
              tengas una hipótesis más clara, pasá por las guías y después usá las herramientas para poner
              números y fechas.
            </p>
          </div>
        </aside>
      </section>

      <section className="home-entry-section">
        <div className="home-entry-heading">
          <span className="section-kicker">Puntos de entrada</span>
          <h2>Tres recorridos útiles para empezar sin perder tiempo</h2>
        </div>

        <div className="home-entry-grid">
          {quickStarts.map((item) => (
            <article key={item.href} className="surface-card home-entry-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link href={item.href} className="text-link">
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
