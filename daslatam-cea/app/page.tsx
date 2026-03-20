import Link from "next/link";

const featureCards = [
  {
    title: "Metodología antes que promesa",
    text:
      "La primera etapa del proyecto está centrada en criterio editorial, lectura del mercado y documentación útil. Antes de liberar automatizaciones, necesitamos explicar qué mirar, qué descartar y por qué.",
  },
  {
    title: "Guías pensadas para Argentina",
    text:
      "Las decisiones en e-commerce no se toman igual que en otros países. Acá pesan logística, rotación de caja, comisiones, fragilidad, fiscalidad y timing comercial local.",
  },
  {
    title: "Suscripción semanal",
    text:
      "La sección de suscripción ya quedó planteada para ordenar criterios de curaduría, frecuencia y expectativas. El alta operativa se conectará cuando la capa de listas y automatización quede cerrada.",
  },
  {
    title: "Herramientas en siguiente fase",
    text:
      "La sección Herramientas sigue visible para marcar el camino del producto, pero por ahora funciona como landing de próximos lanzamientos. Preferimos eso antes que publicar una demo incompleta.",
  },
];

const readingLinks = [
  { href: "/como-funciona", label: "Cómo funciona la plataforma" },
  { href: "/metodologia", label: "Metodología editorial y analítica" },
  { href: "/guias", label: "Guías prácticas para decidir mejor" },
  { href: "/fuentes", label: "Fuentes, límites y criterio de uso" },
  { href: "/suscribirse", label: "Suscribirse a oportunidades semanales" },
  { href: "/contacto", label: "Contáctenos" },
];

export default function HomePage() {
  return (
    <main className="home-main">
      <section className="shell hero-grid">
        <div className="hero-card hero-card--home">
          <p className="eyebrow">DAS LATAM · Comercio Electrónico en Argentina</p>
          <h1>Construimos primero el criterio, después las herramientas.</h1>
          <p className="hero-lead">
            Este sitio inicia por su capa más útil y más creíble: contenido original, metodología,
            lectura operativa y contexto para decidir qué vender, cuándo avanzar y dónde están los riesgos.
            La plataforma de inteligencia comercial vendrá después, sobre una base editorial seria.
          </p>
          <p className="hero-paragraph">
            En lugar de llenar la pantalla con widgets prematuros, estamos armando un entorno de trabajo
            que ayude a separar demanda aparente de demanda real, margen teórico de margen defendible,
            oportunidad puntual de oportunidad sostenible. Esa diferencia importa mucho en Argentina,
            donde el costo de equivocarse en una compra, una importación o un lote inmovilizado suele ser alto.
          </p>
          <div className="hero-actions">
            <Link href="/herramientas" className="button-primary">
              Herramientas
            </Link>
            <Link href="/guias" className="button-secondary">
              Ver guías
            </Link>
          </div>
        </div>

        <aside className="hero-side-card">
          <p className="aside-kicker">En esta etapa</p>
          <h2>Qué ya vas a poder consultar</h2>
          <ul>
            <li>Guías extensas para validar productos antes de comprometer capital.</li>
            <li>Marco metodológico para leer competencia, precio y timing comercial.</li>
            <li>Información útil sobre importación, fragilidad, monotributo y operación diaria.</li>
            <li>Suscripción editorial pensada para oportunidades semanales curadas.</li>
          </ul>
        </aside>
      </section>

      <section className="shell section-spacing">
        <div className="section-heading">
          <p className="eyebrow">Enfoque editorial</p>
          <h2>Una plataforma que quiere ser útil tiene que explicar cómo piensa.</h2>
          <p>
            La propuesta de DAS LATAM CEA no es parecer una demo ni un scraper. El objetivo es convertirse en una referencia práctica para pequeños y medianos operadores que necesitan criterio antes de invertir. Por eso el sitio arranca con páginas sustantivas, legibles, trazables y realmente orientadas a la toma de decisiones.
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
          <p className="eyebrow">Lecturas recomendadas</p>
          <h2>Ordená primero las preguntas correctas.</h2>
          <p>
            No todo problema de e-commerce se resuelve con más datos. Muchas veces se resuelve con mejores criterios: entender qué tipo de producto exige respaldo, cuál depende de estacionalidad, cuándo una categoría está demasiado saturada o por qué una operación de courier puede parecer simple en la teoría y complejizarse rápido en la práctica.
          </p>
        </div>

        <div className="reading-list">
          {readingLinks.map((item) => (
            <Link key={item.href} href={item.href} className="reading-link">
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="shell newsletter-band section-spacing">
        <div>
          <p className="eyebrow">Suscripción editorial</p>
          <h2>Preparando el envío semanal de oportunidades.</h2>
          <p>
            La suscripción no se plantea como una lista de correos genérica. La intención es construir un envío semanal curado, con foco en señales comerciales, ventanas de compra, alertas operativas y contexto local. Primero definimos el estándar editorial; luego activamos la entrega automatizada.
          </p>
        </div>
        <Link href="/suscribirse" className="button-secondary strong">
          Conocer el esquema de suscripción
        </Link>
      </section>
    </main>
  );
}
