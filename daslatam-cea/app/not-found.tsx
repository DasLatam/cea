import Link from "next/link";

export default function NotFound() {
  return (
    <main className="editorial-main">
      <div className="shell editorial-shell">
        <section className="hero-card hero-card--compact soon-card">
          <p className="eyebrow">404</p>
          <h1>Página no encontrada</h1>
          <p className="hero-lead">
            El contenido que buscabas no está disponible en esta ruta. Podés volver al inicio, revisar las guías o visitar la sección de metodología para entender cómo se está armando la plataforma.
          </p>
          <div className="hero-actions">
            <Link href="/" className="button-primary">Volver al inicio</Link>
            <Link href="/guias" className="button-secondary">Ir a guías</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
