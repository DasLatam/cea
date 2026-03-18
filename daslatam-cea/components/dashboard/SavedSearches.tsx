import { formatARS, formatDateTime } from "@/lib/utils/format";
import type { SavedSearchRow } from "@/types/app";

type SavedSearchesProps = {
  loading?: boolean;
  items: SavedSearchRow[];
  onRepeatSearch: (query: string) => void;
};

export default function SavedSearches({
  loading = false,
  items,
  onRepeatSearch,
}: SavedSearchesProps) {
  return (
    <section className="panel">
      <p className="section-label">Búsquedas guardadas</p>

      {loading ? <p className="muted">Cargando historial…</p> : null}

      {!loading && items.length === 0 ? (
        <p className="muted">Todavía no hay búsquedas guardadas en Supabase.</p>
      ) : null}

      <div className="saved-searches">
        {items.map((item) => (
          <button
            key={item.id}
            className="saved-search-card"
            onClick={() => onRepeatSearch(item.query)}
            type="button"
          >
            <div className="saved-search-header">
              <strong>{item.query}</strong>
              <span>{formatDateTime(item.created_at)}</span>
            </div>

            <div className="saved-search-metrics">
              <span>{item.result_count} resultados</span>
              <span>Score prom. {Math.round(item.avg_score ?? 0)}</span>
              <span>Top {item.top_score ?? 0}</span>
              <span>{formatARS(item.median_price ?? 0)}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
