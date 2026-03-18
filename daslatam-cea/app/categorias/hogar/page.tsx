import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";
export const metadata: Metadata = { title: "Categoría Hogar" };
export default function Page() {
  return (
    <div className="content-theme page-stack">
      <PageHero eyebrow="Categorías observadas" title="Hogar" summary="Hogar mezcla enorme volumen con una trampa frecuente: muchas ideas atractivas se vuelven malas cuando entran peso, fragilidad, armado y devoluciones. La lectura correcta es operativa, no sólo comercial." ctaHref="/guias/peso-y-fragilidad" ctaLabel="Ver guía logística" secondaryHref="/herramientas" secondaryLabel="Analizar en la herramienta" />
      <section className="content-surface section-block split-grid">
        <div><h2>Qué mirar</h2><p>Organizadores, pequeños accesorios y consumibles suelen ser más nobles que piezas grandes o delicadas. El margen aparente puede engañar si el empaque y el despacho castigan demasiado.</p></div>
        <div><h2>Riesgos típicos</h2><p>Roturas, reclamos por calidad percibida y alto costo de devolución en productos voluminosos o frágiles.</p></div>
      </section>
    </div>
  );
}
