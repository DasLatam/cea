function safeJsonParse<T>(input: string): T | null {
  try {
    return JSON.parse(input) as T;
  } catch {
    return null;
  }
}

type HtmlItem = {
  id?: string;
  title?: string;
  price?: number;
  permalink?: string;
  thumbnail?: string;
  condition?: string;
  available_quantity?: number;
  sold_quantity?: number;
  category_id?: string;
  category_name?: string;
  shipping?: { free_shipping?: boolean };
};

type HtmlFallbackResult = {
  payload: Record<string, unknown> | null;
  strategy?: string;
};

function normalizeQuery(query: string) {
  return query
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function dedupeItems(items: HtmlItem[]) {
  const seen = new Set<string>();
  const deduped: HtmlItem[] = [];
  for (const item of items) {
    const key = String(item.id ?? item.permalink ?? item.title ?? "");
    if (!key || seen.has(key)) continue;
    seen.add(key);
    deduped.push(item);
  }
  return deduped;
}

function normalizeItems(results: HtmlItem[]) {
  const items = dedupeItems(results).filter((item) => item.title && item.permalink);
  if (!items.length) return null;

  return {
    paging: { total: items.length },
    results: items.map((item) => ({
      id: item.id ?? item.permalink,
      title: item.title,
      price: item.price ?? 0,
      permalink: item.permalink,
      thumbnail: item.thumbnail ?? "",
      condition: item.condition ?? "new",
      available_quantity: item.available_quantity ?? 0,
      sold_quantity: item.sold_quantity ?? 0,
      category_id: item.category_id ?? null,
      category_name: item.category_name ?? null,
      shipping: item.shipping ?? { free_shipping: false },
    })),
    _fallbackSource: "html",
  };
}

function parseLdJson(html: string): HtmlItem[] {
  const matches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const results: HtmlItem[] = [];

  for (const match of matches) {
    const parsed = safeJsonParse<any>(match[1]);
    if (!parsed) continue;
    const blocks = Array.isArray(parsed) ? parsed : [parsed];

    for (const block of blocks) {
      const list = block?.itemListElement;
      if (!Array.isArray(list)) continue;
      for (const entry of list) {
        const item = entry?.item ?? entry;
        const offers = item?.offers ?? {};
        const link = String(item?.url ?? "");
        const title = String(item?.name ?? "");
        const image = Array.isArray(item?.image) ? String(item.image[0] ?? "") : String(item?.image ?? "");
        const price = Number(offers?.price ?? offers?.lowPrice ?? item?.price ?? 0);
        const idMatch = link.match(/(MLA-?\d+|MLA\d+)/i);
        if (!title || !link) continue;
        results.push({
          id: idMatch?.[1]?.replace("-", "") || link,
          title,
          price: Number.isFinite(price) ? price : 0,
          permalink: link,
          thumbnail: image,
          condition: "new",
          available_quantity: 0,
          sold_quantity: 0,
          shipping: { free_shipping: false },
        });
      }
    }
  }

  return results;
}

function parseStateJson(html: string): HtmlItem[] {
  const results: HtmlItem[] = [];
  const statePatterns = [
    /window\.__PRELOADED_STATE__\s*=\s*({[\s\S]*?})\s*;\s*<\/script>/i,
    /window\.__INITIAL_STATE__\s*=\s*({[\s\S]*?})\s*;\s*<\/script>/i,
  ];

  for (const pattern of statePatterns) {
    const match = html.match(pattern);
    if (!match) continue;
    const parsed = safeJsonParse<any>(match[1]);
    if (!parsed) continue;

    const candidates: any[] = [];
    if (Array.isArray(parsed?.results)) candidates.push(...parsed.results);
    if (Array.isArray(parsed?.search?.results)) candidates.push(...parsed.search.results);
    if (Array.isArray(parsed?.components?.search?.results)) candidates.push(...parsed.components.search.results);

    for (const item of candidates) {
      const title = String(item?.title ?? item?.name ?? "");
      const link = String(item?.permalink ?? item?.url ?? "");
      if (!title || !link) continue;
      results.push({
        id: String(item?.id ?? link),
        title,
        price: Number(item?.price ?? item?.prices?.price ?? 0),
        permalink: link,
        thumbnail: String(item?.thumbnail ?? item?.image ?? ""),
        condition: String(item?.condition ?? "new"),
        available_quantity: Number(item?.available_quantity ?? 0),
        sold_quantity: Number(item?.sold_quantity ?? 0),
        category_id: item?.category_id ? String(item.category_id) : undefined,
        category_name: item?.category_name ? String(item.category_name) : undefined,
        shipping: { free_shipping: Boolean(item?.shipping?.free_shipping) },
      });
    }
  }

  return results;
}

function parseAnchorCards(html: string): HtmlItem[] {
  const results: HtmlItem[] = [];
  const anchors = [...html.matchAll(/<a[^>]+href="([^"]*\/p\/MLA\d+[^"]*|[^"]*MLA\d+[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];

  for (const anchor of anchors) {
    const link = anchor[1].startsWith("http") ? anchor[1] : `https://articulo.mercadolibre.com.ar${anchor[1]}`;
    const content = anchor[2];
    const titleMatch = content.match(/title="([^"]+)"/i) || content.match(/aria-label="([^"]+)"/i) || content.match(/>([^<]{10,120})<\/span>/i);
    const priceMatch = content.match(/\$\s?([\d\.,]+)/i);
    const imageMatch = content.match(/src="([^"]+)"/i);
    const idMatch = link.match(/(MLA\d+)/i);
    if (!titleMatch) continue;

    const price = Number(String(priceMatch?.[1] ?? "0").replace(/\./g, "").replace(/,/g, "."));

    results.push({
      id: idMatch?.[1] ?? link,
      title: titleMatch[1].replace(/\s+/g, " ").trim(),
      price: Number.isFinite(price) ? price : 0,
      permalink: link,
      thumbnail: imageMatch?.[1] ?? "",
      condition: "new",
      available_quantity: 0,
      sold_quantity: 0,
      shipping: { free_shipping: false },
    });
  }

  return results;
}

async function fetchHtml(url: string) {
  const response = await fetch(url, {
    headers: {
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "es-AR,es;q=0.9,en;q=0.8",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      Referer: "https://www.google.com/",
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "none",
    },
    cache: "no-store",
  });

  if (!response.ok) return null;
  const html = await response.text();
  if (!html) return null;
  return html;
}

export async function fetchMercadoLibreHtmlFallback(query: string): Promise<HtmlFallbackResult> {
  const slug = normalizeQuery(query);
  const urls = [
    { strategy: "slug", url: `https://listado.mercadolibre.com.ar/${slug}` },
    { strategy: "query-encoded", url: `https://listado.mercadolibre.com.ar/${encodeURIComponent(query).replace(/%20/g, "-")}` },
    { strategy: "search-query", url: `https://listado.mercadolibre.com.ar/_CustId_0?as_word=${encodeURIComponent(query)}` },
    { strategy: "jm-search", url: `https://www.mercadolibre.com.ar/jm/search?as_word=${encodeURIComponent(query)}` },
    { strategy: "site-search", url: `https://listado.mercadolibre.com.ar/${slug}_NoIndex_True` },
  ];

  for (const attempt of urls) {
    try {
      const html = await fetchHtml(attempt.url);
      if (!html) continue;

      const parsed = normalizeItems([
        ...parseLdJson(html),
        ...parseStateJson(html),
        ...parseAnchorCards(html),
      ]);

      if (parsed) {
        return { payload: parsed, strategy: attempt.strategy };
      }
    } catch {
      // sigue con la estrategia siguiente
    }
  }

  return { payload: null };
}
