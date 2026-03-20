import Link from "next/link";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const featureCards = [
  {
    title: "Guías útiles y concretas",
    text:
      "Explicaciones extensas sobre validación de productos, márgenes, importación, logística, fragilidad y operación diaria. La idea es dar contexto antes de tomar decisiones.",
  },
  {
    title: "Criterio y metodología",
    text:
      "La sección metodológica muestra cómo conviene analizar una categoría, leer riesgos y ordenar variables sin quedarse con una sola señal aislada.",
  },
  {
    title: "Novedades semanales",
    text:
      "La suscripción busca reunir oportunidades, alertas y contenidos nuevos en un formato breve y útil para quienes siguen el e-commerce argentino.",
  },
  {
    title: "Herramientas en preparación",
    text:
      "La capa de producto va a crecer por fases. Mientras tanto, el sitio prioriza lectura útil, navegación clara y contenido realmente aplicable.",
  },
];

const quickLinks = [
  { href: "/guias", label: "Ver guías prácticas" },
  { href: "/metodologia", label: "Entender la metodología" },
  { href: "/fuentes", label: "Revisar fuentes" },
  { href: "/suscribirse", label: "Recibir novedades" },
  { href: "/contacto", label: "Hacer una consulta" },
  { href: "/herramientas", label: "Ir a Herramientas" },
];

export default function HomePage() {
  return (
    <main className="home-main">
      <section className="shell hero-grid">
        <div className="hero-card hero-card--home">
          <p className="eyebrow">CEA</p>
          <h1>Comercio Electrónico en Argentina</h1>
          <p className="hero-lead">
            Información útil para evaluar productos, entender categorías, revisar márgenes y tomar
            mejores decisiones comerciales en el mercado argentino.
          </p>
          <p className="hero-paragraph">
            Este sitio está pensado para vendedores, emprendedores, importadores y equipos que necesitan
            una base más clara para decidir qué probar, qué revisar y qué evitar. En esta etapa, el foco
            está puesto en contenido sólido, navegación ordenada y criterios públicos antes que en promesas
            técnicas exageradas.
          </p>
          <div className="hero-actions">
            <Link href="/guias" className="button-primary">
              Explorar guías
            </Link>
            <Link href="/suscribirse" className="button-secondary">
              Recibir novedades
            </Link>
          </div>
        </div>

        <aside className="hero-side-card">
          <p className="aside-kicker">Punto de partida</p>
          <h2>Qué vas a encontrar en CEA</h2>
          <ul>
            <li>Guías largas y prácticas sobre validación, importación, logística y márgenes.</li>
            <li>Metodología pública para entender el criterio del sitio.</li>
            <li>Secciones institucionales completas: contacto, privacidad, términos y roadmap.</li>
            <li>Una futura capa de herramientas, hoy visible de forma honesta como próxima etapa.</li>
          </ul>
        </aside>
      </section>

      <section className="shell section-spacing">
        <div className="section-heading">
          <p className="eyebrow">Para quién sirve</p>
          <h2>Contenido pensado para decidir mejor, no para impresionar.</h2>
          <p>
            CEA está orientado a personas que venden, quieren vender o están evaluando categorías,
            productos y oportunidades en Argentina. La propuesta es ayudarte a ordenar preguntas,
            reconocer riesgos y leer el contexto con más claridad.
          </p>
        </div>

        <div className="feature-grid">
          {featureCards.map((card) => (
            <article key={card.title} className="feature-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section-spacing section-reading">
        <div className="section-heading narrow">
          <p className="eyebrow">Cómo recorrer el sitio</p>
          <h2>Elegí el punto de entrada que más se ajuste a tu necesidad.</h2>
          <p>
            Si querés resolver una duda práctica, empezá por Guías. Si preferís entender el criterio del
            sitio, seguí por Metodología y Fuentes. Si querés mantenerte al día, la sección de novedades
            resume el contenido nuevo y las futuras oportunidades semanales.
          </p>
        </div>

        <div className="reading-list">
          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href} className="reading-link">
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="shell newsletter-band section-spacing">
        <div className="newsletter-copy">
          <p className="eyebrow">Novedades</p>
          <h2>Sumate para recibir oportunidades y contenidos nuevos.</h2>
          <p>
            Esta interfaz ya deja preparada la suscripción para futuras alertas semanales, guías nuevas y
            recordatorios comerciales relevantes.
          </p>
        </div>
        <NewsletterForm compact />
      </section>
    </main>
  );
}
