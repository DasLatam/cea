"use client";

import { useEffect, useMemo, useState } from "react";
import AdBanner from "@/components/ads/AdBanner";
import InsightsPanel from "@/components/dashboard/InsightsPanel";
import KPIGrid from "@/components/dashboard/KPIGrid";
import SavedSearches from "@/components/dashboard/SavedSearches";
import ResultsTable from "@/components/results/ResultsTable";
import SearchBar from "@/components/search/SearchBar";
import SearchSummary from "@/components/search/SearchSummary";
import { getOrCreateSessionId } from "@/lib/utils/session";
import type { SavedSearchRow, SearchApiResponse } from "@/types/app";

async function parseJsonSafely<T>(response: Response): Promise<T | null> {
  const text = await response.text();
  if (!text) return null;
  return JSON.parse(text) as T;
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
      const json = await parseJsonSafely<{ searches?: SavedSearchRow[]; error?: string }>(response);

      if (!response.ok) {
        if (response.status !== 200) throw new Error(json?.error ?? "No se pudo cargar el historial.");
      }

      setSavedSearches(json?.searches ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingHistory(false);
    }
  }

  async function loadSavedItems(id: string) {
    try {
      const response = await fetch(`/api/saved-items?sessionId=${encodeURIComponent(id)}`);
      const json = await parseJsonSafely<{ items?: string[] }>(response);
      setSavedItemIds(json?.items ?? []);
    } catch (err) {
      console.error(err);
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
      const json = await parseJsonSafely<SearchApiResponse & { error?: string; details?: string }>(response);

      if (!response.ok || !json) {
        throw new Error(json?.details ? `${json?.error ?? "La búsqueda devolvió un error."} ${json.details}` : (json?.error ?? "La búsqueda devolvió un error."));
      }

      setData(json);

      if (sessionId) {
        const saveResponse = await fetch("/api/searches", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId,
            payload: json,
          }),
        });

        if (saveResponse.ok) {
          setSaveNotice("Búsqueda guardada en Supabase.");
          await loadSavedSearches(sessionId);
        } else {
          const saveJson = await parseJsonSafely<{ error?: string; details?: string }>(saveResponse);
          setSaveNotice(
            `No se pudo guardar la búsqueda automáticamente${
              saveJson?.details ? `: ${saveJson.details}` : "."
            }`
          );
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "No se pudo completar la búsqueda.";
      setError(message);
      setData(null);
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

        if (!response.ok) {
          throw new Error("No se pudo quitar el favorito.");
        }

        setSavedItemIds((prev) => prev.filter((id) => id !== item.id));
      } else {
        const response = await fetch("/api/saved-items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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

        if (!response.ok) {
          throw new Error("No se pudo guardar el favorito.");
        }

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
        <SearchBar
          loading={loading}
          defaultValue="kit para yoga"
          onSearch={runSearch}
        />

        <AdBanner />

        {error ? <div className="alert alert-error">{error}</div> : null}
        {saveNotice ? <div className="alert alert-info">{saveNotice}</div> : null}

        <SearchSummary
          query={query}
          loading={loading}
          data={data}
        />

        <KPIGrid data={data} />

        <ResultsTable
          items={data?.items ?? []}
          loading={loading}
          savedIds={savedItemIds}
          onToggleSave={toggleSavedItem}
        />
      </section>

      <aside className="side-panel">
        <InsightsPanel
          loading={loading}
          summary={data?.summary ?? null}
          topInsights={topInsights}
        />

        <SavedSearches
          loading={loadingHistory}
          items={savedSearches}
          onRepeatSearch={runSearch}
        />
      </aside>
    </div>
  );
}
