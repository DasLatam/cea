import Link from "next/link";

const tools = [
  {
    href: "/herramientas/vender-todo-el-ano",
    title: "Vender todo el Año",
    description:
      "Agenda comercial para comprar, importar, publicar y vender con campañas recurrentes durante todo el año.",
    status: "Disponible",
  },
  {
    href: "/herramientas/calculadora-costos",
    title: "Calculadora de costos real",
    description:
      "Calculá comisión, logística, retenciones y ganancia unitaria antes de comprar o publicar en Mercado Libre.",
    status: "Nueva",
  },
];

export default function HerramientasPage() {
  return (
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "36px 20px 64px" }}>
      <section style={{ display: "grid", gap: 16, marginBottom: 28 }}>
        <span style={{ display: "inline-flex", width: "fit-content", padding: "8px 12px", borderRadius: 999, background: "#fff7cc", color: "#6b5d00", fontWeight: 700 }}>
          Herramientas CEA
        </span>
        <div>
          <h1 style={{ margin: "0 0 10px", fontSize: 40, lineHeight: 1.08 }}>Herramientas para decidir mejor antes de vender</h1>
          <p style={{ margin: 0, maxWidth: 860, color: "#4b5563", fontSize: 18, lineHeight: 1.7 }}>
            Este espacio reúne calculadoras, agendas y utilidades pensadas para e-commerce en Argentina. La idea no es llenar de funciones vacías, sino ofrecer herramientas cortas, prácticas y usables para tomar decisiones comerciales con más criterio.
          </p>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
        {tools.map((tool) => (
          <article
            key={tool.href}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: 20,
              padding: 24,
              boxShadow: "0 14px 40px rgba(15,23,42,0.06)",
              display: "grid",
              gap: 14,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
              <h2 style={{ margin: 0, fontSize: 24 }}>{tool.title}</h2>
              <span style={{ padding: "6px 10px", borderRadius: 999, background: "#eff6ff", color: "#1d4ed8", fontWeight: 700, fontSize: 13 }}>
                {tool.status}
              </span>
            </div>
            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.7 }}>{tool.description}</p>
            <Link
              href={tool.href}
              style={{
                width: "fit-content",
                textDecoration: "none",
                fontWeight: 800,
                color: "#111827",
                background: "#ffe600",
                padding: "12px 16px",
                borderRadius: 12,
              }}
            >
              Abrir herramienta
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
