import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";
export const metadata: Metadata = { title: "Categoría Mascotas" };
export default function Page() {
  return (
    <div className="content-theme page-stack">
      <PageHero eyebrow="Categorías observadas" title="Mascotas" summary="Mascotas ofrece una mezcla interesante de repetición, margen de marca propia y comunicación emocional. Pero conviene separar muy bien consumibles, accesorios blandos y productos voluminosos o técnicos." ctaHref="/herramientas" ctaLabel="Buscar en mascotas" secondaryHref="/guias/validar-producto" secondaryLabel="Volver a validación" />
      <section className="content-surface section-block split-grid">
        <div><h2>Qué funciona mejor</h2><p>Accesorios livianos, visuales y combinables con bundles o variantes simples. La percepción de calidad pesa mucho en fotos y reseñas.</p></div>
        <div><h2>Riesgos típicos</h2><p>Talles, materiales, roturas y devoluciones cuando la expectativa del comprador no coincide con las imágenes o la descripción.</p></div>
      </section>
    </div>
  );
}
