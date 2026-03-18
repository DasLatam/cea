import { NextResponse } from "next/server";
import { analyzeSearchResults } from "@/lib/ml/analyzeSearchResults";
import { searchMercadoLibre } from "@/lib/ml/searchMercadoLibre";
import { getProviderStatuses } from "@/lib/providers/status";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function emptyPayload(
  query: string,
  diagnostics: { upstreamStatus?: number; strategiesTried: string[]; upstreamDetails?: string },
) {
  return {
    query,
    summary: {
      totalResults: 0,
      totalAvailableFromML: 0,
      medianPrice: 0,
      averageSold: 0,
      averageScore: 0,
      topScore: 0,
      highScoreCount: 0,
      warningCount: 0,
      averageStock: 0,
    },
    items: [],
    diagnostics,
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.trim();

  if (!query) {
    return NextResponse.json({ error: "Debe indicar un término de búsqueda." }, { status: 400 });
  }

  try {
    const result = await searchMercadoLibre(query, 30);

    if (result.ok && result.payload) {
      const analyzed = analyzeSearchResults(query, result.payload);
      const providerStatuses = getProviderStatuses({
        mlApiOk: true,
        mlHtmlOk: false,
        mlBlocked: result.publicStatus === 403 || result.publicStatus === 429,
        mlAuthConfigured: result.oauthConfigured,
      });

      return NextResponse.json(
        {
          ...analyzed,
          source: "api",
          warning:
            result.source === "oauth-api"
              ? "La API pública fue rechazada. La búsqueda actual se resolvió con la cuenta OAuth de Mercado Libre conectada en el backend."
              : undefined,
          providerStatuses,
          diagnostics: {
            upstreamStatus: result.publicStatus,
            strategiesTried: result.strategiesTried,
            upstreamDetails: result.upstreamDetails,
          },
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        ...emptyPayload(query, {
          upstreamStatus: result.publicStatus,
          strategiesTried: result.strategiesTried,
          upstreamDetails: result.upstreamDetails,
        }),
        error: "Mercado Libre rechazó la consulta.",
        details: result.oauthConfigured
          ? "La API pública falló y la vía autenticada tampoco devolvió resultados utilizables. Revisá /api/meli/status, la app OAuth y la cuenta conectada."
          : "La API pública falló y no hay una cuenta OAuth operativa en backend. Conectá Mercado Libre desde /api/meli/connect.",
        providerStatuses: getProviderStatuses({
          mlApiOk: false,
          mlHtmlOk: false,
          mlBlocked: result.publicStatus === 403 || result.publicStatus === 429,
          mlAuthConfigured: result.oauthConfigured,
        }),
      },
      { status: 502 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error inesperado al consultar Mercado Libre.";

    return NextResponse.json(
      {
        ...emptyPayload(query, {
          strategiesTried: ["ml-public-api", "ml-oauth-api"],
          upstreamDetails: message,
        }),
        error: "No se pudo consultar Mercado Libre.",
        details: message,
        providerStatuses: getProviderStatuses({
          mlApiOk: false,
          mlHtmlOk: false,
          mlBlocked: true,
          mlAuthConfigured: Boolean(
            process.env.MERCADOLIBRE_CLIENT_ID && process.env.MERCADOLIBRE_CLIENT_SECRET,
          ),
        }),
      },
      { status: 502 },
    );
  }
}
