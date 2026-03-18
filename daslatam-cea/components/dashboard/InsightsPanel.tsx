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

export default function InsightsPanel({
  loading = false,
  summary,
  topInsights,
}: InsightsPanelProps) {
  return (
    <section className="panel sticky-panel">
      <p className="section-label">Insights automáticos</p>

      {loading ? (
        <p className="muted">Procesando insights…</p>
      ) : summary ? (
        <>
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

          <ul className="insight-list">
            {topInsights.length > 0 ? (
              topInsights.map((entry, index) => (
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
        <p className="muted">
          Acá se consolida la interpretación automática de la búsqueda actual.
        </p>
      )}
    </section>
  );
}
