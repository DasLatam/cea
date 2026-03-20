import { NextRequest, NextResponse } from "next/server";
import { extractEmailAddress, sendWithResend } from "@/lib/email/resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactBody = {
  name?: string;
  nombre?: string;
  email?: string;
  company?: string;
  empresa?: string;
  topic?: string;
  asunto?: string;
  message?: string;
  mensaje?: string;
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
    const body = (await req.json()) as ContactBody;
    const name = body.name?.trim() || body.nombre?.trim() || "";
    const email = body.email?.trim() || "";
    const company = body.company?.trim() || body.empresa?.trim() || "";
    const topic = body.topic?.trim() || body.asunto?.trim() || "Consulta general";
    const message = body.message?.trim() || body.mensaje?.trim() || "";

    if (name.length < 2) {
      return NextResponse.json({ ok: false, error: "Ingresá tu nombre." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Ingresá un email válido." }, { status: 400 });
    }

    if (message.length < 20) {
      return NextResponse.json(
        { ok: false, error: "Contanos un poco más para poder ayudarte mejor." },
        { status: 400 }
      );
    }

    const ownerEmail = getOwnerEmail();

    await sendWithResend({
      to: [ownerEmail],
      subject: `Nuevo mensaje desde CEA · ${topic}`,
      replyTo: email,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Empresa / proyecto:</strong> ${escapeHtml(company || "No informado")}</p>
        <p><strong>Tema:</strong> ${escapeHtml(topic)}</p>
        <hr />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    await sendWithResend({
      to: [email],
      subject: "Recibimos tu mensaje en CEA",
      html: `
        <h2>Gracias por escribirnos</h2>
        <p>Recibimos tu consulta correctamente y la vamos a revisar.</p>
        <p>Si hace falta más información, te responderemos a este mismo correo.</p>
        <p><strong>Resumen enviado:</strong></p>
        <p><strong>Tema:</strong> ${escapeHtml(topic)}</p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        <hr />
        <p>CEA · Comercio Electrónico en Argentina</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo enviar el mensaje.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
