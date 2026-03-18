import type { OpportunityEvent } from "@/types/app";

function nthWeekdayOfMonth(year: number, monthIndex: number, weekday: number, occurrence: number) {
  const first = new Date(Date.UTC(year, monthIndex, 1));
  const offset = (7 + weekday - first.getUTCDay()) % 7;
  return new Date(Date.UTC(year, monthIndex, 1 + offset + (occurrence - 1) * 7));
}

function iso(date: Date) {
  return date.toISOString().slice(0, 10);
}

function subtractDays(date: Date, days: number) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() - days);
  return next;
}

function fixedDate(year: number, monthIndex: number, day: number) {
  return new Date(Date.UTC(year, monthIndex, day));
}

export function buildOpportunityCalendar(year = new Date().getUTCFullYear()): OpportunityEvent[] {
  const events: OpportunityEvent[] = [
    {
      slug: "san-valentin",
      title: "San Valentín",
      category: "comercial",
      eventDate: iso(fixedDate(year, 1, 14)),
      buyDate: iso(subtractDays(fixedDate(year, 1, 14), 60)),
      signal: "commercial",
      rationale: "Regalos livianos, sets, beauty, gadgets, tazas, flores artificiales y bundles de pareja.",
      examples: ["joyería económica", "peluches", "velas", "gift boxes"],
    },
    {
      slug: "dia-del-padre",
      title: "Día del Padre",
      category: "comercial",
      eventDate: iso(nthWeekdayOfMonth(year, 5, 0, 3)),
      buyDate: iso(subtractDays(nthWeekdayOfMonth(year, 5, 0, 3), 60)),
      signal: "commercial",
      rationale: "Picos para herramientas, indumentaria, gadgets, mates, parrilla y accesorios de auto.",
      examples: ["barbería", "herramientas", "parrilla", "auto"],
    },
    {
      slug: "dia-del-amigo",
      title: "Día del Amigo",
      category: "comercial",
      eventDate: iso(fixedDate(year, 6, 20)),
      buyDate: iso(subtractDays(fixedDate(year, 6, 20), 60)),
      signal: "commercial",
      rationale: "Funciona bien para regalos de ticket medio, juegos, accesorios y combos simples.",
      examples: ["tazas", "juegos", "merch", "accesorios"],
    },
    {
      slug: "dia-del-nino",
      title: "Día del Niño",
      category: "comercial",
      eventDate: iso(nthWeekdayOfMonth(year, 7, 0, 3)),
      buyDate: iso(subtractDays(nthWeekdayOfMonth(year, 7, 0, 3), 60)),
      signal: "commercial",
      rationale: "Ventana fuerte para juguetes, outdoor, didácticos, licencias y bundles infantiles.",
      examples: ["juguetes", "didácticos", "aire libre", "licencias"],
    },
    {
      slug: "halloween",
      title: "Halloween",
      category: "estacional",
      eventDate: iso(fixedDate(year, 9, 31)),
      buyDate: iso(subtractDays(fixedDate(year, 9, 31), 60)),
      signal: "seasonal",
      rationale: "Crecen disfraces, decoración liviana, cotillón, maquillaje y led temático.",
      examples: ["disfraces", "decoración", "maquillaje", "luces"],
    },
    {
      slug: "dia-de-la-madre",
      title: "Día de la Madre",
      category: "comercial",
      eventDate: iso(nthWeekdayOfMonth(year, 9, 0, 3)),
      buyDate: iso(subtractDays(nthWeekdayOfMonth(year, 9, 0, 3), 60)),
      signal: "commercial",
      rationale: "Una de las ventanas más grandes del año para hogar, deco, beauty, indumentaria y wellness.",
      examples: ["deco", "beauty", "wellness", "regalo"],
    },
    {
      slug: "navidad",
      title: "Navidad",
      category: "estacional",
      eventDate: iso(fixedDate(year, 11, 25)),
      buyDate: iso(subtractDays(fixedDate(year, 11, 25), 60)),
      signal: "seasonal",
      rationale: "Máxima ventana para decoración, juguetes, tech, regalos, packs y bundles navideños.",
      examples: ["árbol", "luces", "regalos", "tech"],
    },
    {
      slug: "reyes",
      title: "Reyes",
      category: "estacional",
      eventDate: iso(fixedDate(year + 1, 0, 6)),
      buyDate: iso(subtractDays(fixedDate(year + 1, 0, 6), 60)),
      signal: "seasonal",
      rationale: "Extiende tracción de juguetes y regalos infantiles después de Navidad.",
      examples: ["juguetes", "niños", "regalos"],
    },
    {
      slug: "mundial-2026-final",
      title: "Final del Mundial 2026",
      category: "deportes",
      eventDate: "2026-07-19",
      buyDate: iso(subtractDays(new Date(Date.UTC(2026, 6, 19)), 60)),
      signal: "sports",
      rationale: "Empuja camisetas, decoración, televisores, snacks, banderas y artículos de viewing party.",
      examples: ["banderas", "camisetas", "televisores", "snacks"],
    },
    {
      slug: "f1-colapinto-campana",
      title: "Calendario F1 / oportunidad Colapinto",
      category: "deportes",
      eventDate: "2026-12-06",
      buyDate: iso(subtractDays(new Date(Date.UTC(2026, 11, 6)), 60)),
      signal: "sports",
      rationale: "Sirve para campañas de merch, posters, accesorios, gorras y gifting ligado a picos del calendario F1.",
      examples: ["gorras", "posters", "merch", "accesorios"],
    },
  ];

  return events.sort((a, b) => a.buyDate.localeCompare(b.buyDate));
}

export function enrichOpportunityCalendar(items: OpportunityEvent[], referenceDate = new Date()) {
  const today = new Date(Date.UTC(referenceDate.getUTCFullYear(), referenceDate.getUTCMonth(), referenceDate.getUTCDate()));

  return items.map((item) => {
    const buyDate = new Date(`${item.buyDate}T00:00:00Z`);
    const eventDate = new Date(`${item.eventDate}T00:00:00Z`);
    const daysToBuy = Math.round((buyDate.getTime() - today.getTime()) / 86400000);
    const daysToEvent = Math.round((eventDate.getTime() - today.getTime()) / 86400000);

    const status = daysToBuy > 0 ? "future" : daysToEvent >= 0 ? "open" : "past";

    return {
      ...item,
      daysToBuy,
      daysToEvent,
      status,
    };
  });
}
