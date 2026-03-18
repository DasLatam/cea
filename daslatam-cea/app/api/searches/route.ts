import { NextResponse } from "next/server";
import { getSupabaseAdmin, hasSupabaseAdminConfig } from "@/lib/supabase/server";
import type { SearchApiResponse } from "@/types/app";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SaveSearchBody = {
  sessionId?: string;
  payload?: SearchApiResponse;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId")?.trim();

  if (!sessionId || !hasSupabaseAdminConfig()) {
    return NextResponse.json({ searches: [], storageDisabled: true });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("search_runs")
      .select("id, query, result_count, avg_score, top_score, median_price, warning_count, created_at")
      .eq("session_id", sessionId)
      .order("created_at", { ascending: false })
      .limit(12);

    if (error) {
      return NextResponse.json({ searches: [], storageDisabled: true, details: error.message });
    }

    return NextResponse.json({ searches: data ?? [] });
  } catch {
    return NextResponse.json({ searches: [], storageDisabled: true });
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SaveSearchBody;
    const sessionId = body.sessionId?.trim();
    const payload = body.payload;

    if (!sessionId || !payload) {
      return NextResponse.json({ error: "Faltan sessionId o payload." }, { status: 400 });
    }

    if (!hasSupabaseAdminConfig()) {
      return NextResponse.json({ error: "Persistencia deshabilitada." }, { status: 503 });
    }

    const supabase = getSupabaseAdmin();

    const itemsToUpsert = payload.items
      .filter((item) => !item.isDemo)
      .map((item) => ({
        id: item.id,
        title: item.title,
        category_id: item.categoryId ?? null,
        category_name: item.categoryName ?? null,
        permalink: item.link,
        thumbnail: item.thumbnail ?? null,
        last_seen_at: new Date().toISOString(),
      }));

    if (itemsToUpsert.length > 0) {
      const { error: itemsError } = await supabase.from("items").upsert(itemsToUpsert, { onConflict: "id" });
      if (itemsError) {
        throw itemsError;
      }
    }

    const warningCount = payload.items.reduce((count, item) => count + item.flags.length, 0);

    const { data: searchRun, error: searchRunError } = await supabase
      .from("search_runs")
      .insert({
        session_id: sessionId,
        query: payload.query,
        result_count: payload.summary.totalResults,
        median_price: payload.summary.medianPrice,
        avg_score: payload.summary.averageScore,
        top_score: payload.summary.topScore,
        warning_count: warningCount,
        summary: payload.summary,
      })
      .select("id")
      .single();

    if (searchRunError || !searchRun) {
      throw searchRunError ?? new Error("No se pudo crear el search run.");
    }

    const snapshots = payload.items
      .filter((item) => !item.isDemo)
      .map((item) => ({
        search_run_id: searchRun.id,
        item_id: item.id,
        price: item.price,
        sold: item.sold,
        stock: item.stock,
        reviews: item.reviews,
        score: item.score,
        flags: item.flags,
        insights: item.insights,
        raw: item.raw ?? {},
      }));

    if (snapshots.length > 0) {
      const { error: snapshotsError } = await supabase.from("item_snapshots").insert(snapshots);
      if (snapshotsError) {
        throw snapshotsError;
      }
    }

    return NextResponse.json({ saved: true, searchRunId: searchRun.id });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo guardar la búsqueda.";
    return NextResponse.json({ error: "No se pudo guardar la búsqueda.", details: message }, { status: 500 });
  }
}
