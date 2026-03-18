import { formatARS } from "@/lib/utils/format";
import type { SearchSummary } from "@/types/app";

type InsightRow = {
  itemTitle: string;
  insight: string;
};

type InsightsPanelProps = {
  loading?: boolean;
  summary: SearchSummary | null;
  topInsights: InsightRow[];
};

export default function InsightsPanel({ loading = false, summary, topInsights }: InsightsPanelProps) {
  return (
    <section className="panel">
      <div className="panel-header compact-gap">
        <div>
          <p className="section-label">Insights automáticos</p>
          <h3>Lectura rápida de la búsqueda</h3>
        </div>
      </div>

      {loading ? (
        <p className="muted">Procesando insights…</p>
      ) : summary ? (
        <>
          <div className="insight-grid">
            <div className="insight-highlight">
              <strong>Ticket de referencia</strong>
              <span>{formatARS(summary.medianPrice)}</span>
            </div>
            <div className="insight-highlight">
              <strong>Zona fuerte</strong>
              <span>{summary.highScoreCount} oportunidades con score alto</span>
            </div>
            <div className="insight-highlight">
              <strong>Advertencias</strong>
              <span>{summary.warningCount} flags detectados</span>
            </div>
          </div>

          <ul className="insight-list compact-insight-list">
            {topInsights.length > 0 ? (
              topInsights.slice(0, 8).map((entry, index) => (
                <li key={`${entry.itemTitle}-${index}`}>
                  <strong>{entry.itemTitle}</strong>
                  <span>{entry.insight}</span>
                </li>
              ))
            ) : (
              <li>
                <span>Sin insights destacados todavía.</span>
              </li>
            )}
          </ul>
        </>
      ) : (
        <p className="muted">Acá se consolida la interpretación automática de la búsqueda actual.</p>
      )}
    </section>
  );
}
