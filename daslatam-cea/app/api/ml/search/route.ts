import { NextResponse } from "next/server";
import { analyzeSearchResults } from "@/lib/ml/analyzeSearchResults";
import { fetchMercadoLibreHtmlFallback } from "@/lib/ml/fallbackHtmlSearch";
import { buildSeedSearchPayload } from "@/lib/ml/seedSearchResults";
import type { ProviderStatus } from "@/types/app";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function fetchMercadoLibreApi(url: string) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "es-AR,es;q=0.9,en;q=0.8",
      "User-Agent": "DAS-LATAM-CEA/1.0 (+https://daslatam.org)",
    },
    cache: "no-store",
  });

  return response;
}

function buildProviderStatuses(input: {
  apiOk: boolean;
  htmlOk: boolean;
  seedUsed: boolean;
}): ProviderStatus[] {
  return [
    {
      key: "ml-api",
      label: "Mercado Libre · API pública",
      status: input.apiOk ? "ok" : "warning",
      detail: input.apiOk
        ? "Consulta resuelta con la fuente pública principal."
        : "La fuente principal respondió con error o bloqueo upstream.",
    },
    {
      key: "ml-html",
      label: "Mercado Libre · respaldo HTML",
      status: input.htmlOk ? "ok" : "warning",
      detail: input.htmlOk
        ? "Se pudo reconstruir la búsqueda desde HTML público."
        : "No se obtuvieron resultados suficientes desde HTML público.",
    },
    {
      key: "seed-mode",
      label: "Modo semilla interna",
      status: input.seedUsed ? "warning" : "disabled",
      detail: input.seedUsed
        ? "Se usó una simulación determinística para no dejar la herramienta vacía mientras las fuentes externas fallan."
        : "No fue necesario usar datos de semilla interna.",
    },
    {
      key: "google-signals",
      label: "Google · demanda externa",
      status: "planned",
      detail: "Pendiente de integrar proveedor o export manual para tendencias y volumen.",
    },
    {
      key: "meta-signals",
      label: "Meta · audiencia",
      status: "planned",
      detail: "Pendiente de integrar export o fuente autenticada para audiencias y señales sociales.",
    },
    {
      key: "alibaba-signals",
      label: "Alibaba · sourcing",
      status: "planned",
      detail: "Pendiente de módulo de costo FOB, MOQ y verificación de proveedores.",
    },
  ];
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.trim();

  if (!query) {
    return NextResponse.json({ error: "Debe indicar un término de búsqueda." }, { status: 400 });
  }

  const strategiesTried: string[] = [];

  try {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}&limit=30`;
    strategiesTried.push("ml-api");
    const apiResponse = await fetchMercadoLibreApi(url);
    const responseText = await apiResponse.text();

    if (apiResponse.ok && responseText) {
      const rawData = JSON.parse(responseText) as Record<string, unknown>;
      const analyzed = analyzeSearchResults(query, rawData);
      return NextResponse.json(
        {
          ...analyzed,
          source: "api",
          providerStatuses: buildProviderStatuses({ apiOk: true, htmlOk: false, seedUsed: false }),
          diagnostics: { strategiesTried },
        },
        { status: 200 }
      );
    }

    strategiesTried.push("ml-html");
    const htmlFallback = await fetchMercadoLibreHtmlFallback(query);
    if (htmlFallback.payload) {
      const analyzed = analyzeSearchResults(query, htmlFallback.payload);
      return NextResponse.json(
        {
          ...analyzed,
          source: "html-fallback",
          warning:
            "La API pública rechazó la consulta. La lectura actual se reconstruyó desde HTML público y puede traer menos señales de stock o vendidos.",
          providerStatuses: buildProviderStatuses({ apiOk: false, htmlOk: true, seedUsed: false }),
          diagnostics: {
            upstreamStatus: apiResponse.status,
            strategiesTried: [...strategiesTried, htmlFallback.strategy ?? "html-unknown"],
          },
        },
        { status: 200 }
      );
    }

    strategiesTried.push("seed-fallback");
    const seedPayload = buildSeedSearchPayload(query);
    const analyzed = analyzeSearchResults(query, seedPayload);
    return NextResponse.json(
      {
        ...analyzed,
        source: "seed-fallback",
        warning:
          "Las fuentes externas bloquearon la consulta. Se muestra una simulación interna de producto para que puedas probar score, UI, guardado e interpretación sin dejar la herramienta inutilizable.",
        providerStatuses: buildProviderStatuses({ apiOk: false, htmlOk: false, seedUsed: true }),
        diagnostics: {
          upstreamStatus: apiResponse.status,
          strategiesTried,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error inesperado al consultar Mercado Libre.";

    const analyzed = analyzeSearchResults(query, buildSeedSearchPayload(query));

    return NextResponse.json(
      {
        ...analyzed,
        source: "seed-fallback",
        warning:
          "No se pudo completar la consulta online. Se muestra una simulación interna para mantener operativo el flujo de análisis.",
        providerStatuses: buildProviderStatuses({ apiOk: false, htmlOk: false, seedUsed: true }),
        diagnostics: {
          strategiesTried: [...strategiesTried, "seed-on-error"],
        },
        error: "No se pudo consultar la fuente online.",
        details: message,
      },
      { status: 200 }
    );
  }
}
