import Link from "next/link";

const featureCards = [
  {
    title: "Guías útiles y concretas",
    text:
      "La sección Guías reúne contenido largo y práctico sobre validación de productos, márgenes, importación, logística y operación diaria. La intención es que cualquier lector encuentre criterios aplicables, no texto de relleno.",
  },
  {
    title: "Metodología explicada",
    text:
      "Antes de hablar de oportunidades conviene dejar claro cómo se evalúan una categoría, un producto y un riesgo. Por eso la metodología está visible y escrita en lenguaje accesible para el público general.",
  },
  {
    title: "Suscripción semanal",
    text:
      "La suscripción está pensada como un canal de actualización para recibir oportunidades, señales comerciales y contenido seleccionado. La idea es enviar información breve, curada y realmente útil para la operatoria.",
  },
  {
    title: "Herramientas en preparación",
    text:
      "La sección Herramientas permanece visible para marcar el rumbo del producto. Mientras se completa esa etapa, el sitio prioriza contenido confiable, lectura de contexto y orientación práctica para usuarios reales.",
  },
];

const quickLinks = [
  { href: "/guias", label: "Ver guías prácticas" },
  { href: "/metodologia", label: "Leer la metodología" },
  { href: "/suscribirse", label: "Suscribirse a novedades" },
  { href: "/contacto", label: "Contactarse" },
  { href: "/fuentes", label: "Conocer las fuentes" },
  { href: "/herramientas", label: "Entrar a Herramientas" },
];

export default function HomePage() {
  return (
    <main className="home-main">
      <section className="shell hero-grid">
        <div className="hero-card hero-card--home">
          <p className="eyebrow">CEA · Comercio Electrónico en Argentina</p>
          <h1>Información útil para vender, evaluar y decidir mejor.</h1>
          <p className="hero-lead">
            CEA es un espacio de referencia para quienes trabajan o quieren empezar a trabajar con
            comercio electrónico en Argentina. Reúne guías, criterios de evaluación, notas de contexto,
            explicaciones metodológicas y una futura capa de herramientas pensadas para tomar mejores
            decisiones comerciales.
          </p>
          <p className="hero-paragraph">
            El objetivo de esta etapa es simple: ofrecer contenido claro, serio y aplicable. En lugar de
            prometer automatizaciones antes de tiempo, el sitio prioriza aquello que más ayuda a ordenar
            una decisión: entender una categoría, evaluar un producto, medir riesgos logísticos,
            dimensionar un margen y reconocer cuándo una oportunidad conviene y cuándo conviene dejarla pasar.
          </p>
          <div className="hero-actions">
            <Link href="/guias" className="button-primary">
              Explorar guías
            </Link>
            <Link href="/herramientas" className="button-secondary">
              Herramientas
            </Link>
          </div>
        </div>

        <aside className="hero-side-card">
          <p className="aside-kicker">Qué vas a encontrar</p>
          <h2>Un punto de partida ordenado para analizar el mercado.</h2>
          <ul>
            <li>Guías prácticas sobre productos, márgenes, importación y logística.</li>
            <li>Metodología pública para entender cómo se ordenan los criterios del sitio.</li>
            <li>Información institucional, contacto, privacidad y términos claros.</li>
            <li>Una sección de herramientas que irá creciendo por fases.</li>
          </ul>
        </aside>
      </section>

      <section className="shell section-spacing">
        <div className="section-heading">
          <p className="eyebrow">Para quién está hecho este sitio</p>
          <h2>Lectura comercial para vendedores, emprendedores e importadores.</h2>
          <p>
            El contenido está dirigido a personas que necesitan tomar decisiones con mayor claridad: qué
            producto probar, cómo leer una categoría, qué riesgos operativos subestimar puede salir caro y
            qué variables conviene revisar antes de comprometer capital. No hace falta venir del mundo
            técnico para usar el sitio; sí conviene tener interés en pensar mejor el negocio.
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
          <p className="eyebrow">Recorridos recomendados</p>
          <h2>Empezá por la sección que mejor se ajuste a tu necesidad.</h2>
          <p>
            Algunos lectores van a querer entender primero la metodología. Otros preferirán entrar directo
            a las guías o revisar las fuentes. El sitio está ordenado para que el recorrido sea simple y para
            que cada visitante pueda construir su propia lectura sin perderse en una navegación excesiva.
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
        <div>
          <p className="eyebrow">Suscripción</p>
          <h2>Recibí oportunidades y novedades semanales.</h2>
          <p>
            La suscripción está pensada como un resumen curado para quienes quieren seguir tendencias,
            oportunidades y contenido nuevo sin tener que revisar el sitio todos los días.
          </p>
        </div>
        <Link href="/suscribirse" className="button-secondary strong">
          Conocer la suscripción
        </Link>
      </section>
    </main>
  );
}
