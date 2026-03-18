import type { Metadata } from "next";
import DashboardClient from "@/components/dashboard/DashboardClient";

export const metadata: Metadata = {
  title: "Herramientas",
  description: "Buscador, scoring e interpretación de oportunidades para Mercado Libre Argentina.",
};

export default function HerramientasPage() {
  return (
    <div className="tool-theme page-stack">
      <section className="hero-card tool-surface">
        <p className="section-label">Herramienta de análisis</p>
        <h1>Buscar, puntuar y documentar oportunidades</h1>
        <p className="hero-summary">
          Esta primera versión ya organiza demanda, score, alertas y guardado de búsquedas. También deja a la vista
          qué módulos están realmente operativos y cuáles siguen en roadmap: Google, Meta, Alibaba, discovery
          automático, costos completos y tracking histórico.
        </p>
      </section>
      <DashboardClient />
    </div>
  );
}
