import { NextResponse } from "next/server";
import { analyzeSearchResults } from "@/lib/ml/analyzeSearchResults";
import { fetchMercadoLibreHtmlFallback } from "@/lib/ml/fallbackHtmlSearch";
import { getProviderStatuses } from "@/lib/providers/status";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type FetchResult = {
  ok: boolean;
  status: number;
  text: string;
  strategy: string;
};

async function fetchMercadoLibreApi(url: string, strategy: string, token?: string): Promise<FetchResult> {
  const headers: Record<string, string> = {
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "es-AR,es;q=0.9,en;q=0.8",
    "User-Agent": "Mozilla/5.0 (compatible; DAS LATAM CEA/1.0; +https://daslatam.org)",
    Referer: "https://daslatamcea.vercel.app/",
    Origin: "https://daslatamcea.vercel.app",
  };

  if (token?.trim()) {
    headers.Authorization = `Bearer ${token.trim()}`;
  }

  const response = await fetch(url, {
    headers,
    cache: "no-store",
  });

  const text = await response.text();
  return {
    ok: response.ok,
    status: response.status,
    text,
    strategy,
  };
}

function emptyPayload(query: string, diagnostics: { upstreamStatus?: number; strategiesTried: string[]; upstreamDetails?: string }) {
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

  const token = process.env.MERCADOLIBRE_ACCESS_TOKEN?.trim();
  const strategiesTried: string[] = [];

  try {
    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}&limit=30`;

    const publicApi = await fetchMercadoLibreApi(apiUrl, "ml-public-api");
    strategiesTried.push(publicApi.strategy);

    if (publicApi.ok && publicApi.text) {
      const analyzed = analyzeSearchResults(query, JSON.parse(publicApi.text) as Record<string, unknown>);
      return NextResponse.json(
        {
          ...analyzed,
          source: "api",
          providerStatuses: getProviderStatuses({ mlApiOk: true, mlHtmlOk: false, mlAuthConfigured: Boolean(token) }),
          diagnostics: { strategiesTried },
        },
        { status: 200 }
      );
    }

    if (token) {
      const authApi = await fetchMercadoLibreApi(apiUrl, "ml-auth-api", token);
      strategiesTried.push(authApi.strategy);

      if (authApi.ok && authApi.text) {
        const analyzed = analyzeSearchResults(query, JSON.parse(authApi.text) as Record<string, unknown>);
        return NextResponse.json(
          {
            ...analyzed,
            source: "api",
            warning:
              "La vía pública fue rechazada. La lectura actual se resolvió usando el token OAuth configurado para el backend.",
            providerStatuses: getProviderStatuses({ mlApiOk: true, mlHtmlOk: false, mlBlocked: true, mlAuthConfigured: true }),
            diagnostics: {
              upstreamStatus: publicApi.status,
              strategiesTried,
              upstreamDetails: publicApi.text.slice(0, 280),
            },
          },
          { status: 200 }
        );
      }
    }

    const htmlFallback = await fetchMercadoLibreHtmlFallback(query);
    strategiesTried.push(htmlFallback.strategy ?? "ml-html-fallback");

    if (htmlFallback.payload) {
      const analyzed = analyzeSearchResults(query, htmlFallback.payload);
      return NextResponse.json(
        {
          ...analyzed,
          source: "html-fallback",
          warning:
            "La API principal fue rechazada y los resultados actuales se reconstruyeron desde HTML público. Puede faltar stock o vendidos visibles.",
          providerStatuses: getProviderStatuses({ mlApiOk: false, mlHtmlOk: true, mlBlocked: true, mlAuthConfigured: Boolean(token) }),
          diagnostics: {
            upstreamStatus: publicApi.status,
            strategiesTried,
            upstreamDetails: publicApi.text.slice(0, 280),
          },
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        ...emptyPayload(query, {
          upstreamStatus: publicApi.status,
          strategiesTried,
          upstreamDetails: publicApi.text.slice(0, 280),
        }),
        error: "Mercado Libre rechazó la consulta.",
        details: token
          ? "La API pública devolvió bloqueo upstream y tampoco alcanzó el fallback autenticado/HTML. Revisá el token, el redirect URI y la app OAuth de Mercado Libre."
          : "La API pública devolvió bloqueo upstream y no hay token OAuth configurado para el backend. Sin token propio, Vercel no tiene una salida fiable frente al 403 actual.",
        providerStatuses: getProviderStatuses({ mlApiOk: false, mlHtmlOk: false, mlBlocked: true, mlAuthConfigured: Boolean(token) }),
      },
      { status: 502 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error inesperado al consultar Mercado Libre.";

    return NextResponse.json(
      {
        ...emptyPayload(query, {
          strategiesTried,
          upstreamDetails: message,
        }),
        error: "No se pudo consultar Mercado Libre.",
        details: message,
        providerStatuses: getProviderStatuses({ mlApiOk: false, mlHtmlOk: false, mlBlocked: true, mlAuthConfigured: Boolean(token) }),
      },
      { status: 502 }
    );
  }
}
