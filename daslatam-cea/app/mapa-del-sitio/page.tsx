import Link from "next/link";

const sections = [
  {
    title: "Navegación principal",
    links: [
      ["/", "Inicio"],
      ["/guias", "Guías"],
      ["/metodologia", "Metodología"],
      ["/suscribirse", "Novedades"],
      ["/contacto", "Contáctenos"],
      ["/herramientas", "Herramientas"],
    ],
  },
  {
    title: "Oportunidades y lectura del mercado",
    links: [
      ["/oportunidades", "Oportunidades"],
      ["/temporadas-y-tendencias", "Temporadas y tendencias"],
      ["/categorias/fitness", "Categoría Fitness"],
      ["/categorias/hogar", "Categoría Hogar"],
      ["/categorias/mascotas", "Categoría Mascotas"],
      ["/categorias/belleza", "Categoría Belleza"],
    ],
  },
  {
    title: "Herramientas publicadas",
    links: [
      ["/herramientas/vender-todo-el-ano", "Vender todo el Año"],
      ["/herramientas/calculadora-costos", "Calculadora de costos real"],
      ["/herramientas", "Ver todas las herramientas"],
    ],
  },
  {
    title: "Contenido institucional y legal",
    links: [
      ["/about", "Sobre el sitio"],
      ["/como-funciona", "Cómo funciona"],
      ["/fuentes", "Fuentes"],
      ["/roadmap", "Roadmap"],
      ["/privacidad", "Privacidad"],
      ["/terminos", "Términos y condiciones"],
      ["/sitemap.xml", "Sitemap XML"],
      ["/robots.txt", "robots.txt"],
    ],
  },
];

export default function MapaDelSitioPage() {
  return (
    <main className="editorial-main">
      <div className="shell editorial-shell">
        <section className="hero-card hero-card--compact">
          <p className="eyebrow">Mapa del sitio</p>
          <h1>Todo el contenido útil de CEA, ordenado en un solo lugar.</h1>
          <p className="hero-lead">
            Esta página reúne las rutas principales del sitio para que cualquier visitante pueda
            orientarse rápido, descubrir herramientas, volver a una guía específica o acceder a la
            información legal y técnica que ayuda a Google a indexar correctamente el proyecto.
          </p>
        </section>

        <div className="feature-grid sitemap-grid">
          {sections.map((section) => (
            <article key={section.title} className="feature-card">
              <h2>{section.title}</h2>
              <ul className="sitemap-list">
                {section.links.map(([href, label]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
