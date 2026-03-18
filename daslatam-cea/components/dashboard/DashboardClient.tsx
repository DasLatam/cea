"use client";

import { useEffect, useMemo, useState } from "react";
import InsightsPanel from "@/components/dashboard/InsightsPanel";
import KPIGrid from "@/components/dashboard/KPIGrid";
import OpportunityCalendar from "@/components/dashboard/OpportunityCalendar";
import SavedSearches from "@/components/dashboard/SavedSearches";
import SourceStatusPanel from "@/components/dashboard/SourceStatusPanel";
import ResultsTable from "@/components/results/ResultsTable";
import SearchBar from "@/components/search/SearchBar";
import SearchSummary from "@/components/search/SearchSummary";
import { getOrCreateSessionId } from "@/lib/utils/session";
import type { ProviderStatus, SavedSearchRow, SearchApiResponse } from "@/types/app";

async function parseJsonSafely<T>(response: Response): Promise<T | null> {
  const text = await response.text();
  if (!text) return null;
  return JSON.parse(text) as T;
}

const defaultProviderStatuses: ProviderStatus[] = [
  {
    key: "ml-api",
    label: "Mercado Libre · API pública",
    status: "warning",
    detail: "La app intentará primero la fuente pública principal.",
  },
  {
    key: "ml-auth",
    label: "Mercado Libre · token OAuth propio",
    status: "action",
    detail: "Configurá un token server-side para salir del bloqueo 403 del upstream público.",
    actionLabel: "Ver conectores",
    actionHref: "/fuentes",
  },
  {
    key: "ml-html",
    label: "Mercado Libre · respaldo HTML",
    status: "warning",
    detail: "Si la API pública falla, el sistema intenta reconstruir la búsqueda desde HTML público.",
  },
  {
    key: "google-signals",
    label: "Google · demanda externa",
    status: "action",
    detail: "Requiere credenciales de Google Ads o acceso aprobado al Trends API.",
    actionLabel: "Ver conectores",
    actionHref: "/fuentes",
  },
  {
    key: "meta-signals",
    label: "Meta · audiencia",
    status: "action",
    detail: "Requiere Meta Marketing API y un ad account real.",
    actionLabel: "Ver conectores",
    actionHref: "/fuentes",
  },
  {
    key: "alibaba-signals",
    label: "Alibaba · sourcing",
    status: "action",
    detail: "Requiere conector propio o credenciales del proveedor de sourcing.",
    actionLabel: "Ver conectores",
    actionHref: "/fuentes",
  },
];

function emptyData(query: string, providerStatuses: ProviderStatus[] = defaultProviderStatuses): SearchApiResponse {
  return {
    query,
    summary: {
      totalResults: 0,
      totalAvailableFromML: 0,
      medianPrice: 0,
      averageSold: 0,
      averageScore: 0,
      topScore: 0,
      highScoreCount: 0,
      warningCount: 0,
      averageStock: 0,
    },
    items: [],
    providerStatuses,
  };
}

export default function DashboardClient() {
  const [sessionId, setSessionId] = useState("");
  const [query, setQuery] = useState("");
  const [data, setData] = useState<SearchApiResponse | null>(null);
  const [savedSearches, setSavedSearches] = useState<SavedSearchRow[]>([]);
  const [savedItemIds, setSavedItemIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saveNotice, setSaveNotice] = useState<string | null>(null);

  useEffect(() => {
    const id = getOrCreateSessionId();
    setSessionId(id);
    void loadSavedSearches(id);
    void loadSavedItems(id);
  }, []);

  const topInsights = useMemo(() => {
    if (!data) return [];
    return data.items
      .flatMap((item) => item.insights.map((insight) => ({ itemTitle: item.title, insight })))
      .slice(0, 12);
  }, [data]);

  async function loadSavedSearches(id: string) {
    setLoadingHistory(true);
    try {
      const response = await fetch(`/api/searches?sessionId=${encodeURIComponent(id)}`);
      const json = await parseJsonSafely<{ searches?: SavedSearchRow[] }>(response);
      setSavedSearches(json?.searches ?? []);
    } catch {
      setSavedSearches([]);
    } finally {
      setLoadingHistory(false);
    }
  }

  async function loadSavedItems(id: string) {
    try {
      const response = await fetch(`/api/saved-items?sessionId=${encodeURIComponent(id)}`);
      const json = await parseJsonSafely<{ items?: string[] }>(response);
      setSavedItemIds(json?.items ?? []);
    } catch {
      setSavedItemIds([]);
    }
  }

  async function runSearch(submittedQuery: string) {
    const cleanQuery = submittedQuery.trim();
    if (!cleanQuery) return;

    setLoading(true);
    setError(null);
    setSaveNotice(null);
    setQuery(cleanQuery);

    try {
      const response = await fetch(`/api/ml/search?q=${encodeURIComponent(cleanQuery)}`);
      const json = await parseJsonSafely<SearchApiResponse & { error?: string; details?: string; providerStatuses?: ProviderStatus[] }>(response);

      if (!response.ok) {
        const providerStatuses = json?.providerStatuses ?? defaultProviderStatuses;
        setData({
          ...emptyData(cleanQuery, providerStatuses),
          diagnostics: json?.diagnostics,
        });
        throw new Error(
          json?.details
            ? `${json?.error ?? "La búsqueda devolvió un error."} ${json.details}`
            : json?.error ?? "La búsqueda devolvió un error."
        );
      }

      if (!json) {
        setData(emptyData(cleanQuery));
        throw new Error("La búsqueda no devolvió un payload JSON válido.");
      }

      setData(json);
      if (json.warning) {
        setSaveNotice(json.warning);
      }

      if (sessionId && json.items.length > 0) {
        const saveResponse = await fetch("/api/searches", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, payload: json }),
        });

        if (saveResponse.ok) {
          await loadSavedSearches(sessionId);
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "No se pudo completar la búsqueda.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  async function toggleSavedItem(item: SearchApiResponse["items"][number]) {
    if (!sessionId) return;

    const alreadySaved = savedItemIds.includes(item.id);

    try {
      if (alreadySaved) {
        const response = await fetch(
          `/api/saved-items?sessionId=${encodeURIComponent(sessionId)}&itemId=${encodeURIComponent(item.id)}`,
          { method: "DELETE" }
        );

        if (!response.ok) throw new Error("No se pudo quitar el favorito.");
        setSavedItemIds((prev) => prev.filter((id) => id !== item.id));
      } else {
        const response = await fetch("/api/saved-items", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            item: {
              id: item.id,
              title: item.title,
              link: item.link,
              thumbnail: item.thumbnail,
              categoryId: item.categoryId,
              categoryName: item.categoryName,
            },
          }),
        });

        if (!response.ok) throw new Error("No se pudo guardar el favorito.");
        setSavedItemIds((prev) => [...prev, item.id]);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "No se pudo actualizar el favorito.";
      setSaveNotice(message);
    }
  }

  return (
    <div className="dashboard-grid">
      <section className="main-panel">
        <SearchBar loading={loading} defaultValue="kit para yoga" onSearch={runSearch} />

        {error ? <div className="alert alert-error">{error}</div> : null}
        {saveNotice ? <div className="alert alert-info">{saveNotice}</div> : null}

        <SearchSummary query={query} loading={loading} data={data} />
        <KPIGrid data={data} />
        <SourceStatusPanel items={data?.providerStatuses ?? defaultProviderStatuses} />
        <OpportunityCalendar />

        <ResultsTable items={data?.items ?? []} loading={loading} savedIds={savedItemIds} onToggleSave={toggleSavedItem} />
      </section>

      <aside className="side-panel">
        <InsightsPanel loading={loading} summary={data?.summary ?? null} topInsights={topInsights} />
        <SavedSearches loading={loadingHistory} items={savedSearches} onRepeatSearch={runSearch} />
      </aside>
    </div>
  );
}
