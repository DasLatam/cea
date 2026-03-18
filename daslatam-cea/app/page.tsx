export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px 24px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <section
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          border: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#fff3cd",
            color: "#7a5d00",
            fontWeight: 700,
            padding: "8px 12px",
            borderRadius: 999,
            marginBottom: 16,
          }}
        >
          DAS LATAM CEA
        </div>

        <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: "0 0 16px" }}>
          Inteligencia comercial para vender mejor en Argentina
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 850, color: "#374151" }}>
          Plataforma orientada a detectar oportunidades de productos, analizar competencia,
          estimar márgenes y organizar decisiones comerciales para e-commerce en Argentina.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
          <a
            href="/api/meli/status"
            style={{
              background: "#009ee3",
              color: "#fff",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: 10,
              fontWeight: 700,
            }}
          >
            Ver estado de Mercado Libre
          </a>

          <a
            href="/api/meli/connect"
            style={{
              background: "#ffe600",
              color: "#111",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: 10,
              fontWeight: 700,
            }}
          >
            Conectar cuenta de Mercado Libre
          </a>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
          marginTop: 24,
        }}
      >
        {[
          ["Scanner Mercado Libre", "Búsqueda y análisis inicial de productos y listings."],
          ["Competencia", "Lectura rápida de densidad competitiva y presión de vendedores."],
          ["Márgenes", "Base para calcular costos, comisiones y rentabilidad."],
          ["Calendario comercial", "Oportunidades estacionales y ventanas de compra."],
        ].map(([title, text]) => (
          <div
            key={title}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: 14,
              padding: 20,
              boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: 20 }}>{title}</h2>
            <p style={{ marginBottom: 0, color: "#4b5563", lineHeight: 1.5 }}>{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}