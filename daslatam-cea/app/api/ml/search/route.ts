import { NextResponse } from "next/server";
import { analyzeSearchResults } from "@/lib/ml/analyzeSearchResults";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

    const mlResponse = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!mlResponse.ok) {
      return NextResponse.json(
        {
          error: "Mercado Libre respondió con error.",
          details: `HTTP ${mlResponse.status}`,
        },
        { status: 502 }
      );
    }

    const rawData = (await mlResponse.json()) as Record<string, unknown>;
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
