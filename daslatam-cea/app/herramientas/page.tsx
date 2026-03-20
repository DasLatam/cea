import Link from "next/link";

const published = [
  {
    href: "/herramientas/vender-todo-el-anio",
    title: "Vender todo el año",
    description: "Agenda comercial para detectar campañas repetibles, comprar con anticipación y ordenar la publicación de productos a tiempo.",
  },
  {
    href: "/herramientas/calculadora-costos",
    title: "Calculadora de costos real",
    description: "Modelo práctico para estimar costos, gastos y ganancia neta según modalidad logística, precio y estructura de venta.",
  },
];

const upcoming = [
  "Buscador de productos en Mercado Libre",
  "Exploración de tendencias",
  "Validación de demanda y publicidad",
];

export default function HerramientasPage() {
  return (
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "34px 20px 56px" }}>
      <section style={{ display: "grid", gap: 14, marginBottom: 28 }}>
        <span style={{ display: "inline-flex", width: "fit-content", padding: "8px 12px", borderRadius: 999, background: "#eef8ff", color: "#0b6db4", fontWeight: 800 }}>Herramientas</span>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3.4rem)", lineHeight: 1.05, margin: 0 }}>Recursos concretos para planificar, medir y decidir mejor</h1>
        <p className="reading-block" style={{ margin: 0, maxWidth: 900, color: "#374151", lineHeight: 1.8 }}>
          Esta sección reúne herramientas simples, orientadas a problemas reales de comercio electrónico: ordenar campañas, revisar costos, anticipar compras y trabajar decisiones con más criterio. La idea es crecer con módulos útiles, no con promesas vacías.
        </p>
      </section>

      <section style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", marginBottom: 30 }}>
        {published.map((tool) => (
          <article key={tool.href} style={{ background: "#fff", border: "1px solid #e4e8ef", borderRadius: 18, padding: 22, boxShadow: "0 8px 24px rgba(16,17,20,0.04)", display: "grid", gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: 24 }}>{tool.title}</h2>
            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>{tool.description}</p>
            <Link href={tool.href} style={{ color: "#0b6db4", textDecoration: "none", fontWeight: 800 }}>
              Abrir herramienta
            </Link>
          </article>
        ))}
      </section>

      <section style={{ background: "#0f1720", color: "#f4f7fb", borderRadius: 22, padding: 24, display: "grid", gap: 14 }}>
        <h2 style={{ margin: 0, fontSize: 26 }}>Próximamente</h2>
        <ul style={{ margin: 0, paddingLeft: 20, color: "#d5dce4", lineHeight: 1.8 }}>
          {upcoming.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
