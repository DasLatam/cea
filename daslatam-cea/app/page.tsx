import Link from "next/link";

const quickStarts = [
  {
    title: "Elegir mejor un producto",
    text: "Usá la metodología y las guías para validar demanda, revisar competencia y evitar compras impulsivas.",
    href: "/metodologia",
    cta: "Ver metodología",
  },
  {
    title: "Calcular margen real",
    text: "Pasá por la calculadora para entender si el producto soporta comisiones, logística, impuestos y embalaje.",
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
  "Guías para validar productos, estimar margen y ordenar decisiones comerciales.",
  "Metodología para cruzar tendencias, competencia, costos, redes y señales de demanda.",
  "Herramientas prácticas para calcular y planificar antes de comprometer stock.",
  "Fuentes concretas para mirar Mercado Libre, Google, Meta y proveedores con más criterio.",
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "34px 20px 56px" }}>
      <section
        style={{
          display: "grid",
          gap: 24,
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(320px, 0.8fr)",
          alignItems: "stretch",
          marginBottom: 34,
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "1px solid #e4e8ef",
            borderRadius: 28,
            padding: "34px 32px",
            boxShadow: "0 10px 30px rgba(16,17,20,0.05)",
            display: "grid",
            gap: 18,
          }}
        >
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
            CEA · Comercio Electrónico en Argentina
          </span>

          <h1 style={{ fontSize: "clamp(2.5rem,5vw,4.7rem)", lineHeight: 0.95, margin: 0, maxWidth: "11ch" }}>
            Criterio, método y herramientas para vender mejor en Argentina
          </h1>

          <div
            className="reading-block"
            style={{
              display: "grid",
              gap: 14,
              maxWidth: 820,
              fontSize: 18,
              lineHeight: 1.8,
              textAlign: "justify",
              hyphens: "auto",
              color: "#374151",
            }}
          >
            <p style={{ margin: 0 }}>
              CEA está pensado para quienes quieren dejar de improvisar al momento de elegir un
              producto, calcular un margen, importar con más criterio o planificar campañas sin
              llegar tarde.
            </p>
            <p style={{ margin: 0 }}>
              El objetivo no es prometer productos mágicos. El objetivo es ayudarte a ordenar la
              información, bajar errores frecuentes y tomar decisiones comerciales con una base más
              seria.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", paddingTop: 4 }}>
            <Link
              href="/herramientas"
              style={{
                textDecoration: "none",
                background: "#ffe600",
                color: "#101114",
                padding: "14px 18px",
                borderRadius: 999,
                fontWeight: 900,
                boxShadow: "0 10px 24px rgba(255,230,0,0.22)",
              }}
            >
              Ir a herramientas
            </Link>
            <Link
              href="/metodologia"
              style={{
                textDecoration: "none",
                background: "#ffffff",
                color: "#0b6db4",
                padding: "14px 18px",
                borderRadius: 999,
                fontWeight: 900,
                border: "1px solid rgba(11,109,180,0.18)",
              }}
            >
              Entender la metodología
            </Link>
          </div>
        </div>

        <aside
          style={{
            background: "#ffffff",
            color: "#111827",
            borderRadius: 28,
            padding: 28,
            display: "grid",
            gap: 18,
            border: "1px solid #e4e8ef",
            boxShadow: "0 10px 30px rgba(16,17,20,0.05)",
            alignContent: "start",
          }}
        >
          <div style={{ display: "grid", gap: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#735c0f", textTransform: "uppercase", letterSpacing: 0.4 }}>
              Qué encontrás en el sitio
            </span>
            <h2 style={{ margin: 0, fontSize: 30, lineHeight: 1.1 }}>Una base práctica para analizar antes de invertir</h2>
          </div>

          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8, color: "#4b5563", display: "grid", gap: 10 }}>
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div
            style={{
              borderRadius: 18,
              border: "1px solid #e8edf5",
              background: "#f8fafc",
              padding: 18,
              display: "grid",
              gap: 10,
            }}
          >
            <div style={{ fontWeight: 800, color: "#0f172a" }}>Forma recomendada de uso</div>
            <p style={{ margin: 0, color: "#475569", lineHeight: 1.75 }}>
              Empezá por la metodología si todavía estás explorando un producto o un nicho. Después
              validá con las guías y, recién cuando tengas una hipótesis concreta, pasá a las
              herramientas para poner números y fechas.
            </p>
          </div>
        </aside>
      </section>

      <section style={{ display: "grid", gap: 16, marginBottom: 18 }}>
        <div style={{ display: "grid", gap: 8, maxWidth: 760 }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: "#735c0f", textTransform: "uppercase", letterSpacing: 0.4 }}>
            Puntos de entrada
          </span>
          <h2 style={{ margin: 0, fontSize: "clamp(1.8rem,3vw,2.5rem)", lineHeight: 1.08 }}>
            Tres recorridos útiles para empezar sin perder tiempo
          </h2>
        </div>

        <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
          {quickStarts.map((item) => (
            <article
              key={item.href}
              style={{
                background: "#fff",
                border: "1px solid #e4e8ef",
                borderRadius: 22,
                padding: 24,
                boxShadow: "0 8px 24px rgba(16,17,20,0.04)",
                display: "grid",
                gap: 14,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 24, lineHeight: 1.15 }}>{item.title}</h3>
              <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>
                {item.text}
              </p>
              <Link href={item.href} style={{ textDecoration: "none", color: "#0b6db4", fontWeight: 800 }}>
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
