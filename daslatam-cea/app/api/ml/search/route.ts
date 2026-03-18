import { NextResponse } from "next/server";
import { analyzeSearchResults } from "@/lib/ml/analyzeSearchResults";
import { fetchMercadoLibreHtmlFallback } from "@/lib/ml/fallbackHtmlSearch";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function fetchMercadoLibreApi(url: string) {
  const headers = {
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "es-AR,es;q=0.9,en;q=0.8",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    Referer: "https://www.mercadolibre.com.ar/",
    Origin: "https://www.mercadolibre.com.ar",
  };

  let response = await fetch(url, { headers, cache: "no-store" });
  if (!response.ok && [403, 429, 500, 502, 503, 504].includes(response.status)) {
    response = await fetch(url, { headers, cache: "no-store" });
  }
  return response;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.trim();

  if (!query) {
    return NextResponse.json({ error: "Debe indicar un término de búsqueda." }, { status: 400 });
  }

  try {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}&limit=30`;
    const mlResponse = await fetchMercadoLibreApi(url);
    const responseText = await mlResponse.text();

    if (mlResponse.ok && responseText) {
      const rawData = JSON.parse(responseText) as Record<string, unknown>;
      const analyzed = analyzeSearchResults(query, rawData);
      return NextResponse.json({ ...analyzed, source: "api" }, { status: 200 });
    }

    const htmlFallback = await fetchMercadoLibreHtmlFallback(query);
    if (htmlFallback) {
      const analyzed = analyzeSearchResults(query, htmlFallback);
      return NextResponse.json(
        {
          ...analyzed,
          source: "html-fallback",
          warning: "Mercado Libre rechazó la API pública desde el servidor y se utilizó una lectura de respaldo desde HTML público.",
          upstreamStatus: mlResponse.status,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        error: "Mercado Libre respondió con error y el respaldo también falló.",
        upstreamStatus: mlResponse.status,
        details: `HTTP ${mlResponse.status}${responseText ? ` · ${responseText.slice(0, 240)}` : ""}`,
      },
      { status: 502 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error inesperado al consultar Mercado Libre.";
    return NextResponse.json({ error: "No se pudo procesar la búsqueda.", details: message }, { status: 500 });
  }
}
