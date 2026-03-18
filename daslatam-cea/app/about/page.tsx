import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";

export const metadata: Metadata = { title: "Sobre DAS LATAM CEA" };

export default function AboutPage() {
  return (
    <div className="content-theme page-stack">
      <PageHero eyebrow="Sobre el proyecto" title="Qué es DAS LATAM CEA" summary="DAS LATAM CEA es una iniciativa orientada a transformar datos públicos y experiencia operativa en una lectura comercial más útil para vendedores, consultores y equipos que evalúan productos para Mercado Libre Argentina." />
      <section className="content-surface section-block split-grid">
        <div>
          <h2>Enfoque</h2>
          <p>El proyecto prioriza criterio comercial, estructura de decisión y trazabilidad. Busca ayudar a pasar de una idea de producto a una evaluación más seria de demanda, competencia, costo y riesgo.</p>
        </div>
        <div>
          <h2>Audiencia</h2>
          <p>Emprendedores, revendedores, marcas propias, consultores y operadores que necesitan una base más sólida para validar oportunidades en el ecosistema argentino.</p>
        </div>
      </section>
    </div>
  );
}
