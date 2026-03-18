import { NextResponse } from "next/server";
import { getSupabaseAdmin, hasSupabaseAdminConfig } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SaveItemBody = {
  sessionId?: string;
  item?: {
    id: string;
    title: string;
    link: string;
    thumbnail?: string | null;
    categoryId?: string | null;
    categoryName?: string | null;
    isDemo?: boolean;
  };
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId")?.trim();

  if (!sessionId || !hasSupabaseAdminConfig()) {
    return NextResponse.json({ items: [], storageDisabled: true });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("saved_items")
      .select("item_id")
      .eq("session_id", sessionId)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ items: [], storageDisabled: true, details: error.message });
    }

    return NextResponse.json({ items: (data ?? []).map((row) => row.item_id) });
  } catch {
    return NextResponse.json({ items: [], storageDisabled: true });
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SaveItemBody;
    const sessionId = body.sessionId?.trim();
    const item = body.item;

    if (!sessionId || !item?.id || !item.title || !item.link) {
      return NextResponse.json({ error: "Faltan sessionId o datos del ítem." }, { status: 400 });
    }

    if (item.isDemo) {
      return NextResponse.json({ error: "Los ítems demo no se guardan." }, { status: 400 });
    }

    if (!hasSupabaseAdminConfig()) {
      return NextResponse.json({ error: "Persistencia deshabilitada." }, { status: 503 });
    }

    const supabase = getSupabaseAdmin();
    const { error: itemError } = await supabase
      .from("items")
      .upsert(
        {
          id: item.id,
          title: item.title,
          category_id: item.categoryId ?? null,
          category_name: item.categoryName ?? null,
          permalink: item.link,
          thumbnail: item.thumbnail ?? null,
          last_seen_at: new Date().toISOString(),
        },
        { onConflict: "id" }
      );

    if (itemError) throw itemError;

    const { error } = await supabase
      .from("saved_items")
      .upsert({ session_id: sessionId, item_id: item.id }, { onConflict: "session_id,item_id" });

    if (error) throw error;

    return NextResponse.json({ saved: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo guardar el producto.";
    return NextResponse.json({ error: "No se pudo guardar el producto.", details: message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("sessionId")?.trim();
    const itemId = searchParams.get("itemId")?.trim();

    if (!sessionId || !itemId) {
      return NextResponse.json({ error: "Faltan sessionId o itemId." }, { status: 400 });
    }

    if (!hasSupabaseAdminConfig()) {
      return NextResponse.json({ error: "Persistencia deshabilitada." }, { status: 503 });
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("saved_items").delete().eq("session_id", sessionId).eq("item_id", itemId);
    if (error) throw error;

    return NextResponse.json({ removed: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo quitar el producto.";
    return NextResponse.json({ error: "No se pudo quitar el producto.", details: message }, { status: 500 });
  }
}
