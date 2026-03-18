import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";

export const metadata: Metadata = {
  title: "Cómo funciona",
};

const steps = [
  {
    title: "1. Buscar una intención de mercado",
    text: "El punto de partida es una búsqueda concreta. Puede ser un producto, una necesidad o una familia de soluciones. La herramienta toma esa consulta y arma una primera foto del mercado visible en Mercado Libre Argentina.",
  },
  {
    title: "2. Normalizar y puntuar resultados",
    text: "Cada resultado se transforma en un objeto analizable. Se ordenan señales de precio, vendidos, stock, free shipping y alertas heurísticas para construir un score entendible, no una caja negra.",
  },
  {
    title: "3. Generar insights y alertas",
    text: "Además del score, el sistema traduce señales en observaciones concretas: demanda alta, precio competitivo, rotación interesante o riesgos de peso, fragilidad, regulación o marca.",
  },
  {
    title: "4. Guardar trazabilidad",
    text: "Las búsquedas y favoritos pueden persistirse para seguir hipótesis de trabajo. La idea es que el análisis quede documentado y no se pierda entre pestañas o capturas de pantalla.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <div className="content-theme page-stack">
      <PageHero
        eyebrow="Proceso de trabajo"
        title="Cómo funciona DAS LATAM CEA"
        summary="La plataforma está pensada como una capa de lectura comercial sobre datos públicos. Busca ayudarte a pasar más rápido de una idea difusa a una decisión mejor fundamentada."
        ctaHref="/herramientas"
        ctaLabel="Ir al tablero"
        secondaryHref="/metodologia"
        secondaryLabel="Ver metodología"
      />

      <section className="content-surface section-block">
        <div className="feature-grid feature-grid-steps">
          {steps.map((step) => (
            <article key={step.title} className="feature-card static-card">
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-surface section-block split-grid">
        <div>
          <h2>Qué podés esperar de la herramienta</h2>
          <p>
            Una lectura inicial más ordenada. No reemplaza una prueba comercial, una negociación con proveedor ni
            una revisión fiscal o legal. Sí reduce improvisación y te obliga a mirar variables que suelen quedar fuera cuando se decide sólo por intuición o por precio de compra.
          </p>
        </div>
        <div className="content-note">
          <strong>Qué no hace</strong>
          <p>
            No promete éxito automático, no reemplaza criterio de categoría y no debe confundirse con asesoramiento fiscal, jurídico o de importación. Es una herramienta de trabajo para decidir mejor.
          </p>
        </div>
      </section>
    </div>
  );
}
