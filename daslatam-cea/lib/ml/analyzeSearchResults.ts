import { generateInsights } from "@/lib/insights/generateInsights";
import { computeProductScore } from "@/lib/scoring/productScore";
import {
  average,
  median,
  percentile,
  safeNumber,
} from "@/lib/utils/numbers";
import type { AnalyzedItem, SearchApiResponse } from "@/types/app";

type MercadoLibreSearchResponse = {
  paging?: {
    total?: number;
  };
  results?: Array<Record<string, unknown>>;
};

function getFlagsFromTitle(title: string): string[] {
  const text = title.toLowerCase();
  const rules: Array<{ flag: string; keywords: string[] }> = [
    { flag: "pesado", keywords: ["mueble", "silla", "mesa", "cocina", "heladera", "rack"] },
    { flag: "frágil", keywords: ["vidrio", "cerámica", "porcelana", "espejo", "pantalla"] },
    { flag: "marca", keywords: ["nike", "adidas", "apple", "samsung", "lego", "xiaomi"] },
    { flag: "regulado", keywords: ["perfume", "batería", "aerosol", "suplemento"] },
  ];

  return rules
    .filter((rule) => rule.keywords.some((keyword) => text.includes(keyword)))
    .map((rule) => rule.flag);
}

export function analyzeSearchResults(
  query: string,
  payload: Record<string, unknown>
): SearchApiResponse {
  const data = payload as MercadoLibreSearchResponse;
  const results = Array.isArray(data.results) ? data.results : [];

  const priceList = results.map((item) => safeNumber(item.price));
  const soldList = results.map((item) => safeNumber(item.sold_quantity));
  const stockList = results.map((item) => safeNumber(item.available_quantity));

  const medianPrice = median(priceList);
  const maxSold = Math.max(...soldList, 1);
  const maxRotation = Math.max(
    ...results.map((item) => {
      const sold = safeNumber(item.sold_quantity);
      const stock = safeNumber(item.available_quantity);
      return sold / Math.max(stock, 1);
    }),
    1
  );
  const p75Sold = percentile(soldList, 0.75);

  const items: AnalyzedItem[] = results.map((item) => {
    const title = String(item.title ?? "Sin título");
    const price = safeNumber(item.price);
    const sold = safeNumber(item.sold_quantity);
    const stock = safeNumber(item.available_quantity);
    const reviews = safeNumber(item.accepts_mercadopago ? 1 : 0);
    const flags = getFlagsFromTitle(title);

    const score = computeProductScore({
      price,
      sold,
      stock,
      medianPrice,
      maxSold,
      maxRotation,
      flags,
      freeShipping: Boolean((item.shipping as { free_shipping?: boolean } | undefined)?.free_shipping),
      condition: String(item.condition ?? ""),
    });

    const insights = generateInsights({
      title,
      price,
      sold,
      stock,
      medianPrice,
      p75Sold,
      flags,
      freeShipping: Boolean((item.shipping as { free_shipping?: boolean } | undefined)?.free_shipping),
    });

    return {
      id: String(item.id ?? ""),
      title,
      price,
      sold,
      stock,
      reviews,
      link: String(item.permalink ?? "#"),
      thumbnail: String(item.thumbnail ?? ""),
      categoryId: item.category_id ? String(item.category_id) : null,
      categoryName: item.category_name ? String(item.category_name) : null,
      score,
      flags,
      insights,
      raw: item,
      isDemo: Boolean((item as { _seed?: boolean })._seed),
    };
  });

  const averageScore = average(items.map((item) => item.score));
  const highScoreCount = items.filter((item) => item.score >= 70).length;
  const warningCount = items.reduce((count, item) => count + item.flags.length, 0);

  return {
    query,
    summary: {
      totalResults: items.length,
      totalAvailableFromML: safeNumber(data.paging?.total),
      medianPrice,
      averageSold: average(soldList),
      averageScore,
      topScore: Math.max(...items.map((item) => item.score), 0),
      highScoreCount,
      warningCount,
      averageStock: average(stockList),
    },
    items,
  };
}
