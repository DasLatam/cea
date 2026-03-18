import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";
export const metadata: Metadata = { title: "Categoría Belleza" };
export default function Page() {
  return (
    <div className="content-theme page-stack">
      <PageHero eyebrow="Categorías observadas" title="Belleza" summary="Belleza puede ser muy atractiva por frecuencia de compra y ticket, pero exige una lectura mucho más estricta de cumplimiento, reputación, seguridad del producto y exposición marcaria." ctaHref="/guias/importar-desde-china" ctaLabel="Ver errores frecuentes" secondaryHref="/herramientas" secondaryLabel="Abrir herramienta" />
      <section className="content-surface section-block split-grid">
        <div><h2>Qué mirar</h2><p>Composición, claims, packaging, vida útil y contenido de reseñas. Una mala experiencia se traduce muy rápido en daño reputacional.</p></div>
        <div><h2>Riesgos típicos</h2><p>Restricciones regulatorias, reclamaciones por autenticidad o calidad y sensibilidad extrema a reseñas negativas.</p></div>
      </section>
    </div>
  );
}
