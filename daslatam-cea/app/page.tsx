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
  {
    href: "/guias/importacion-courier",
    title: "Importación courier",
    text: "Cuándo conviene testear con courier y cuándo deja de tener sentido.",
  },
];

const moduleCards = [
  {
    href: "/herramientas",
    title: "Scanner Mercado Libre",
    text: "Búsqueda, score, insights, guardado y trazabilidad inicial.",
  },
  {
    href: "/discovery",
    title: "Discovery",
    text: "Ranking editorial de nichos mientras se construye el motor automático.",
  },
  {
    href: "/fuentes",
    title: "Fuentes externas",
    text: "Estado real de Mercado Libre, Google, Meta y Alibaba dentro del producto.",
  },
  {
    href: "/roadmap",
    title: "Roadmap",
    text: "Alcance completo: sourcing, costos, tracking histórico e IA.",
  },
];

export default function HomePage() {
  return (
    <div className="content-theme page-stack">
      <PageHero
        eyebrow="Inteligencia comercial aplicada"
        title="Una plataforma para detectar oportunidades reales de e-commerce en Argentina"
        summary="DAS LATAM CEA combina herramienta, metodología y contenido original. La idea no es sólo listar productos: es ayudarte a leer demanda, competencia, costos, riesgo operativo, sourcing y timing antes de inmovilizar capital."
        ctaHref="/herramientas"
        ctaLabel="Probar herramienta"
        secondaryHref="/como-funciona"
        secondaryLabel="Entender cómo funciona"
      />

      <section className="content-surface section-block highlight-band">
        <div className="split-grid">
          <div>
            <p className="section-label">Qué resuelve</p>
            <h2>Dejar de elegir productos sólo por intuición o precio FOB</h2>
            <p>
              La validación correcta junta señales de demanda, competencia, reseñas, densidad de vendedores,
              fricción logística, riesgo de marca, timing y margen operado. Esa lectura es la que queremos volver repetible.
            </p>
          </div>
          <div className="mini-stat-grid">
            <div className="mini-stat">
              <strong>Demanda</strong>
              <span>Ventas visibles, reseñas y señales externas a integrar.</span>
            </div>
            <div className="mini-stat">
              <strong>Competencia</strong>
              <span>Densidad de listings, presión de precio y vendedores dominantes.</span>
            </div>
            <div className="mini-stat">
              <strong>Costos</strong>
              <span>Margen real, logística, comisiones y capital inmovilizado.</span>
            </div>
            <div className="mini-stat">
              <strong>Timing</strong>
              <span>Estacionalidad, importación, rotación y ventana de entrada.</span>
            </div>
          </div>
        </div>
      </section>

      <CardGrid title="Módulos del producto" items={moduleCards} />
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
          <p className="section-label">Dirección del producto</p>
          <h2>De scanner básico a plataforma de inteligencia comercial</h2>
          <p>
            La versión actual ya ordena score, insights y guardado. El objetivo de producto es más amplio: discovery automático, sourcing Alibaba, costos, monotributo, compliance, tracking histórico y newsletter con oportunidades.
          </p>
          <div className="hero-actions">
            <Link href="/roadmap" className="primary-button inline-button">
              Ver roadmap completo
            </Link>
            <Link href="/fuentes" className="secondary-button inline-button">
              Ver fuentes y estado
            </Link>
          </div>
        </div>
        <div className="content-note">
          <strong>Diferencial buscado</strong>
          <p>
            DAS LATAM CEA no quiere quedarse en un scraper ni en un comparador. El objetivo es una capa de criterio comercial sobre múltiples señales para tomar mejores decisiones en Argentina.
          </p>
        </div>
      </section>
    </div>
  );
}
