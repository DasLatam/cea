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
          Esta versión ya separa dos cosas distintas: producto y conectores. El dashboard muestra score, insights, favoritos,
          historial y calendario comercial; además expone con precisión qué módulos están realmente operativos y cuáles exigen credenciales externas para dejar de fallar.
        </p>
      </section>
      <DashboardClient />
    </div>
  );
}
