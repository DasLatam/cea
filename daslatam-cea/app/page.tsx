import Link from "next/link";
import CardGrid from "@/components/content/CardGrid";
import PageHero from "@/components/content/PageHero";
import { categoryCards, featuredAnalysis } from "@/lib/content";

const guideCards = [
  {
    href: "/guias/validar-producto",
    title: "Validar producto",
    text: "Cómo leer demanda, competencia y fricción operativa antes de comprar stock.",
  },
  {
    href: "/guias/margen-real",
    title: "Margen real",
    text: "Modelo práctico para pasar de precio de venta a utilidad operada.",
  },
  {
    href: "/guias/importar-desde-china",
    title: "Importar desde China",
    text: "Errores típicos al pasar de la idea al abastecimiento internacional.",
  },
  {
    href: "/guias/monotributo-mercado-libre",
    title: "Monotributo",
    text: "Qué mirar antes de crecer con una estructura fiscal inicial.",
  },
];

export default function HomePage() {
  return (
    <div className="content-theme page-stack">
      <PageHero
        eyebrow="Inteligencia comercial aplicada"
        title="Una base de conocimiento para vender mejor en Mercado Libre Argentina"
        summary="DAS LATAM CEA combina una herramienta de búsqueda con contenido original y metodología propia. La idea no es sólo listar resultados: es ayudarte a leer demanda, competencia, márgenes, fricción logística y riesgos operativos antes de invertir tiempo o capital."
        ctaHref="/herramientas"
        ctaLabel="Probar herramienta"
        secondaryHref="/como-funciona"
        secondaryLabel="Entender cómo funciona"
      />

      <section className="content-surface section-block highlight-band">
        <div className="split-grid">
          <div>
            <p className="section-label">Qué resuelve</p>
            <h2>Dejar de elegir productos por intuición</h2>
            <p>
              La validación de un producto no debería comenzar por Alibaba ni por una publicación aislada.
              Primero hay que entender si existe demanda real, cuánta competencia hay, qué tan agresiva es la
              guerra de precios y si la operación soporta peso, fragilidad, reclamos, devoluciones o presión de marca.
            </p>
          </div>
          <div className="mini-stat-grid">
            <div className="mini-stat">
              <strong>Demanda</strong>
              <span>Ventas visibles, señales de tracción y reseñas relativas.</span>
            </div>
            <div className="mini-stat">
              <strong>Competencia</strong>
              <span>Concentración de vendedores, bundles, precio y saturación.</span>
            </div>
            <div className="mini-stat">
              <strong>Márgenes</strong>
              <span>Costos reales, comisiones, logística y capital inmovilizado.</span>
            </div>
            <div className="mini-stat">
              <strong>Riesgo</strong>
              <span>Peso, fragilidad, marca, regulación y complejidad operativa.</span>
            </div>
          </div>
        </div>
      </section>

      <CardGrid title="Guías base para tomar mejores decisiones" items={guideCards} />
      <CardGrid title="Categorías observadas" items={categoryCards} />

      <section className="content-surface section-block">
        <div className="section-head">
          <h2>Análisis recientes</h2>
          <Link href="/analisis" className="text-link">
            Ver biblioteca completa
          </Link>
        </div>
        <div className="feature-grid">
          {featuredAnalysis.map((item) => (
            <article key={item.slug} className="feature-card static-card">
              <strong>{item.title}</strong>
              <p>{item.verdict}</p>
              <ul className="article-list compact-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-surface section-block split-grid">
        <div>
          <p className="section-label">Metodología visible</p>
          <h2>Lectura comercial antes que scraping ciego</h2>
          <p>
            La herramienta usa reglas explícitas para estimar score e insights. Eso permite entender por qué un
            producto parece atractivo y también por qué puede no convenir aunque tenga búsquedas o publicaciones visibles.
          </p>
          <div className="hero-actions">
            <Link href="/metodologia" className="primary-button inline-button">
              Ver metodología
            </Link>
            <Link href="/contacto" className="secondary-button inline-button">
              Solicitar análisis asistido
            </Link>
          </div>
        </div>
        <div className="content-note">
          <strong>Qué hace distinto a DAS LATAM CEA</strong>
          <p>
            No pretende reemplazar el criterio comercial. Busca acelerar una primera lectura seria del mercado,
            documentar el razonamiento y dejar trazabilidad sobre señales, riesgos y oportunidades.
          </p>
        </div>
      </section>
    </div>
  );
}
