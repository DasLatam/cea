export type SearchSource = "api" | "html-fallback" | "seed-fallback";

export type ProviderStatus = {
  key: string;
  label: string;
  status: "ok" | "warning" | "disabled" | "planned";
  detail: string;
};

export type SearchDiagnostics = {
  upstreamStatus?: number;
  strategiesTried: string[];
};

export type AnalyzedItem = {
  id: string;
  title: string;
  price: number;
  sold: number;
  stock: number;
  reviews: number;
  link: string;
  thumbnail?: string | null;
  categoryId?: string | null;
  categoryName?: string | null;
  score: number;
  flags: string[];
  insights: string[];
  raw?: Record<string, unknown>;
  isDemo?: boolean;
};

export type SearchSummary = {
  totalResults: number;
  totalAvailableFromML: number;
  medianPrice: number;
  averageSold: number;
  averageScore: number;
  topScore: number;
  highScoreCount: number;
  warningCount: number;
  averageStock: number;
};

export type SearchApiResponse = {
  query: string;
  summary: SearchSummary;
  items: AnalyzedItem[];
  source?: SearchSource;
  warning?: string;
  providerStatuses?: ProviderStatus[];
  diagnostics?: SearchDiagnostics;
};

export type SavedSearchRow = {
  id: string;
  query: string;
  result_count: number;
  avg_score: number | null;
  top_score: number | null;
  median_price: number | null;
  warning_count: number | null;
  created_at: string;
};
