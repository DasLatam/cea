"use client";

import { useMemo, useState } from "react";
import ScoreBadge from "@/components/results/ScoreBadge";
import InsightPills from "@/components/results/InsightPills";
import { formatARS } from "@/lib/utils/format";
import type { AnalyzedItem } from "@/types/app";

type SortKey = "score" | "sold" | "price";

type ResultsTableProps = {
  items: AnalyzedItem[];
  loading?: boolean;
  savedIds: string[];
  onToggleSave: (item: AnalyzedItem) => void;
};

export default function ResultsTable({
  items,
  loading = false,
  savedIds,
  onToggleSave,
}: ResultsTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("score");

  const sortedItems = useMemo(() => {
    const list = [...items];
    list.sort((a, b) => {
      if (sortKey === "sold") return b.sold - a.sold;
      if (sortKey === "price") return a.price - b.price;
      return b.score - a.score;
    });
    return list;
  }, [items, sortKey]);

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="section-label">Resultados</p>
          <h3>Productos analizados</h3>
        </div>

        <label className="sort-label">
          <span>Ordenar por</span>
          <select
            value={sortKey}
            onChange={(event) => setSortKey(event.target.value as SortKey)}
          >
            <option value="score">Score</option>
            <option value="sold">Vendidos</option>
            <option value="price">Precio</option>
          </select>
        </label>
      </div>

      {loading ? <p className="muted">Cargando resultados…</p> : null}

      {!loading && items.length === 0 ? (
        <p className="muted">Todavía no hay resultados para mostrar.</p>
      ) : null}

      {items.length > 0 ? (
        <div className="table-wrap">
          <table className="results-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Vendidos</th>
                <th>Stock</th>
                <th>Score</th>
                <th>Insights</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((item) => {
                const isSaved = savedIds.includes(item.id);

                return (
                  <tr key={item.id}>
                    <td>
                      <div className="product-cell">
                        {item.thumbnail ? (
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="product-thumb"
                          />
                        ) : (
                          <div className="product-thumb product-thumb-fallback">ML</div>
                        )}

                        <div>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="product-link"
                          >
                            {item.title}
                          </a>
                          <div className="muted small-text">{item.id}</div>
                          {item.isDemo ? <div className="demo-chip">Demo interna</div> : null}
                        </div>
                      </div>
                    </td>
                    <td>{formatARS(item.price)}</td>
                    <td>{item.sold}</td>
                    <td>{item.stock}</td>
                    <td>
                      <ScoreBadge score={item.score} />
                    </td>
                    <td>
                      <InsightPills flags={item.flags} insights={item.insights} />
                    </td>
                    <td>
                      <div className="table-actions">
                        <button
                          className={isSaved ? "ghost-button active" : "ghost-button"}
                          type="button"
                          onClick={() => onToggleSave(item)}
                          disabled={item.isDemo}
                          title={item.isDemo ? "Los ítems de demo no se guardan como favoritos." : undefined}
                        >
                          {item.isDemo ? "Demo" : isSaved ? "Guardado" : "Guardar"}
                        </button>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="ghost-link"
                        >
                          {item.isDemo ? "Ver análisis" : "Ver"}
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}
