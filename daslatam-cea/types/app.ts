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
  source?: "api" | "html-fallback" | "browser-fallback";
  warning?: string;
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
