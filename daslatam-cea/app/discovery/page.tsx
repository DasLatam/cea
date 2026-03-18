import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";

export const metadata: Metadata = { title: "Discovery" };

const niches = [
  {
    title: "Fitness liviano",
    score: 81,
    demand: "Media / alta",
    competition: "Media",
    note: "Buenos bundles, logística amable y sensibilidad a contenido visual.",
  },
  {
    title: "Organización del hogar",
    score: 74,
    demand: "Alta",
    competition: "Alta",
    note: "Sirve si hay diferenciación clara o pack, pero el precio aprieta fuerte.",
  },
  {
    title: "Mascotas blandas",
    score: 77,
    demand: "Media / alta",
    competition: "Media",
    note: "Interesante para marca propia; cuidado con tamaños, telas y devoluciones.",
  },
  {
    title: "Belleza no regulada",
    score: 68,
    demand: "Media",
    competition: "Alta",
    note: "Atractiva si el compliance y la calidad del proveedor están muy controlados.",
  },
];

export default function DiscoveryPage() {
  return (
    <div className="content-theme page-stack">
      <PageHero
        eyebrow="Discovery sin búsqueda"
        title="Ranking editorial de nichos observados"
        summary="Esta sección adelanta cómo debería verse el módulo de discovery: un ranking permanente de nichos, con señales de demanda, competencia y lectura operativa. Hoy funciona como biblioteca editorial priorizada mientras el motor automático sigue en construcción."
        ctaHref="/herramientas"
        ctaLabel="Ir al scanner"
        secondaryHref="/roadmap"
        secondaryLabel="Ver roadmap"
      />

      <section className="content-surface section-block">
        <div className="feature-grid">
          {niches.map((item) => (
            <article key={item.title} className="feature-card static-card">
              <strong>{item.title}</strong>
              <p>{item.note}</p>
              <ul className="article-list compact-list">
                <li><strong>Score:</strong> {item.score}/100</li>
                <li><strong>Demanda:</strong> {item.demand}</li>
                <li><strong>Competencia:</strong> {item.competition}</li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
