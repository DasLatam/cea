import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${q}`
  );

  const data = await res.json();

  const results = data.results.map((item: any) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    sold: item.sold_quantity,
    stock: item.available_quantity,
    link: item.permalink
  }));

  return NextResponse.json(results);
}
