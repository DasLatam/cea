import { NextResponse } from "next/server";
import { meliFetch } from "@/lib/meli/client";

export async function GET() {
  try {
    const me = await meliFetch("/users/me");
    return NextResponse.json({ ok: true, data: me });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error.message || "No se pudo consultar /users/me" },
      { status: 500 }
    );
  }
}