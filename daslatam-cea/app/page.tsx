import Link from "next/link";

const featured = [
  {
    title: "Guías",
    text: "Criterios prácticos para validar productos, medir margen, importar con más orden y evitar errores frecuentes.",
    href: "/guias",
  },
  {
    title: "Herramientas",
    text: "Recursos concretos para planificar campañas, calcular costos y ordenar decisiones comerciales.",
    href: "/herramientas",
  },
  {
    title: "Oportunidades",
    text: "Ideas accionables para vender durante el año sin depender sólo de la improvisación del momento.",
    href: "/oportunidades",
  },
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "34px 20px 56px" }}>
      <section
        style={{
          display: "grid",
          gap: 24,
          gridTemplateColumns: "1.15fr 0.85fr",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <div style={{ display: "grid", gap: 16 }}>
          <span style={{ display: "inline-flex", width: "fit-content", padding: "8px 12px", borderRadius: 999, background: "#fff7c8", color: "#6d5600", fontWeight: 800 }}>
            CEA · Comercio Electrónico en Argentina
          </span>
          <h1 style={{ fontSize: "clamp(2.4rem,5vw,4.4rem)", lineHeight: 0.98, margin: 0 }}>
            Información útil y herramientas concretas para vender mejor durante todo el año
          </h1>
          <div className="reading-block" style={{ display: "grid", gap: 14, maxWidth: 820, fontSize: 18, lineHeight: 1.8, textAlign: "justify", hyphens: "auto", color: "#374151" }}>
            <p style={{ margin: 0 }}>
              CEA reúne guías, metodología y herramientas para quienes venden o quieren vender más ordenadamente en Argentina. El foco del sitio está puesto en elegir mejor un producto, calcular costos con criterio, planificar campañas y evitar errores que se pagan caro cuando ya hay stock, tiempos y dinero comprometidos.
            </p>
            <p style={{ margin: 0 }}>
              La idea no es prometer fórmulas mágicas. La idea es ayudarte a tomar decisiones más claras, con mejor preparación y con un lenguaje pensado para el trabajo real de quien vende, importa, prueba productos o busca construir una operación más seria.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/herramientas" style={{ textDecoration: "none", background: "#ffe600", color: "#101114", padding: "14px 18px", borderRadius: 999, fontWeight: 900 }}>
              Ver herramientas
            </Link>
            <Link href="/guias" style={{ textDecoration: "none", background: "#009ee3", color: "#fff", padding: "14px 18px", borderRadius: 999, fontWeight: 900 }}>
              Explorar guías
            </Link>
          </div>
        </div>

        <div style={{ background: "#ffffff", color: "#111827", borderRadius: 24, padding: 26, display: "grid", gap: 16, border: "1px solid #e4e8ef", boxShadow: "0 8px 24px rgba(16,17,20,0.04)" }}>
          <h2 style={{ margin: 0, fontSize: 28 }}>Qué ya podés usar hoy</h2>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8, color: "#4b5563" }}>
            <li>Vender todo el año: agenda comercial con ventanas de compra, importación y publicación.</li>
            <li>Calculadora de costos real: costos, gastos y ganancia neta por producto.</li>
            <li>Guías desarrolladas para validar productos, importar y ordenar la parte fiscal.</li>
          </ul>
          <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>
            Próximamente se sumarán nuevos módulos para trabajar datos de productos, tendencias y validación comercial con más profundidad.
          </p>
        </div>
      </section>

      <section style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", marginBottom: 34 }}>
        {featured.map((item) => (
          <article key={item.href} style={{ background: "#fff", border: "1px solid #e4e8ef", borderRadius: 20, padding: 22, boxShadow: "0 8px 24px rgba(16,17,20,0.04)", display: "grid", gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: 24 }}>{item.title}</h2>
            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>{item.text}</p>
            <Link href={item.href} style={{ textDecoration: "none", color: "#0b6db4", fontWeight: 800 }}>
              Ver sección
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
