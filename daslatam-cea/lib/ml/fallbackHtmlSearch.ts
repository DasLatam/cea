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
  shipping?: { free_shipping?: boolean };
};

export async function fetchMercadoLibreHtmlFallback(query: string): Promise<Record<string, unknown> | null> {
  const slug = query
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const url = `https://listado.mercadolibre.com.ar/${slug}`;
  const response = await fetch(url, {
    headers: {
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "Accept-Language": "es-AR,es;q=0.9,en;q=0.8",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      Referer: "https://www.mercadolibre.com.ar/",
    },
    cache: "no-store",
  });

  if (!response.ok) return null;
  const html = await response.text();
  if (!html) return null;

  const matches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  if (!matches.length) return null;

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
        const price = Number(
          offers?.price ?? offers?.lowPrice ?? item?.price ?? 0
        );
        const link = String(item?.url ?? "");
        const title = String(item?.name ?? "");
        if (!title || !link) continue;
        const idMatch = link.match(/(MLA-?\d+|MLA\d+)/i);
        results.push({
          id: idMatch?.[1]?.replace("-", "") || link,
          title,
          price: Number.isFinite(price) ? price : 0,
          permalink: link,
          thumbnail: Array.isArray(item?.image) ? String(item.image[0] ?? "") : String(item?.image ?? ""),
          condition: "new",
          available_quantity: 0,
          sold_quantity: 0,
          shipping: { free_shipping: false },
        });
      }
    }
  }

  if (!results.length) return null;

  return {
    paging: {
      total: results.length,
    },
    results,
    _fallbackSource: "html",
  };
}
