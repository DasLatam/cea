export default function HerramientasPage() {
  return (
    <main style={{ padding: "40px 20px 72px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gap: 24 }}>
        <section
          style={{
            background: "linear-gradient(135deg, #fffef2 0%, #ffffff 55%, #eef8ff 100%)",
            border: "1px solid #e7ecf3",
            borderRadius: 24,
            padding: 28,
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
            display: "grid",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 800, color: "#735c0f", textTransform: "uppercase", letterSpacing: 0.4 }}>
            Herramientas disponibles
          </span>
          <h1 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05, color: "#0f172a" }}>
            Herramientas concretas para ordenar decisiones comerciales
          </h1>
          <p style={{ margin: 0, color: "#475569", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
            CEA prioriza herramientas que sirvan para tomar decisiones con criterio. Hoy ya podés usar una agenda comercial anual para campañas recurrentes y una calculadora de costos real para validar si el negocio cierra antes de comprometer capital.
          </p>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          <a
            href="/herramientas/vender-todo-el-anio"
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "#fff",
              border: "1px solid #e7ecf3",
              borderRadius: 22,
              padding: 22,
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.04)",
              display: "grid",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 800, color: "#735c0f", textTransform: "uppercase", letterSpacing: 0.4 }}>Herramienta 1</span>
            <h2 style={{ margin: 0, fontSize: 22 }}>Vender todo el año</h2>
            <p style={{ margin: 0, color: "#475569", lineHeight: 1.7, textAlign: "justify", hyphens: "auto" }}>
              Calendario operativo con fechas comerciales, compra sugerida, publicación y campañas repetibles para sostener oportunidades durante todo el año.
            </p>
            <strong style={{ color: "#009ee3" }}>Abrir herramienta</strong>
          </a>

          <a
            href="/herramientas/calculadora-costos"
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "#fff",
              border: "1px solid #e7ecf3",
              borderRadius: 22,
              padding: 22,
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.04)",
              display: "grid",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 800, color: "#735c0f", textTransform: "uppercase", letterSpacing: 0.4 }}>Herramienta 2</span>
            <h2 style={{ margin: 0, fontSize: 22 }}>Calculadora de costos real</h2>
            <p style={{ margin: 0, color: "#475569", lineHeight: 1.7, textAlign: "justify", hyphens: "auto" }}>
              Calculá costo unitario, cargos de Mercado Libre, retenciones, logística y ganancia neta por unidad antes de invertir en stock.
            </p>
            <strong style={{ color: "#009ee3" }}>Abrir herramienta</strong>
          </a>
        </section>
      </div>
    </main>
  );
}
