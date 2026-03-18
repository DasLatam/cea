import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";

export const metadata: Metadata = { title: "Roadmap" };

const phases = [
  {
    title: "Fase 1 · Scanner + scoring",
    bullets: [
      "Búsqueda en Mercado Libre con score, insights y guardado básico.",
      "Biblioteca editorial y metodología pública.",
      "Respaldo HTML y diagnóstico transparente cuando el upstream bloquea la búsqueda.",
    ],
  },
  {
    title: "Fase 2 · Costos, sourcing y alertas",
    bullets: [
      "Calculadora financiera completa.",
      "Módulo Alibaba: FOB, MOQ y confiabilidad proveedor.",
      "Alertas operativas y compliance más finas.",
    ],
  },
  {
    title: "Fase 3 · Tracking y discovery",
    bullets: [
      "Snapshots históricos por producto.",
      "Discovery automático de nichos sin búsqueda manual.",
      "Ranking de tendencias y ventanas de importación.",
    ],
  },
  {
    title: "Fase 4 · Automatización e IA",
    bullets: [
      "Insights más profundos y explicaciones asistidas.",
      "Alertas por email y newsletter semanal.",
      "Asistentes de sourcing, pricing y timing.",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="content-theme page-stack">
      <PageHero
        eyebrow="Plan de producto"
        title="Roadmap operativo de DAS LATAM CEA"
        summary="El proyecto ya tiene una dirección clara: pasar de un scanner básico a una plataforma de inteligencia comercial con discovery, sourcing, cálculo financiero, tracking histórico y señales externas."
        ctaHref="/herramientas"
        ctaLabel="Probar fase actual"
        secondaryHref="/discovery"
        secondaryLabel="Ver módulo discovery"
      />

      <section className="content-surface section-block">
        <div className="feature-grid feature-grid-steps">
          {phases.map((phase) => (
            <article key={phase.title} className="feature-card static-card">
              <strong>{phase.title}</strong>
              <ul className="article-list compact-list">
                {phase.bullets.map((bullet) => (
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
