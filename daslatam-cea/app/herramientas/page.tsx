import Link from "next/link";

const tools = [
  {
    title: "Vender todo el año",
    href: "/herramientas/vender-todo-el-ano",
    status: "Disponible",
    description:
      "Calendario comercial con fechas de regalo, ventana de compra en China, tramo marítimo sugerido y publicación 30 días antes en Mercado Libre.",
  },
  {
    title: "Calculadora de margen real",
    href: "#",
    status: "Próximamente",
    description:
      "Costos, comisión, flete, impuestos y utilidad neta para validar si el negocio tiene sentido antes de importar.",
  },
  {
    title: "Radar de fechas fuertes",
    href: "#",
    status: "Próximamente",
    description:
      "Mapa rápido de campañas por trimestre para no comprar tarde ni publicar cuando el mercado ya está saturado.",
  },
];

export default function HerramientasPage() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "36px 20px 72px" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #111827 0%, #1f2937 55%, #0f172a 100%)",
          color: "#fff",
          borderRadius: 22,
          padding: 28,
          boxShadow: "0 12px 28px rgba(15, 23, 42, 0.16)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            padding: "8px 12px",
            borderRadius: 999,
            background: "#ffe600",
            color: "#111827",
            fontWeight: 800,
            fontSize: 13,
            marginBottom: 14,
          }}
        >
          CEA · Herramientas
        </div>
        <h1 style={{ margin: "0 0 10px", fontSize: 38, lineHeight: 1.08 }}>Herramientas para decidir mejor qué vender</h1>
        <p style={{ margin: 0, maxWidth: 860, color: "#d1d5db", lineHeight: 1.7, fontSize: 18 }}>
          Esta sección concentra herramientas prácticas para organizar campañas, validar márgenes y transformar intuiciones en un plan
          comercial más disciplinado. Empezamos por una herramienta simple pero potente: una agenda anual de oportunidades recurrentes.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18,
          marginTop: 24,
        }}
      >
        {tools.map((tool) => {
          const available = tool.status === "Disponible" && tool.href !== "#";
          const Card = (
            <article
              style={{
                height: "100%",
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 18,
                padding: 22,
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)",
                display: "grid",
                gap: 12,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  width: "fit-content",
                  padding: "6px 10px",
                  borderRadius: 999,
                  background: available ? "#dcfce7" : "#f3f4f6",
                  color: available ? "#166534" : "#374151",
                  fontWeight: 700,
                  fontSize: 13,
                }}
              >
                {tool.status}
              </div>
              <h2 style={{ margin: 0, fontSize: 24, color: "#111827" }}>{tool.title}</h2>
              <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.7 }}>{tool.description}</p>
              <div style={{ marginTop: 8, color: available ? "#0f62fe" : "#6b7280", fontWeight: 700 }}>
                {available ? "Abrir herramienta →" : "Disponible más adelante"}
              </div>
            </article>
          );

          return available ? (
            <Link key={tool.title} href={tool.href} style={{ textDecoration: "none" }}>
              {Card}
            </Link>
          ) : (
            <div key={tool.title}>{Card}</div>
          );
        })}
      </section>
    </main>
  );
}
