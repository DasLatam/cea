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
    title: "Contenido institucional",
    links: [
      ["/about", "Sobre el sitio"],
      ["/como-funciona", "Cómo funciona"],
      ["/fuentes", "Fuentes"],
      ["/roadmap", "Roadmap"],
      ["/privacidad", "Privacidad"],
      ["/terminos", "Términos y condiciones"],
    ],
  },
  {
    title: "Categorías y análisis",
    links: [
      ["/analisis", "Análisis"],
      ["/discovery", "Discovery"],
      ["/categorias/fitness", "Categoría Fitness"],
      ["/categorias/hogar", "Categoría Hogar"],
      ["/categorias/mascotas", "Categoría Mascotas"],
      ["/categorias/belleza", "Categoría Belleza"],
    ],
  },
];

export default function MapaDelSitioPage() {
  return (
    <main className="editorial-main">
      <div className="shell editorial-shell">
        <section className="hero-card hero-card--compact">
          <p className="eyebrow">Mapa del sitio</p>
          <h1>Accesos rápidos para recorrer todo CEA.</h1>
          <p className="hero-lead">
            Esta página concentra las secciones principales del sitio para que cualquier visitante pueda
            orientarse rápido, volver a una sección anterior o descubrir contenido complementario.
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
