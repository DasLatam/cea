function hashString(input: string) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seed: number) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function normalizeQuery(query: string) {
  return query
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function detectCategory(query: string) {
  const q = normalizeQuery(query);
  if (/(yoga|fitness|pilates|banda elastica|mat)/.test(q)) {
    return { id: "MLA1276", name: "Deportes y Fitness" };
  }
  if (/(mascota|perro|gato|cucha|cama)/.test(q)) {
    return { id: "MLA1071", name: "Animales y Mascotas" };
  }
  if (/(cosmet|belleza|maquillaje|cepillo|serum)/.test(q)) {
    return { id: "MLA1246", name: "Belleza y Cuidado Personal" };
  }
  if (/(organizador|hogar|cocina|estante|caja)/.test(q)) {
    return { id: "MLA1574", name: "Hogar, Muebles y Jardín" };
  }
  return { id: "MLA5725", name: "Accesorios para Vehículos y Comercio" };
}

function buildTitle(query: string, variant: string) {
  const base = query
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return `${base} ${variant}`.trim();
}

const variants = [
  "Premium",
  "Set x2",
  "Alta Densidad",
  "Profesional",
  "Con Accesorios",
  "Eco Friendly",
  "Antideslizante",
  "Portátil",
  "Pack Emprendedor",
  "Reforzado",
  "Uso Intensivo",
  "Edición Pro",
];

export function buildSeedSearchPayload(query: string): Record<string, unknown> {
  const normalized = normalizeQuery(query);
  const seed = hashString(normalized);
  const random = mulberry32(seed);
  const category = detectCategory(normalized);
  const results = variants.map((variant, index) => {
    const basePrice = 6500 + Math.round(random() * 85000);
    const sold = 12 + Math.round(random() * 680);
    const stock = 4 + Math.round(random() * 140);
    const freeShipping = random() > 0.45;
    const price = basePrice + index * 850;
    const id = `SEED-${seed.toString(36).toUpperCase()}-${index + 1}`;

    return {
      id,
      title: buildTitle(query, variant),
      price,
      sold_quantity: sold,
      available_quantity: stock,
      permalink: `https://daslatamcea.vercel.app/analisis?demo=${encodeURIComponent(query)}#${id}`,
      thumbnail: "",
      category_id: category.id,
      category_name: category.name,
      condition: random() > 0.2 ? "new" : "used",
      shipping: { free_shipping: freeShipping },
      accepts_mercadopago: true,
      _seed: true,
    };
  });

  return {
    paging: { total: results.length },
    results,
    _fallbackSource: "seed",
    _seedCategory: category,
  };
}
