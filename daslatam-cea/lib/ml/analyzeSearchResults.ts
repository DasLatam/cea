type ProviderStatus = {
  key: string;
  label: string;
  status: "ok" | "warning" | "disabled" | "action" | "planned";
  detail: string;
  actionLabel?: string;
  actionHref?: string;
};

type Summary = {
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

type AnalyzedItem = {
  id: string;
  title: string;
  price: number;
  sold: number;
  stock: number;
  reviews: number;
  link: string;
  thumbnail: string;
  categoryId: string | null;
  categoryName: string | null;
  score: number;
  flags: string[];
  insights: string[];
  raw: Record<string, unknown>;
};

type SearchApiResponse = {
  query: string;
  summary: Summary;
  items: AnalyzedItem[];
  providerStatuses?: ProviderStatus[];
};

type MercadoLibreSearchResponse = {
  paging?: { total?: number };
  results?: Array<Record<string, unknown>>;
};

function n(v: unknown): number {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const parsed = Number(v);
    if (Number.isFinite(parsed)) return parsed;
  }
  return 0;
}

function avg(values: number[]): number {
  if (!values.length) return 0;
  return Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 100) / 100;
}

function med(values: number[]): number {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const raw = sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  return Math.round(raw * 100) / 100;
}

function quantile(values: number[], q: number): number {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  const raw = sorted[base + 1] !== undefined
    ? sorted[base] + rest * (sorted[base + 1] - sorted[base])
    : sorted[base];
  return Math.round(raw * 100) / 100;
}

function round2(v: number): number {
  return Math.round(v * 100) / 100;
}

function getFlags(title: string): string[] {
  const t = title.toLowerCase();
  const flags: string[] = [];
  if (["mueble", "silla", "mesa", "rack", "heladera", "cocina"].some((k) => t.includes(k))) flags.push("pesado");
  if (["vidrio", "ceramica", "cerámica", "porcelana", "pantalla", "espejo"].some((k) => t.includes(k))) flags.push("frágil");
  if (["nike", "adidas", "apple", "samsung", "lego", "xiaomi"].some((k) => t.includes(k))) flags.push("marca");
  if (["perfume", "bateria", "batería", "aerosol", "suplemento"].some((k) => t.includes(k))) flags.push("regulado");
  return flags;
}

function getInsights(args: {
  title: string;
  price: number;
  sold: number;
  stock: number;
  medianPrice: number;
  p75Sold: number;
  freeShipping: boolean;
  flags: string[];
}): string[] {
  const insights: string[] = [];
  if (args.price > 0 && args.medianPrice > 0) {
    if (args.price <= args.medianPrice * 0.85) insights.push("precio competitivo contra la mediana");
    if (args.price >= args.medianPrice * 1.2) insights.push("precio alto contra la mediana");
  }
  if (args.sold >= args.p75Sold && args.sold > 0) insights.push("rotación visible arriba del percentil 75");
  if (args.stock > 0 && args.sold > args.stock) insights.push("rotación alta frente al stock visible");
  if (args.freeShipping) insights.push("envío gratis activo");
  for (const flag of args.flags) {
    if (flag === "marca") insights.push("posible riesgo marcario");
    if (flag === "frágil") insights.push("requiere validar embalaje y devoluciones");
    if (flag === "pesado") insights.push("revisar costo logístico por volumen/peso");
    if (flag === "regulado") insights.push("revisar compliance antes de publicar");
  }
  return insights;
}

function scoreItem(args: {
  price: number;
  sold: number;
  stock: number;
  medianPrice: number;
  maxSold: number;
  maxRotation: number;
  flags: string[];
  freeShipping: boolean;
  condition: string;
}): number {
  let score = 50;
  const soldNorm = args.maxSold > 0 ? args.sold / args.maxSold : 0;
  const rotation = args.stock > 0 ? args.sold / args.stock : args.sold;
  const rotationNorm = args.maxRotation > 0 ? Math.min(rotation / args.maxRotation, 1) : 0;

  score += soldNorm * 25;
  score += rotationNorm * 20;

  if (args.medianPrice > 0 && args.price > 0) {
    if (args.price <= args.medianPrice * 0.9) score += 8;
    else if (args.price >= args.medianPrice * 1.2) score -= 8;
  }

  if (args.freeShipping) score += 4;
  if (args.condition.toLowerCase() === "new") score += 3;

  for (const flag of args.flags) {
    if (flag === "marca") score -= 12;
    if (flag === "regulado") score -= 10;
    if (flag === "frágil") score -= 6;
    if (flag === "pesado") score -= 5;
  }

  return Math.max(0, Math.min(100, Math.round(score)));
}

export function analyzeSearchResults(query: string, payload: Record<string, unknown>): SearchApiResponse {
  const data = payload as MercadoLibreSearchResponse;
  const results = Array.isArray(data.results) ? data.results : [];

  const priceList = results.map((item) => n(item.price)).filter((v) => v > 0);
  const soldList = results.map((item) => n(item.sold_quantity));
  const stockList = results.map((item) => n(item.available_quantity));
  const medianPrice = med(priceList);
  const maxSold = Math.max(1, ...soldList);
  const maxRotation = Math.max(
    1,
    ...results.map((item) => {
      const sold = n(item.sold_quantity);
      const stock = n(item.available_quantity);
      return sold / Math.max(stock, 1);
    })
  );
  const p75Sold = quantile(soldList, 0.75);

  const items: AnalyzedItem[] = results.map((item) => {
    const title = String(item.title ?? "Sin título");
    const price = n(item.price);
    const sold = n(item.sold_quantity);
    const stock = n(item.available_quantity);
    const flags = getFlags(title);
    const freeShipping = Boolean((item.shipping as { free_shipping?: boolean } | undefined)?.free_shipping);
    const condition = String(item.condition ?? "");
    const score = scoreItem({ price, sold, stock, medianPrice, maxSold, maxRotation, flags, freeShipping, condition });
    const insights = getInsights({ title, price, sold, stock, medianPrice, p75Sold, freeShipping, flags });

    return {
      id: String(item.id ?? ""),
      title,
      price,
      sold,
      stock,
      reviews: 0,
      link: String(item.permalink ?? "#"),
      thumbnail: String(item.thumbnail ?? ""),
      categoryId: item.category_id ? String(item.category_id) : null,
      categoryName: item.category_name ? String(item.category_name) : null,
      score,
      flags,
      insights,
      raw: item,
    };
  });

  return {
    query,
    summary: {
      totalResults: items.length,
      totalAvailableFromML: n(data.paging?.total),
      medianPrice,
      averageSold: avg(soldList),
      averageScore: avg(items.map((item) => item.score)),
      topScore: items.length ? Math.max(...items.map((item) => item.score)) : 0,
      highScoreCount: items.filter((item) => item.score >= 70).length,
      warningCount: items.reduce((acc, item) => acc + item.flags.length, 0),
      averageStock: avg(stockList),
    },
    items,
  };
}
