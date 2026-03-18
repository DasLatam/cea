import type { SearchApiResponse } from "@/types/app";

type SearchSummaryProps = {
  query: string;
  loading?: boolean;
  data: SearchApiResponse | null;
};

export default function SearchSummary({
  query,
  loading = false,
  data,
}: SearchSummaryProps) {
  if (loading) {
    return (
      <section className="panel">
        <p className="section-label">Resumen</p>
        <h3>Consultando Mercado Libre…</h3>
        <p className="muted">Procesando resultados, score e insights.</p>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="panel">
        <p className="section-label">Resumen</p>
        <h3>Listo para analizar</h3>
        <p className="muted">
          Ejecutá una búsqueda para ver métricas, insights y productos destacados.
        </p>
      </section>
    );
  }

  return (
    <section className="panel">
      <p className="section-label">Resumen de búsqueda</p>
      <h3>{data.query || query}</h3>
      <div className="summary-grid">
        <div>
          <span className="muted">Resultados analizados</span>
          <strong>{data.items.length}</strong>
        </div>
        <div>
          <span className="muted">Productos con score &gt;= 70</span>
          <strong>{data.summary.highScoreCount}</strong>
        </div>
        <div>
          <span className="muted">Alertas detectadas</span>
          <strong>{data.summary.warningCount}</strong>
        </div>
      </div>
    </section>
  );
}
