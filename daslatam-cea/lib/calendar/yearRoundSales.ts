export type CoreCampaign = {
  key: string;
  name: string;
  anchorLabel: string;
  saleDate: Date;
  niches: string[];
  risk: "Bajo" | "Medio" | "Alto";
  note: string;
};

export type BonusTrack = {
  key: string;
  name: string;
  timingLabel: string;
  description: string;
  niches: string[];
  note: string;
  milestones: Milestone[];
  fixture?: string[];
  calendarFilename: string;
  calendarIcs: string;
};

export type Milestone = {
  label: string;
  date: Date;
  description: string;
};

export type F1Round = {
  round: number;
  location: string;
  startDate: Date;
  endDate: Date;
};

function atMidday(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
}

function addDays(date: Date, amount: number) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + amount);
  return atMidday(copy);
}

function nthWeekdayOfMonth(year: number, monthIndex: number, weekday: number, nth: number) {
  const first = new Date(year, monthIndex, 1);
  const diff = (7 + weekday - first.getDay()) % 7;
  return atMidday(new Date(year, monthIndex, 1 + diff + (nth - 1) * 7));
}

function easterSunday(year: number) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return atMidday(new Date(year, month - 1, day));
}

function normalizeDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function formatDateEs(date: Date) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function formatShort(date: Date) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "short",
  }).format(date);
}

export function buildCoreCampaigns(year: number): CoreCampaign[] {
  return [
    {
      key: "reyes",
      name: "Reyes",
      anchorLabel: "06 de enero",
      saleDate: atMidday(new Date(year, 0, 6)),
      niches: ["juguetes", "sets regalo", "accesorios infantiles"],
      risk: "Bajo",
      note: "Campaña rápida y directa. Funciona muy bien con kits listos para regalar y ticket medio accesible.",
    },
    {
      key: "enamorados",
      name: "Día de los Enamorados",
      anchorLabel: "14 de febrero",
      saleDate: atMidday(new Date(year, 1, 14)),
      niches: ["regalos románticos", "decoración", "sets premium"],
      risk: "Bajo",
      note: "Ideal para productos visuales, packs listos para entrega y artículos de impulso con presentación cuidada.",
    },
    {
      key: "mujer",
      name: "Día de la Mujer",
      anchorLabel: "08 de marzo",
      saleDate: atMidday(new Date(year, 2, 8)),
      niches: ["beauty", "bienestar", "accesorios personales"],
      risk: "Medio",
      note: "Conviene trabajar propuestas de regalo sobrias, útiles y de buena presentación. Evitá caer en categorías demasiado obvias.",
    },
    {
      key: "vuelta-al-cole",
      name: "Vuelta al cole",
      anchorLabel: "20 de febrero",
      saleDate: atMidday(new Date(year, 1, 20)),
      niches: ["organización", "mochilas", "botellas", "escritorio"],
      risk: "Bajo",
      note: "Muy buena categoría para repetir. También puede servir como puerta de entrada para productos familiares y de rutina.",
    },
    {
      key: "pascuas",
      name: "Pascuas",
      anchorLabel: "Pascua",
      saleDate: easterSunday(year),
      niches: ["cestas", "decoración", "regalo infantil", "repostería"],
      risk: "Medio",
      note: "No es sólo chocolate. Sirven accesorios de mesa, moldes, decoración temática y productos para armar regalos.",
    },
    {
      key: "padre",
      name: "Día del Padre",
      anchorLabel: "Tercer domingo de junio",
      saleDate: nthWeekdayOfMonth(year, 5, 0, 3),
      niches: ["herramientas livianas", "auto", "gadgets", "regalo práctico"],
      risk: "Bajo",
      note: "Campaña muy fuerte para artículos útiles, hobby, auto y oficina. Funciona mejor si la propuesta es simple y resolutiva.",
    },
    {
      key: "invierno",
      name: "Invierno y abrigo",
      anchorLabel: "21 de junio",
      saleDate: atMidday(new Date(year, 5, 21)),
      niches: ["guantes", "gorros", "termos", "abrigo", "hogar cálido"],
      risk: "Bajo",
      note: "No depende de un regalo puntual. Es una ventana estacional para rotar productos funcionales y de necesidad concreta.",
    },
    {
      key: "amigo",
      name: "Día del Amigo",
      anchorLabel: "20 de julio",
      saleDate: atMidday(new Date(year, 6, 20)),
      niches: ["sets divertidos", "bar", "gaming", "regalo accesible"],
      risk: "Bajo",
      note: "Campaña de volumen. Ideal para productos simples, compartibles y con buena foto principal.",
    },
    {
      key: "abuelos",
      name: "Día de los Abuelos",
      anchorLabel: "26 de julio",
      saleDate: atMidday(new Date(year, 6, 26)),
      niches: ["bienestar", "hogar", "descanso", "regalo emocional"],
      risk: "Medio",
      note: "Nicho menos saturado y muy interesante para regalos cuidados, cómodos y de uso cotidiano.",
    },
    {
      key: "nino",
      name: "Día del Niño",
      anchorLabel: "Tercer domingo de agosto",
      saleDate: nthWeekdayOfMonth(year, 7, 0, 3),
      niches: ["juguetes", "manualidades", "aire libre", "aprendizaje"],
      risk: "Medio",
      note: "Gran volumen, pero también más competencia. Conviene entrar con enfoque de subnicho o pack temático.",
    },
    {
      key: "primavera",
      name: "Primavera",
      anchorLabel: "21 de septiembre",
      saleDate: atMidday(new Date(year, 8, 21)),
      niches: ["outdoor", "decoración", "fitness", "jardín"],
      risk: "Medio",
      note: "Buena campaña para cambio de temporada, color, renovación del hogar y productos de actividad al aire libre.",
    },
    {
      key: "madre",
      name: "Día de la Madre",
      anchorLabel: "Tercer domingo de octubre",
      saleDate: nthWeekdayOfMonth(year, 9, 0, 3),
      niches: ["beauty", "decoración", "organización", "regalo premium"],
      risk: "Bajo",
      note: "Una de las mejores fechas del año. Conviene llegar con catálogo limpio, stock ordenado y opciones de ticket medio y alto.",
    },
    {
      key: "halloween",
      name: "Halloween",
      anchorLabel: "31 de octubre",
      saleDate: atMidday(new Date(year, 9, 31)),
      niches: ["fiesta", "decoración", "disfraces", "cotillón"],
      risk: "Medio",
      note: "Todavía es una fecha de nicho, pero con crecimiento. Funciona mejor con productos vistosos y publicación anticipada.",
    },
    {
      key: "navidad",
      name: "Navidad",
      anchorLabel: "25 de diciembre",
      saleDate: atMidday(new Date(year, 11, 25)),
      niches: ["regalo familiar", "decoración", "hogar", "niños"],
      risk: "Bajo",
      note: "Campaña central del año. Amplia, escalable y muy apta para armar combos, regalos y propuestas visuales.",
    },
    {
      key: "verano",
      name: "Verano, pileta y vacaciones",
      anchorLabel: "15 de diciembre",
      saleDate: atMidday(new Date(year, 11, 15)),
      niches: ["pileta", "playa", "viaje", "organización", "aire libre"],
      risk: "Bajo",
      note: "Temporada excelente para accesorios prácticos, outdoor y productos de descanso y traslado.",
    },
  ];
}

export function buildMilestones(campaign: CoreCampaign): Milestone[] {
  return [
    {
      label: "Comprar en China",
      date: addDays(campaign.saleDate, -90),
      description:
        "Inicio de compra sugerido para negociar precio, definir proveedor y llegar con margen para importación de bajo costo.",
    },
    {
      label: "Ventana de embarque marítimo",
      date: addDays(campaign.saleDate, -75),
      description:
        "Momento sugerido para despachar carga marítima y sostener costos más competitivos frente a urgencias.",
    },
    {
      label: "Stock disponible en Argentina",
      date: addDays(campaign.saleDate, -45),
      description:
        "Ventana recomendada para controlar recepción, rotulado, empaque y fotos finales del producto.",
    },
    {
      label: "Publicar en Mercado Libre",
      date: addDays(campaign.saleDate, -30),
      description:
        "Publicación sugerida para llegar al pico de búsqueda con tiempo, reputación y visibilidad.",
    },
    {
      label: "Fecha comercial objetivo",
      date: campaign.saleDate,
      description: "Momento comercial central de la campaña.",
    },
  ];
}

export function getPurchaseDate(campaign: CoreCampaign) {
  return buildMilestones(campaign)[0].date;
}

export function getNextPurchaseDate(campaign: CoreCampaign, today = new Date()) {
  const currentYearPurchase = getPurchaseDate(campaign);
  if (normalizeDay(currentYearPurchase) >= normalizeDay(today)) {
    return currentYearPurchase;
  }

  const nextYearCampaign = buildCoreCampaigns(campaign.saleDate.getFullYear() + 1).find(
    (item) => item.key === campaign.key
  );

  return nextYearCampaign ? getPurchaseDate(nextYearCampaign) : currentYearPurchase;
}

export function sortCampaignsByUpcomingPurchase(campaigns: CoreCampaign[], today = new Date()) {
  return [...campaigns].sort((a, b) => {
    const aDate = getNextPurchaseDate(a, today).getTime();
    const bDate = getNextPurchaseDate(b, today).getTime();
    if (aDate === bDate) {
      return a.saleDate.getTime() - b.saleDate.getTime();
    }
    return aDate - bDate;
  });
}

function toUtcStamp(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(
    date.getUTCHours()
  )}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`;
}

function icsEscape(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

export function buildCampaignCalendarIcs(campaign: CoreCampaign) {
  const milestones = buildMilestones(campaign);
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//CEA//Vender todo el Año//ES"];

  milestones.forEach((item, index) => {
    const start = item.date;
    const end = addDays(item.date, 1);
    lines.push(
      "BEGIN:VEVENT",
      `UID:${campaign.key}-${index}@cea`,
      `DTSTAMP:${toUtcStamp(new Date())}`,
      `DTSTART:${toUtcStamp(start)}`,
      `DTEND:${toUtcStamp(end)}`,
      `SUMMARY:${icsEscape(`${campaign.name} · ${item.label}`)}`,
      `DESCRIPTION:${icsEscape(item.description)}`,
      "END:VEVENT"
    );
  });

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function buildAnnualCalendarIcs(year: number) {
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//CEA//Agenda del Exito//ES"];

  buildCoreCampaigns(year).forEach((campaign) => {
    buildMilestones(campaign).forEach((item, index) => {
      const start = item.date;
      const end = addDays(item.date, 1);
      lines.push(
        "BEGIN:VEVENT",
        `UID:${campaign.key}-${index}-${year}@cea`,
        `DTSTAMP:${toUtcStamp(new Date())}`,
        `DTSTART:${toUtcStamp(start)}`,
        `DTEND:${toUtcStamp(end)}`,
        `SUMMARY:${icsEscape(`${campaign.name} · ${item.label}`)}`,
        `DESCRIPTION:${icsEscape(item.description)}`,
        "END:VEVENT"
      );
    });
  });

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function buildF1Rounds2026(): F1Round[] {
  return [
    { round: 1, location: "Australia", startDate: atMidday(new Date(2026, 2, 6)), endDate: atMidday(new Date(2026, 2, 8)) },
    { round: 2, location: "China", startDate: atMidday(new Date(2026, 2, 13)), endDate: atMidday(new Date(2026, 2, 15)) },
    { round: 3, location: "Japón", startDate: atMidday(new Date(2026, 2, 27)), endDate: atMidday(new Date(2026, 2, 29)) },
    { round: 4, location: "Miami", startDate: atMidday(new Date(2026, 4, 1)), endDate: atMidday(new Date(2026, 4, 3)) },
    { round: 5, location: "Canadá", startDate: atMidday(new Date(2026, 4, 22)), endDate: atMidday(new Date(2026, 4, 24)) },
    { round: 6, location: "Mónaco", startDate: atMidday(new Date(2026, 5, 5)), endDate: atMidday(new Date(2026, 5, 7)) },
    { round: 7, location: "Barcelona-Catalunya", startDate: atMidday(new Date(2026, 5, 12)), endDate: atMidday(new Date(2026, 5, 14)) },
    { round: 8, location: "Austria", startDate: atMidday(new Date(2026, 5, 26)), endDate: atMidday(new Date(2026, 5, 28)) },
    { round: 9, location: "Gran Bretaña", startDate: atMidday(new Date(2026, 6, 3)), endDate: atMidday(new Date(2026, 6, 5)) },
    { round: 10, location: "Bélgica", startDate: atMidday(new Date(2026, 6, 17)), endDate: atMidday(new Date(2026, 6, 19)) },
    { round: 11, location: "Hungría", startDate: atMidday(new Date(2026, 6, 24)), endDate: atMidday(new Date(2026, 6, 26)) },
    { round: 12, location: "Países Bajos", startDate: atMidday(new Date(2026, 7, 21)), endDate: atMidday(new Date(2026, 7, 23)) },
    { round: 13, location: "Italia", startDate: atMidday(new Date(2026, 8, 4)), endDate: atMidday(new Date(2026, 8, 6)) },
    { round: 14, location: "España", startDate: atMidday(new Date(2026, 8, 11)), endDate: atMidday(new Date(2026, 8, 13)) },
    { round: 15, location: "Azerbaiyán", startDate: atMidday(new Date(2026, 8, 24)), endDate: atMidday(new Date(2026, 8, 26)) },
    { round: 16, location: "Singapur", startDate: atMidday(new Date(2026, 9, 9)), endDate: atMidday(new Date(2026, 9, 11)) },
    { round: 17, location: "Estados Unidos", startDate: atMidday(new Date(2026, 9, 23)), endDate: atMidday(new Date(2026, 9, 25)) },
    { round: 18, location: "México", startDate: atMidday(new Date(2026, 9, 30)), endDate: atMidday(new Date(2026, 10, 1)) },
    { round: 19, location: "Brasil", startDate: atMidday(new Date(2026, 10, 6)), endDate: atMidday(new Date(2026, 10, 8)) },
    { round: 20, location: "Las Vegas", startDate: atMidday(new Date(2026, 10, 19)), endDate: atMidday(new Date(2026, 10, 21)) },
    { round: 21, location: "Qatar", startDate: atMidday(new Date(2026, 10, 27)), endDate: atMidday(new Date(2026, 10, 29)) },
    { round: 22, location: "Abu Dhabi", startDate: atMidday(new Date(2026, 11, 4)), endDate: atMidday(new Date(2026, 11, 6)) },
  ];
}

function buildBonusTrackIcs(key: string, title: string, milestones: Milestone[]) {
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", `PRODID:-//CEA//${title}//ES`];

  milestones.forEach((item, index) => {
    const start = item.date;
    const end = addDays(item.date, 1);
    lines.push(
      "BEGIN:VEVENT",
      `UID:${key}-${index}@cea`,
      `DTSTAMP:${toUtcStamp(new Date())}`,
      `DTSTART:${toUtcStamp(start)}`,
      `DTEND:${toUtcStamp(end)}`,
      `SUMMARY:${icsEscape(`${title} · ${item.label}`)}`,
      `DESCRIPTION:${icsEscape(item.description)}`,
      "END:VEVENT"
    );
  });

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

function buildF1SeasonIcs() {
  const rounds = buildF1Rounds2026();
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//CEA//F1 2026//ES"];

  rounds.forEach((round) => {
    const reminderDate = addDays(round.startDate, -10);
    lines.push(
      "BEGIN:VEVENT",
      `UID:f1-${round.round}@cea`,
      `DTSTAMP:${toUtcStamp(new Date())}`,
      `DTSTART:${toUtcStamp(reminderDate)}`,
      `DTEND:${toUtcStamp(addDays(reminderDate, 1))}`,
      `SUMMARY:${icsEscape(`F1 · Preparar campaña para ${round.location}`)}`,
      `DESCRIPTION:${icsEscape(`Round ${round.round}. Ideal para activar publicaciones, creatividades y stock temático antes del fin de semana de carrera.`)}`,
      "END:VEVENT"
    );
  });

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function buildBonusTracks(year: number, today = new Date()): BonusTrack[] {
  const worldCupStart = atMidday(new Date(year, 5, 11));
  const argentinaDebut = atMidday(new Date(year, 5, 16));
  const worldCupMilestones: Milestone[] = [
    {
      label: "Cierre de compra sugerido",
      date: addDays(worldCupStart, -90),
      description:
        "Punto de partida recomendado para definir proveedor, cerrar costo y no depender de flete urgente.",
    },
    {
      label: "Salida marítima sugerida",
      date: addDays(worldCupStart, -56),
      description:
        "Ventana práctica para que la mercadería viaje por mar y llegue a tiempo con mejor estructura de costos.",
    },
    {
      label: "Stock controlado en Argentina",
      date: addDays(worldCupStart, -30),
      description:
        "Momento sugerido para revisar recepción, packaging, fotos y preparación comercial final.",
    },
    {
      label: "Publicado en ML antes del inicio",
      date: addDays(worldCupStart, -15),
      description:
        "Fecha límite recomendada para estar visible antes de que arranque el torneo.",
    },
    {
      label: "Publicado en ML antes del debut argentino",
      date: addDays(argentinaDebut, -15),
      description:
        "Segunda fecha límite táctica para aprovechar el empuje de la selección argentina.",
    },
    {
      label: "Comienza el Mundial",
      date: worldCupStart,
      description: "Inicio oficial del torneo.",
    },
    {
      label: "Debut de Argentina",
      date: argentinaDebut,
      description: "Límite emocional de mayor tracción para fanwear, cotillón y accesorios temáticos.",
    },
  ];

  const f1Rounds = buildF1Rounds2026();
  const upcomingF1Rounds = f1Rounds
    .filter((round) => normalizeDay(round.startDate) >= normalizeDay(today))
    .slice(0, 6);

  const colapintoMilestones: Milestone[] = upcomingF1Rounds.map((round) => ({
    label: `Activar campaña · ${round.location}`,
    date: addDays(round.startDate, -10),
    description:
      `Recordatorio táctico para llegar con publicaciones, creatividades y stock temático antes del Round ${round.round}.`,
  }));

  return [
    {
      key: "mundial-2026",
      name: `Bonus track ${year}: Mundial de Fútbol`,
      timingLabel: `11 de junio al 19 de julio de ${year}`,
      description:
        "Puede abrir ventanas en cotillón, fanwear, mates, vasos, banderas, decoración para reuniones y productos de consumo grupal.",
      niches: ["cotillón", "fanwear", "banderas", "reuniones", "asado y meetups"],
      note:
        "Acá hay dos fechas límite prácticas: llegar visible antes del 11 de junio y no perder la ola del debut argentino del 16 de junio.",
      milestones: worldCupMilestones,
      calendarFilename: `mundial-${year}.ics`,
      calendarIcs: buildBonusTrackIcs("mundial", `Mundial ${year}`, worldCupMilestones),
      fixture: [
        `Inicio del torneo · ${formatDateEs(worldCupStart)}`,
        `Debut de Argentina · ${formatDateEs(argentinaDebut)}`,
      ],
    },
    {
      key: "colapinto",
      name: `Bonus track ${year}: Colapinto / Fórmula 1`,
      timingLabel: `Seguimiento táctico durante toda la temporada ${year}`,
      description:
        "Oportunidad temática de reacción rápida para fanwear, stickers, gorras, escritorio, regalos de nicho y artículos de comunidad.",
      niches: ["fanwear", "stickers", "gorras", "escritorio", "regalo temático"],
      note:
        "No es una campaña fija del año: es una agenda de reacción sobre el fixture de la F1 y sobre los fines de semana con más conversación.",
      milestones: colapintoMilestones,
      calendarFilename: `colapinto-f1-${year}.ics`,
      calendarIcs: buildF1SeasonIcs(),
      fixture: upcomingF1Rounds.map(
        (round) => `Round ${round.round} · ${round.location} · ${formatDateEs(round.startDate)}`
      ),
    },
  ];
}
