import Link from "next/link";

const upcoming = [
  "Scanner de oportunidades con foco en contexto argentino.",
  "Lectura estructurada de competencia, vendedores y saturación.",
  "Calendario comercial con ventanas de compra y alertas anticipadas.",
  "Módulo de margen, costos y riesgo operativo.",
  "Suscripciones por correo con oportunidades semanales curadas.",
];

export default function HerramientasPage() {
  return (
    <main className="editorial-main">
      <div className="shell editorial-shell">
        <section className="hero-card hero-card--compact soon-card">
          <p className="eyebrow">Herramientas</p>
          <h1>Próximamente</h1>
          <p className="hero-lead">
            La sección de herramientas queda visible para marcar el rumbo del producto, pero por ahora el esfuerzo está puesto en construir contenido útil, metodología y claridad de criterios. Preferimos un “próximamente” honesto antes que una herramienta a medio hacer.
          </p>
          <div className="hero-actions">
            <Link href="/suscribirse" className="button-primary">
              Seguir avances
            </Link>
            <Link href="/roadmap" className="button-secondary">
              Ver roadmap
            </Link>
          </div>
        </section>

        <section className="article-card">
          <h2>Qué se está preparando</h2>
          <ul className="check-list">
            {upcoming.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            La decisión de retrasar esta capa no responde a falta de ambición, sino a una prioridad de producto. Si el criterio no está bien explicado y si la base metodológica no es sólida, cualquier tablero genera una falsa sensación de precisión. Primero ordenamos el lenguaje común del proyecto; después automatizamos aquello que realmente agregue valor.
          </p>
        </section>
      </div>
    </main>
  );
}
