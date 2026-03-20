import Link from "next/link";

const sections = [
  {
    title: "Principal",
    links: [
      ["/", "Inicio"],
      ["/guias", "Guías"],
      ["/herramientas", "Herramientas"],
      ["/metodologia", "Metodología"],
      ["/suscribirse", "Suscribirse"],
      ["/contacto", "Contáctenos"],
    ],
  },
  {
    title: "Herramientas publicadas",
    links: [
      ["/herramientas/vender-todo-el-anio", "Vender todo el año"],
      ["/herramientas/calculadora-costos", "Calculadora de costos real"],
    ],
  },
  {
    title: "Legal y SEO",
    links: [
      ["/terminos", "Términos y condiciones"],
      ["/privacidad", "Privacidad"],
      ["/sitemap.xml", "Sitemap XML"],
      ["/robots.txt", "robots.txt"],
    ],
  },
];

export default function MapaDelSitioPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "34px 20px 56px" }}>
      <section style={{ display: "grid", gap: 14, marginBottom: 28 }}>
        <span style={{ display: "inline-flex", width: "fit-content", padding: "8px 12px", borderRadius: 999, background: "#eef8ff", color: "#0b6db4", fontWeight: 800 }}>Mapa del sitio</span>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", margin: 0, lineHeight: 1.05 }}>Accesos principales de CEA</h1>
        <p className="reading-block" style={{ margin: 0, color: "#374151", lineHeight: 1.8, maxWidth: 860 }}>
          Este mapa resume las páginas más importantes del sitio para facilitar la navegación de usuarios y buscadores. Reúne accesos a contenido editorial, herramientas publicadas y recursos legales o técnicos de indexación.
        </p>
      </section>

      <section style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
        {sections.map((section) => (
          <article key={section.title} style={{ background: "#fff", border: "1px solid #e4e8ef", borderRadius: 18, padding: 22, boxShadow: "0 8px 24px rgba(16,17,20,0.04)" }}>
            <h2 style={{ marginTop: 0 }}>{section.title}</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {section.links.map(([href, label]) => (
                <Link key={href} href={href} style={{ color: "#0b6db4", textDecoration: "none", fontWeight: 700 }}>
                  {label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
