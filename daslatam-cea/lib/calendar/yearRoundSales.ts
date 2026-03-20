export type CampaignDefinition = {
  id: string;
  title: string;
  kind: "fixed" | "nthWeekday";
  month: number; // 1-12
  day?: number;
  nth?: number;
  weekday?: number; // 0 Sunday - 6 Saturday
  description: string;
  niches: string[];
  audience: string;
  inventoryHint: string;
  caution: string;
  buyLeadDays: number;
  publishLeadDays: number;
  transitMinDays: number;
  transitMaxDays: number;
};

export type CampaignOccurrence = CampaignDefinition & {
  eventDate: Date;
  buyDate: Date;
  publishDate: Date;
  sailWindowStart: Date;
  sailWindowEnd: Date;
  status: "buy-now" | "embark-soon" | "publish-soon" | "on-sale" | "planned";
  daysUntilEvent: number;
};

const DAY_MS = 24 * 60 * 60 * 1000;

export const CAMPAIGNS: CampaignDefinition[] = [
  {
    id: "reyes",
    title: "Reyes",
    kind: "fixed",
    month: 1,
    day: 6,
    description:
      "Campaña fuerte para juguetes, accesorios infantiles, sets creativos y regalos de ticket medio accesible.",
    niches: ["juguetes", "creatividad", "accesorios infantiles"],
    audience: "Familias con niñas y niños",
    inventoryHint: "Productos livianos, coloridos y fáciles de paquetizar.",
    caution: "Competencia alta en juguetes genéricos. Conviene diferenciar por bundle o packaging regalo.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
  {
    id: "enamorados",
    title: "Día de los Enamorados",
    kind: "fixed",
    month: 2,
    day: 14,
    description:
      "Fecha útil para regalos emocionales, sets para pareja, deco, aromas, luces, peluches y accesorios con packaging cuidado.",
    niches: ["romance", "deco", "regalería"],
    audience: "Parejas y compradores impulsivos",
    inventoryHint: "Mejor desempeño en packs armados y productos con fuerte valor percibido.",
    caution: "Evitar depender sólo de flores o perecederos. Lo ideal es producto estable y fácil de almacenar.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
  {
    id: "mujer",
    title: "Día de la Mujer",
    kind: "fixed",
    month: 3,
    day: 8,
    description:
      "Sirve para belleza, bienestar, papelería premium, accesorios personales y regalos corporativos.",
    niches: ["belleza", "wellness", "accesorios"],
    audience: "Compra personal y regalos institucionales",
    inventoryHint: "Conviene trabajar lotes de presentación prolija y ticket medio bajo a medio.",
    caution: "No depende sólo de una fecha social; tiene que poder venderse también el resto del año.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
  {
    id: "vuelta-al-cole",
    title: "Vuelta al cole",
    kind: "fixed",
    month: 2,
    day: 20,
    description:
      "Mochilas livianas, cartucheras, botellas, lunch boxes, etiquetas, organización y accesorios escolares.",
    niches: ["escolar", "organización", "kids"],
    audience: "Familias y revendedores de escolar",
    inventoryHint: "Ideal para bundles por color, edad o nivel educativo.",
    caution: "El calendario escolar varía según jurisdicción. Conviene publicar antes de la última semana de febrero.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
  {
    id: "padre",
    title: "Día del Padre",
    kind: "nthWeekday",
    month: 6,
    nth: 3,
    weekday: 0,
    description:
      "Buen momento para kits funcionales, herramientas chicas, mates, accesorios auto, grooming y regalos simples de decisión rápida.",
    niches: ["herramientas", "mates", "auto", "grooming"],
    audience: "Regalo familiar y compra de último tramo",
    inventoryHint: "Mejoran mucho los packs listos para regalar con una narrativa clara.",
    caution: "Si el producto necesita talles o variantes complejas, aumenta el riesgo operativo.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
  {
    id: "amigo",
    title: "Día del Amigo",
    kind: "fixed",
    month: 7,
    day: 20,
    description:
      "Funciona para regalos grupales, juegos, vasos, bar, decoración, humor, tecnología simple y kits compartibles.",
    niches: ["regalería", "bar", "juegos", "gadgets"],
    audience: "Grupos de amigos y compradores de ticket medio",
    inventoryHint: "Rinden bien los packs para dos o más unidades.",
    caution: "Conviene evitar productos demasiado estacionales si no tienen salida posterior.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
  {
    id: "abuelos",
    title: "Día de los Abuelos",
    kind: "fixed",
    month: 7,
    day: 26,
    description:
      "Oportunidad para regalos afectivos, confort, cocina, abrigo suave, bienestar, lectura y accesorios de uso cotidiano.",
    niches: ["confort", "cocina", "bienestar"],
    audience: "Compra familiar y regalo emocional",
    inventoryHint: "Funcionan muy bien los productos prácticos con mensaje de regalo claro.",
    caution: "No conviene empujar productos tecnológicos complejos salvo que sean muy intuitivos.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
  {
    id: "nino",
    title: "Día del Niño",
    kind: "nthWeekday",
    month: 8,
    nth: 3,
    weekday: 0,
    description:
      "Es una de las campañas más fuertes del año para juguetes, didácticos, aire libre, deco infantil, movilidad y creatividad.",
    niches: ["juguetes", "didácticos", "aire libre"],
    audience: "Familias, padrinos, abuelos y compra regalo",
    inventoryHint: "Permite volumen alto, pero exige seleccionar productos con fotos y títulos muy claros.",
    caution: "La categoría se congestiona rápido. Hay que publicar temprano y escapar a la guerra pura de precio.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
  {
    id: "primavera",
    title: "Primavera",
    kind: "fixed",
    month: 9,
    day: 21,
    description:
      "Campaña para picnic, aire libre, deco, jardín, picnic urbano, mates, botellas, moda liviana y accesorios coloridos.",
    niches: ["aire libre", "deco", "jardín"],
    audience: "Jóvenes, familias y compra impulsiva",
    inventoryHint: "Muy útil para productos fotogénicos con buena presentación visual.",
    caution: "No todos los nichos tienen salida profunda; conviene priorizar productos que sigan en verano.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
  {
    id: "madre",
    title: "Día de la Madre",
    kind: "nthWeekday",
    month: 10,
    nth: 3,
    weekday: 0,
    description:
      "Otra de las grandes campañas anuales. Funciona para belleza, bienestar, hogar, cocina linda, deco, joyería y kits premium.",
    niches: ["belleza", "hogar", "deco", "regalería"],
    audience: "Compra familiar con mayor predisposición a ticket medio",
    inventoryHint: "Puede soportar mejor margen que otras campañas si el producto transmite regalo real.",
    caution: "No improvisar packaging. En esta fecha el valor percibido pesa mucho.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
  {
    id: "halloween",
    title: "Halloween",
    kind: "fixed",
    month: 10,
    day: 31,
    description:
      "Decoración, luces, moldes, maquillaje temático, cotillón, accesorios para fiesta y ambientación para locales.",
    niches: ["cotillón", "deco temática", "fiesta"],
    audience: "Familias, jóvenes, eventos y comercios",
    inventoryHint: "Ideal para accesorios de bajo costo y alto volumen.",
    caution: "Es muy puntual. Hay que liquidar o reconvertir stock remanente si no rota.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
  {
    id: "navidad",
    title: "Navidad",
    kind: "fixed",
    month: 12,
    day: 25,
    description:
      "Temporada larga para regalos, deco, vajilla, luces, cocina, juguetes, tecnología simple y packs de fin de año.",
    niches: ["deco", "regalos", "hogar", "juguetes"],
    audience: "Mercado masivo",
    inventoryHint: "Permite amplitud de surtido y trabajar bundles por presupuesto.",
    caution: "Hay que cuidar tiempos de reposición y la saturación logística de diciembre.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
  {
    id: "verano",
    title: "Verano y pileta",
    kind: "fixed",
    month: 12,
    day: 15,
    description:
      "Temporada para pileta, playa, camping, jardín, inflables, enfriamiento, picnic y vacaciones.",
    niches: ["pileta", "camping", "playa", "jardín"],
    audience: "Familias y tiempo libre",
    inventoryHint: "Conviene lanzar en noviembre para capturar preventa.",
    caution: "Los productos voluminosos o frágiles suben el costo operativo.",
    buyLeadDays: 90,
    publishLeadDays: 30,
    transitMinDays: 30,
    transitMaxDays: 45,
  },
];

function addDays(date: Date, days: number) {
  return new Date(date.getTime() + days * DAY_MS);
}

function toStartOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function daysBetween(a: Date, b: Date) {
  return Math.ceil((toStartOfDay(b).getTime() - toStartOfDay(a).getTime()) / DAY_MS);
}

function nthWeekdayOfMonth(year: number, month: number, weekday: number, nth: number) {
  const first = new Date(year, month - 1, 1);
  const offset = (7 + weekday - first.getDay()) % 7;
  const day = 1 + offset + (nth - 1) * 7;
  return new Date(year, month - 1, day);
}

function buildEventDate(def: CampaignDefinition, year: number) {
  if (def.kind === "fixed") {
    return new Date(year, def.month - 1, def.day || 1);
  }

  return nthWeekdayOfMonth(year, def.month, def.weekday || 0, def.nth || 1);
}

export function getNextOccurrence(def: CampaignDefinition, reference = new Date()): CampaignOccurrence {
  const now = toStartOfDay(reference);
  let eventDate = buildEventDate(def, now.getFullYear());

  if (eventDate < now) {
    eventDate = buildEventDate(def, now.getFullYear() + 1);
  }

  const buyDate = addDays(eventDate, -def.buyLeadDays);
  const publishDate = addDays(eventDate, -def.publishLeadDays);
  const sailWindowStart = addDays(eventDate, -(def.publishLeadDays + def.transitMaxDays));
  const sailWindowEnd = addDays(eventDate, -(def.publishLeadDays + def.transitMinDays));
  const daysUntilEvent = daysBetween(now, eventDate);

  let status: CampaignOccurrence["status"] = "planned";

  if (now >= publishDate && now <= eventDate) {
    status = "on-sale";
  } else if (now >= addDays(publishDate, -10) && now < publishDate) {
    status = "publish-soon";
  } else if (now >= buyDate && now < publishDate) {
    status = "embark-soon";
  } else if (now >= addDays(buyDate, -10) && now < buyDate) {
    status = "buy-now";
  }

  return {
    ...def,
    eventDate,
    buyDate,
    publishDate,
    sailWindowStart,
    sailWindowEnd,
    status,
    daysUntilEvent,
  };
}

export function getYearRoundAgenda(reference = new Date()) {
  return CAMPAIGNS.map((campaign) => getNextOccurrence(campaign, reference)).sort(
    (a, b) => a.eventDate.getTime() - b.eventDate.getTime()
  );
}

export function formatDateEs(date: Date) {
  return new Intl.DateTimeFormat("es-AR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function formatMoneyAr(value: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}
