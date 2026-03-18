import { NextResponse } from "next/server";
import { analyzeSearchResults } from "@/lib/ml/analyzeSearchResults";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function fetchMercadoLibre(url: string) {
  const headers = {
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "es-AR,es;q=0.9,en;q=0.8",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    Referer: "https://www.mercadolibre.com.ar/",
    Origin: "https://www.mercadolibre.com.ar",
  };

  let response = await fetch(url, {
    headers,
    cache: "no-store",
  });

  if (!response.ok && [403, 429, 500, 502, 503, 504].includes(response.status)) {
    response = await fetch(url, {
      headers,
      cache: "no-store",
    });
  }

  return response;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.trim();

  if (!query) {
    return NextResponse.json(
      { error: "Debe indicar un término de búsqueda." },
      { status: 400 }
    );
  }

  try {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(
      query
    )}&limit=30`;

    const mlResponse = await fetchMercadoLibre(url);
    const responseText = await mlResponse.text();

    if (!mlResponse.ok) {
      return NextResponse.json(
        {
          error: "Mercado Libre respondió con error.",
          details: `HTTP ${mlResponse.status}${responseText ? ` · ${responseText.slice(0, 240)}` : ""}`,
        },
        { status: 502 }
      );
    }

    const rawData = responseText ? (JSON.parse(responseText) as Record<string, unknown>) : {};
    const analyzed = analyzeSearchResults(query, rawData);

    return NextResponse.json(analyzed, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error inesperado al consultar Mercado Libre.";

    return NextResponse.json(
      {
        error: "No se pudo procesar la búsqueda.",
        details: message,
      },
      { status: 500 }
    );
  }
}
