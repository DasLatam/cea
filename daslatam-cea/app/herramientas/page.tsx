import Link from "next/link";

const toolCards = [
  {
    href: "/herramientas/vender-todo-el-ano",
    title: "Vender todo el Año",
    description:
      "Una agenda comercial para anticiparte a las fechas de regalo, comprar con tiempo, importar más barato y llegar con stock cuando el mercado empieza a buscar.",
    status: "Disponible",
  },
  {
    href: "/herramientas",
    title: "Más herramientas",
    description:
      "Estamos preparando nuevos módulos prácticos de planificación comercial, validación de producto y márgenes.",
    status: "Próximamente",
  },
];

export default function HerramientasPage() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 20px 72px" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #fff8cc 0%, #ffffff 55%, #e9f6ff 100%)",
          border: "1px solid #e8e8e8",
          borderRadius: 24,
          padding: 32,
          boxShadow: "0 18px 50px rgba(17, 24, 39, 0.08)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "#111827",
            color: "#fff",
            borderRadius: 999,
            padding: "8px 14px",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 0.3,
            marginBottom: 14,
          }}
        >
          Herramientas CEA
        </span>
        <h1 style={{ margin: "0 0 12px", fontSize: 42, lineHeight: 1.05 }}>
          Herramientas simples para planificar mejor tus ventas
        </h1>
        <p style={{ margin: 0, maxWidth: 820, fontSize: 18, lineHeight: 1.7, color: "#374151" }}>
          Empezamos por módulos concretos, prácticos y fáciles de usar. La idea es que cada
          herramienta te ayude a tomar decisiones con anticipación: qué vender, cuándo comprar,
          cuándo publicar y cómo organizar campañas repetibles durante todo el año.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          marginTop: 28,
        }}
      >
        {toolCards.map((tool) => (
          <article
            key={tool.title}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: 22,
              padding: 24,
              boxShadow: "0 14px 34px rgba(17, 24, 39, 0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div
              style={{
                alignSelf: "flex-start",
                borderRadius: 999,
                padding: "7px 12px",
                fontSize: 12,
                fontWeight: 800,
                background: tool.status === "Disponible" ? "#dcfce7" : "#f3f4f6",
                color: tool.status === "Disponible" ? "#166534" : "#374151",
              }}
            >
              {tool.status}
            </div>
            <h2 style={{ margin: 0, fontSize: 24 }}>{tool.title}</h2>
            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.7 }}>{tool.description}</p>
            {tool.status === "Disponible" ? (
              <Link
                href={tool.href}
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  background: "#111827",
                  color: "#fff",
                  borderRadius: 14,
                  padding: "14px 16px",
                  fontWeight: 800,
                }}
              >
                Abrir herramienta
              </Link>
            ) : (
              <span
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px dashed #cbd5e1",
                  color: "#475569",
                  borderRadius: 14,
                  padding: "14px 16px",
                  fontWeight: 700,
                }}
              >
                Próximamente
              </span>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
