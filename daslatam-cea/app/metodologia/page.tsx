import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";

export const metadata: Metadata = {
  title: "Metodología",
};

export default function MetodologiaPage() {
  return (
    <div className="content-theme page-stack">
      <PageHero
        eyebrow="Método de análisis"
        title="Metodología de scoring e insights"
        summary="El objetivo del score no es adivinar el futuro. Es sintetizar señales comparables dentro de una búsqueda para que puedas detectar qué resultados merecen más atención y cuáles esconden fricciones operativas o comerciales."
        ctaHref="/herramientas"
        ctaLabel="Probar sobre una búsqueda"
        secondaryHref="/guias/validar-producto"
        secondaryLabel="Volver a la guía base"
      />

      <section className="content-surface section-block">
        <h2>Variables consideradas</h2>
        <ul className="article-list">
          <li><strong>Precio relativo:</strong> posición del resultado frente a la mediana de la búsqueda.</li>
          <li><strong>Vendidos visibles:</strong> señal imperfecta, pero útil para jerarquizar tracción relativa.</li>
          <li><strong>Stock visible:</strong> ayuda a estimar rotación y presión comercial.</li>
          <li><strong>Envío gratis:</strong> se incorpora como mejora comercial observada.</li>
          <li><strong>Flags heurísticos:</strong> peso, fragilidad, marca y términos sensibles o regulados.</li>
        </ul>
      </section>

      <section className="content-surface section-block split-grid">
        <div>
          <h2>Qué expresa el score</h2>
          <p>
            El score compara resultados dentro de un mismo contexto. Un puntaje alto no significa que el producto sea automáticamente una buena inversión. Significa que, frente al resto de esa búsqueda, presenta una combinación más atractiva de señales visibles.
          </p>
        </div>
        <div>
          <h2>Qué expresan los insights</h2>
          <p>
            Los insights traducen números en lectura operativa: demanda alta, precio competitivo, rotación interesante o alertas de riesgo. Se diseñaron para ser legibles y accionables, no para sonar sofisticados sin aportar criterio.
          </p>
        </div>
      </section>

      <section className="content-surface section-block">
        <h2>Límites del modelo</h2>
        <p>
          El modelo trabaja con señales públicas y no ve variables decisivas como calidad real del proveedor, costo exacto puesto en depósito, tasa de reclamos propia, presupuesto publicitario, estructura fiscal particular ni estrategia de marca del vendedor. Por eso la salida correcta es usar el tablero como primera lectura y luego profundizar con un análisis de costos y operación.
        </p>
      </section>
    </div>
  );
}
