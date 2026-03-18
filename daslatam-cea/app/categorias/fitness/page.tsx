import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";
export const metadata: Metadata = { title: "Categoría Fitness" };
export default function Page() {
  return (
    <div className="content-theme page-stack">
      <PageHero eyebrow="Categorías observadas" title="Fitness" summary="Accesorios como bandas, mats, straps y kits tienen entradas comerciales relativamente accesibles, pero la diferenciación suele ser visual y de bundle. Eso obliga a cuidar catálogo, fotos y promesa de uso más que en otras verticales." ctaHref="/herramientas" ctaLabel="Buscar productos fitness" secondaryHref="/analisis" secondaryLabel="Ver análisis" />
      <section className="content-surface section-block split-grid">
        <div><h2>Lectura comercial</h2><p>Funciona mejor cuando el producto puede agruparse en sets, sumar accesorios y construir percepción de valor sin elevar demasiado el costo logístico.</p></div>
        <div><h2>Riesgos típicos</h2><p>Competencia genérica intensa, títulos muy parecidos y dificultad para defender precio sin marca o sin buena propuesta visual.</p></div>
      </section>
    </div>
  );
}
