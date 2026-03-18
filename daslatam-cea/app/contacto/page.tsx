import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <div className="content-theme page-stack">
      <PageHero eyebrow="Contacto" title="Hablar con DAS LATAM" summary="Si necesitás un análisis más asistido, una adaptación de la herramienta o una consultoría puntual sobre categorías, abastecimiento o estructura comercial, podés escribir a comercioelectronico@daslatam.org." />
      <section className="content-surface section-block">
        <h2>Canal principal</h2>
        <p>Correo: comercioelectronico@daslatam.org</p>
        <p>El contacto se usa para consultas comerciales, soporte general del proyecto y solicitudes de desarrollo o personalización.</p>
      </section>
    </div>
  );
}
