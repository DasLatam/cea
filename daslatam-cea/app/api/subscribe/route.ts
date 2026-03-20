import { NextRequest, NextResponse } from "next/server";
import { extractEmailAddress, sendWithResend } from "@/lib/email/resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SubscribeBody = {
  name?: string;
  nombre?: string;
  email?: string;
  interests?: string[];
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getOwnerEmail() {
  return extractEmailAddress(process.env.EMAIL_TO || process.env.EMAIL_FROM || "");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as SubscribeBody;
    const name = body.name?.trim() || body.nombre?.trim() || "";
    const email = body.email?.trim() || "";
    const interests = Array.isArray(body.interests) ? body.interests.filter(Boolean).slice(0, 6) : [];

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Ingresá un email válido." }, { status: 400 });
    }

    const ownerEmail = getOwnerEmail();
    const interestsText = interests.length > 0 ? interests.map(escapeHtml).join(", ") : "No especificados";
    const safeName = name ? escapeHtml(name) : "No informado";

    await sendWithResend({
      to: [ownerEmail],
      subject: "Nueva suscripción a novedades de CEA",
      replyTo: email,
      html: `
        <h2>Nueva suscripción</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Intereses:</strong> ${interestsText}</p>
      `,
    });

    await sendWithResend({
      to: [email],
      subject: "Te sumaste a las novedades de CEA",
      html: `
        <h2>Gracias por suscribirte</h2>
        <p>Ya quedaste anotado para recibir novedades, ideas para vender, campañas estacionales y nuevas herramientas de CEA.</p>
        <p><strong>Preferencias registradas:</strong> ${interestsText}</p>
        <hr />
        <p>CEA · Comercio Electrónico en Argentina</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo completar la suscripción.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
