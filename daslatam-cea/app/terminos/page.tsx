import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";

export const metadata: Metadata = { title: "Términos" };

export default function TerminosPage() {
  return (
    <div className="content-theme page-stack">
      <PageHero eyebrow="Legal" title="Términos de uso" summary="DAS LATAM CEA ofrece herramientas y contenido informativo para análisis comercial. No garantiza resultados de ventas ni reemplaza asesoramiento profesional específico en materia fiscal, legal, regulatoria o de importación." />
      <section className="content-surface section-block">
        <p>La información publicada debe utilizarse como apoyo para la toma de decisiones y no como promesa de performance. El usuario es responsable de validar costos, disponibilidad, aspectos regulatorios, estructura fiscal y cumplimiento aplicable a su actividad.</p>
        <p>El contenido editorial y las herramientas pueden cambiar, ampliarse o interrumpirse sin previo aviso. El uso continuado del sitio implica aceptación de estas condiciones.</p>
      </section>
    </div>
  );
}
