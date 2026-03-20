import Link from "next/link";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const featureCards = [
  {
    title: "Guías útiles y concretas",
    text:
      "Explicaciones extensas sobre validación de productos, márgenes, importación, logística, fragilidad y operación diaria. La idea es dar contexto antes de tomar decisiones.",
  },
  {
    title: "Oportunidades y temporadas",
    text:
      "Contenido pensado para ayudar a detectar momentos de venta, campañas repetibles y nichos estacionales sin depender de promesas mágicas ni supuestos poco claros.",
  },
  {
    title: "Herramientas publicadas",
    text:
      "CEA ya reúne una agenda anual para vender durante todo el año y una calculadora de costos real para revisar gastos, comisiones y ganancia antes de publicar.",
  },
  {
    title: "Novedades semanales",
    text:
      "La suscripción busca reunir oportunidades, alertas y contenidos nuevos en un formato breve y útil para quienes siguen el e-commerce argentino.",
  },
];

const quickLinks = [
  { href: "/guias", label: "Ver guías prácticas" },
  { href: "/oportunidades", label: "Explorar oportunidades" },
  { href: "/temporadas-y-tendencias", label: "Leer temporadas y tendencias" },
  { href: "/herramientas/vender-todo-el-ano", label: "Abrir Vender todo el Año" },
  { href: "/herramientas/calculadora-costos", label: "Abrir Calculadora de costos" },
  { href: "/suscribirse", label: "Recibir novedades" },
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
            está puesto en contenido sólido, herramientas simples realmente usables y un lenguaje público,
            directo y orientado a resolver problemas concretos.
          </p>
          <div className="hero-actions">
            <Link href="/herramientas" className="button-primary">
              Ver herramientas
            </Link>
            <Link href="/guias" className="button-secondary">
              Explorar guías
            </Link>
          </div>
        </div>

        <aside className="hero-side-card">
          <p className="aside-kicker">Hoy en CEA</p>
          <h2>Qué ya podés usar en el sitio</h2>
          <ul>
            <li>Guías largas y prácticas sobre validación, importación, logística y márgenes.</li>
            <li>Contenido público sobre oportunidades, temporadas y lectura comercial.</li>
            <li>Agenda anual para planificar compras, campañas y ventas durante todo el año.</li>
            <li>Calculadora de costos para revisar comisión, logística, retenciones y ganancia.</li>
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
            Si querés resolver una duda práctica, empezá por Guías. Si querés pensar campañas y ventanas
            de venta, seguí por Oportunidades y Temporadas. Si necesitás pasar a la acción, Herramientas
            reúne la agenda anual y la calculadora de costos ya disponibles.
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
            Esta interfaz deja preparada la suscripción para futuras alertas semanales, guías nuevas y
            recordatorios comerciales relevantes.
          </p>
        </div>
        <NewsletterForm compact />
      </section>
    </main>
  );
}
