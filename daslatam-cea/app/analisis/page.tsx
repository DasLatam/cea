import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";
import { featuredAnalysis } from "@/lib/content";

export const metadata: Metadata = { title: "Análisis" };

export default function AnalisisPage() {
  return (
    <div className="content-theme page-stack">
      <PageHero
        eyebrow="Biblioteca editorial"
        title="Análisis y lecturas rápidas de oportunidades"
        summary="Esta sección reúne observaciones editoriales basadas en patrones habituales de categorías y búsquedas. No busca dictar una compra de stock, sino mostrar cómo pensar una oportunidad con más criterio."
        ctaHref="/herramientas"
        ctaLabel="Ir a la herramienta"
        secondaryHref="/metodologia"
        secondaryLabel="Ver metodología"
      />
      <section className="content-surface section-block">
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
    </div>
  );
}
