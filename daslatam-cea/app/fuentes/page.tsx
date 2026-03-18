import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";

export const metadata: Metadata = { title: "Fuentes" };

export default function FuentesPage() {
  return (
    <div className="content-theme page-stack">
      <PageHero
        eyebrow="Fuentes y limitaciones"
        title="Qué datos usa hoy la plataforma y qué falta integrar"
        summary="La mejor manera de construir confianza es mostrar el estado real del sistema. DAS LATAM CEA no es una caja negra: deja explícito qué módulos ya funcionan, cuáles dependen de terceros y cuáles siguen en roadmap."
        ctaHref="/metodologia"
        ctaLabel="Ver metodología"
        secondaryHref="/roadmap"
        secondaryLabel="Ver roadmap"
      />

      <section className="content-surface section-block">
        <div className="feature-grid feature-grid-steps">
          <article className="feature-card static-card">
            <strong>Mercado Libre</strong>
            <p>Fuente primaria de resultados. La integración intenta API pública y reconstrucción desde HTML público.</p>
          </article>
          <article className="feature-card static-card">
            <strong>Google</strong>
            <p>Previsto para volumen, tendencia e intención externa. Todavía no está operativo en esta versión.</p>
          </article>
          <article className="feature-card static-card">
            <strong>Meta / Facebook</strong>
            <p>Previsto para señales de audiencia y validación creativa. Sigue en fase de diseño.</p>
          </article>
          <article className="feature-card static-card">
            <strong>Alibaba</strong>
            <p>Previsto para costo FOB, MOQ, años del proveedor y verificación. Aún no está integrado.</p>
          </article>
        </div>
      </section>

      <section className="content-surface section-block split-grid">
        <div>
          <h2>Principio de transparencia</h2>
          <p>
            Cuando una fuente externa falla, la interfaz lo muestra. El objetivo no es maquillar la limitación, sino mantener trazabilidad sobre qué datos son live, cuáles son reconstruidos y cuáles siguen en demo.
          </p>
        </div>
        <div className="content-note">
          <strong>Por qué importa</strong>
          <p>
            Una plataforma de inteligencia comercial sólo es útil si el usuario entiende la calidad y el origen de cada señal. Por eso el estado de fuentes se muestra dentro del tablero y no escondido en la documentación.
          </p>
        </div>
      </section>
    </div>
  );
}
