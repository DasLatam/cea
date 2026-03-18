import type { Metadata } from "next";
import DashboardClient from "@/components/dashboard/DashboardClient";

export const metadata: Metadata = {
  title: "Herramientas",
  description: "Buscador y tablero de análisis de oportunidades para Mercado Libre Argentina.",
};

export default function HerramientasPage() {
  return (
    <div className="tool-theme page-stack">
      <section className="hero-card tool-surface">
        <p className="section-label">Herramienta de análisis</p>
        <h1>Buscar, puntuar y guardar oportunidades</h1>
        <p className="hero-summary">
          Usá el buscador para leer señales de demanda, presión competitiva, riesgo operativo y guardado de
          búsquedas. Si el servidor no consigue datos desde Mercado Libre, el sitio intenta una lectura directa desde el navegador como respaldo.
        </p>
      </section>
      <DashboardClient />
    </div>
  );
}
