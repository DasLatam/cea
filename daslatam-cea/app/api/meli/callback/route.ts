import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    ok: true,
    message:
      'Callback de notificaciones de Mercado Libre activo. Esta URL no es la del redirect OAuth; es para webhooks/notificaciones.',
  });
}

export async function POST(request: NextRequest) {
  let body: unknown = null;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  console.log('Mercado Libre notification received:', body);

  return NextResponse.json({ ok: true });
}
