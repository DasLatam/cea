export type GuideSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideContent = {
  eyebrow: string;
  title: string;
  summary: string;
  sections: GuideSection[];
  related: Array<{ href: string; label: string }>;
};

export const featuredAnalysis = [
  {
    slug: "kit-para-yoga",
    title: "Kit para yoga",
    verdict: "Demanda estable, ticket amable y logística razonable si el kit no incluye piezas pesadas.",
    bullets: ["Validar composición real del kit y diferenciación.", "Cuidar percepción de marca genérica y calidad textil.", "Muy sensible a fotos, bundle y reputación."],
  },
  {
    slug: "organizador-de-cocina",
    title: "Organizadores de cocina",
    verdict: "Buena categoría para volumen, pero con presión competitiva muy alta y necesidad de catálogo claro.",
    bullets: ["Competencia fuerte en precio y packs.", "Funciona mejor con variantes bien estructuradas.", "El margen se erosiona rápido por comisiones y devoluciones."],
  },
  {
    slug: "camas-para-mascotas",
    title: "Camas para mascotas",
    verdict: "Interesante para marca propia y repetición, pero hay que vigilar volumen, peso y costos de envío.",
    bullets: ["El tamaño cambia totalmente la ecuación logística.", "La percepción de calidad depende mucho de las fotos.", "Sirve para bundles con mantas o juguetes ligeros."],
  },
];

export const categoryCards = [
  {
    href: "/categorias/fitness",
    title: "Fitness",
    text: "Accesorios con tickets medios, alta sensibilidad a reseñas y bundles con diferenciación visual.",
  },
  {
    href: "/categorias/hogar",
    title: "Hogar",
    text: "Gran volumen y mucha búsqueda, pero castiga fuerte peso, fragilidad y devoluciones.",
  },
  {
    href: "/categorias/mascotas",
    title: "Mascotas",
    text: "Buena elasticidad de marca propia, repetición y contenido visual, con cuidado en talles y materiales.",
  },
  {
    href: "/categorias/belleza",
    title: "Belleza",
    text: "Alto potencial, pero con foco extremo en compliance, reseñas y riesgo regulatorio.",
  },
];

export const guides = {
  validarProducto: {
    eyebrow: "Guía operativa",
    title: "Cómo validar un producto para Mercado Libre Argentina",
    summary:
      "La validación no debería empezar por el proveedor ni por una intuición. Primero hay que leer el mercado local: cuántos vendedores compiten, qué precio realmente acepta el comprador, qué tan concentradas están las ventas y qué fricciones logísticas o marcarias aparecen antes de invertir capital.",
    sections: [
      {
        title: "1. Confirmar demanda real",
        paragraphs: [
          "La demanda no es sólo volumen de publicaciones. Conviene mirar ventas visibles, densidad de reseñas, recurrencia de la misma propuesta y dispersión entre resultados. Un mercado con pocas publicaciones y baja evidencia de ventas puede parecer desocupado, pero también puede indicar falta de tracción.",
          "En DAS LATAM CEA la lectura correcta combina cantidad de resultados, vendidos relativos, score promedio y alertas. La foto que importa es la mezcla entre intención del comprador y capacidad real de convertir esa intención en ventas sostenidas.",
        ],
        bullets: [
          "Buscar términos principales y variantes semánticas.",
          "Comparar productos líderes contra medianos, no sólo el primer resultado.",
          "Distinguir demanda estacional de demanda estructural.",
        ],
      },
      {
        title: "2. Medir presión competitiva",
        paragraphs: [
          "Una categoría puede vender mucho y aun así ser mala para entrar. Cuando la competencia se concentra en pocos vendedores con reputación, catálogo amplio, fullfilment y miles de reseñas, el costo de entrada sube demasiado.",
          "La presión competitiva también se expresa en guerra de precios, bundles agresivos y títulos extremadamente parecidos. Cuanto menor sea la diferenciación visual o funcional, más difícil resulta defender margen.",
        ],
        bullets: [
          "Analizar cuántos vendedores dominan la primera página.",
          "Revisar si compiten por precio o por propuesta de valor.",
          "Detectar bundles o variantes que eleven ticket sin subir demasiado el costo.",
        ],
      },
      {
        title: "3. Revisar fricción operativa",
        paragraphs: [
          "Peso, volumen, fragilidad, compatibilidad, armado, postventa y devoluciones definen si una venta rentable en pantalla sigue siendo rentable después de operar. Muchos productos mueren ahí.",
          "La validación correcta no termina en la búsqueda. Hay que proyectar comisiones, empaque, costo financiero, rotación, capital inmovilizado y tasa probable de reclamos.",
        ],
        bullets: [
          "Marcar productos pesados o frágiles antes de cotizar proveedor.",
          "Evitar categorías donde una devolución destruya el margen.",
          "Priorizar productos fáciles de explicar, empacar y reponer.",
        ],
      },
    ],
    related: [
      { href: "/metodologia", label: "Ver metodología de scoring" },
      { href: "/guias/margen-real", label: "Calcular margen real" },
      { href: "/herramientas", label: "Ir a la herramienta" },
    ],
  } satisfies GuideContent,
  margenReal: {
    eyebrow: "Costos y márgenes",
    title: "Cómo calcular margen real al vender en Mercado Libre Argentina",
    summary:
      "El margen que importa no es la diferencia entre precio de venta y costo del proveedor. El margen real surge después de comisiones, logística, packaging, publicidad, impuestos, financiación, devoluciones y capital inmovilizado.",
    sections: [
      {
        title: "1. Separar margen bruto de margen operado",
        paragraphs: [
          "El margen bruto es apenas un punto de partida. En e-commerce la utilidad se define en la operación. Si el producto necesita empaque especial, genera reclamos o gira lento, la foto cambia por completo.",
          "Una buena práctica es construir tres escenarios: conservador, base y agresivo. Eso evita comprar stock apoyado en un margen teórico que no resiste la práctica.",
        ],
        bullets: [
          "Costo de producto puesto en depósito.",
          "Comisión y cargos de la plataforma.",
          "Costo de preparación, despacho y absorciones comerciales.",
        ],
      },
      {
        title: "2. Incluir costos argentinos reales",
        paragraphs: [
          "En Argentina el costo financiero y tributario distorsiona mucho más rápido que en otros mercados. El monotributo puede servir en etapas tempranas, pero tiene límites y no reemplaza una lectura completa de caja y crecimiento.",
          "También conviene estimar cuánto capital queda inmovilizado en reposición y cuánto tarda en recuperarse cada peso invertido.",
        ],
        bullets: [
          "Medir días de rotación y ciclo de reposición.",
          "Agregar porcentaje de devoluciones probables.",
          "Modelar promociones y descuentos sin destruir el piso de rentabilidad.",
        ],
      },
      {
        title: "3. Mirar margen por unidad y margen por mes",
        paragraphs: [
          "Un producto con utilidad unitaria modesta puede ser excelente si rota rápido, consume poco capital y casi no genera problemas operativos. El inverso también es cierto: productos de margen teórico alto pueden ser un mal negocio si venden lento o generan muchas incidencias.",
        ],
      },
    ],
    related: [
      { href: "/guias/monotributo-mercado-libre", label: "Ver guía de monotributo" },
      { href: "/guias/peso-y-fragilidad", label: "Riesgo logístico" },
      { href: "/herramientas", label: "Analizar una búsqueda" },
    ],
  } satisfies GuideContent,
  importarChina: {
    eyebrow: "Abastecimiento",
    title: "Errores comunes al importar desde China para vender en Argentina",
    summary:
      "Importar no soluciona por sí mismo una mala validación local. Antes de mirar Alibaba, conviene confirmar que el producto soporta la demanda, la competencia y el costo operativo del mercado argentino.",
    sections: [
      {
        title: "1. Comprar antes de validar",
        paragraphs: [
          "El error más caro es enamorarse del costo FOB y olvidar la realidad local. Un producto puede llegar barato y seguir siendo inviable si la categoría está saturada o si la logística local lo castiga.",
        ],
      },
      {
        title: "2. Subestimar calidad y consistencia",
        paragraphs: [
          "En categorías sensibles, una muestra buena no garantiza lote estable. La percepción del usuario final en Mercado Libre es inmediata: mala terminación, material flojo o packaging pobre se traducen en reclamos y reseñas negativas.",
        ],
      },
      {
        title: "3. No contemplar compliance ni marca",
        paragraphs: [
          "Ciertos productos requieren validaciones, rotulados o cuidados especiales. Otros exponen a riesgo marcario si el diseño, naming o packaging se parecen demasiado a marcas existentes.",
        ],
      },
    ],
    related: [
      { href: "/guias/validar-producto", label: "Validar antes de importar" },
      { href: "/metodologia", label: "Entender el score" },
      { href: "/categorias/hogar", label: "Categoría hogar" },
    ],
  } satisfies GuideContent,
  pesoFragilidad: {
    eyebrow: "Riesgo logístico",
    title: "Cuándo un producto deja de convenir por peso, volumen o fragilidad",
    summary:
      "Muchos productos prometen buen margen en la pantalla y se destruyen cuando entran en juego el despacho, el embalaje y el costo de una devolución. El riesgo logístico no es un detalle: es parte central de la validación.",
    sections: [
      {
        title: "1. Peso y volumen cambian el modelo",
        paragraphs: [
          "No importa sólo el peso físico. Importa cuánto cuesta mover, almacenar, embalar y eventualmente devolver ese producto. A mayor tamaño, menor elasticidad comercial y mayor presión sobre cada venta.",
        ],
      },
      {
        title: "2. Fragilidad castiga dos veces",
        paragraphs: [
          "Los productos frágiles suelen exigir mejor embalaje y además presentan más riesgo de rotura, reclamo o mala reseña. En muchos casos el problema no es la venta, sino el costo del error.",
        ],
      },
      {
        title: "3. Buscar productos operables",
        paragraphs: [
          "Para construir un negocio replicable conviene priorizar productos fáciles de almacenar, embalar, explicar y despachar. La operación simple suele ganar a la promesa de un ticket alto con demasiadas incidencias.",
        ],
      },
    ],
    related: [
      { href: "/guias/margen-real", label: "Volver a margen real" },
      { href: "/categorias/mascotas", label: "Ver mascotas" },
      { href: "/herramientas", label: "Analizar riesgo en la herramienta" },
    ],
  } satisfies GuideContent,
  monotributo: {
    eyebrow: "Contexto argentino",
    title: "Monotributo y Mercado Libre: qué mirar antes de escalar",
    summary:
      "El monotributo puede ser una etapa de inicio útil, pero no reemplaza una lectura seria de límites de facturación, estructura de costos, flujo de caja y proyección comercial.",
    sections: [
      {
        title: "1. El régimen no define por sí solo la viabilidad",
        paragraphs: [
          "Muchos vendedores miran primero el encuadre fiscal y después el producto. El orden debería ser inverso: primero se valida si hay negocio; luego se estructura la forma de operarlo correctamente.",
        ],
      },
      {
        title: "2. Pensar en techo y transición",
        paragraphs: [
          "Si el producto funciona, la pregunta correcta no es sólo si hoy entra en monotributo, sino cuánto tiempo seguirá siendo sostenible bajo ese esquema y qué transición requerirá cuando crezca.",
        ],
      },
      {
        title: "3. Separar análisis comercial de asesoramiento fiscal",
        paragraphs: [
          "DAS LATAM CEA aporta una lectura comercial y operativa. La definición impositiva concreta siempre conviene revisarla con un contador según tu actividad, escala y estructura societaria.",
        ],
      },
    ],
    related: [
      { href: "/guias/margen-real", label: "Calcular margen real" },
      { href: "/como-funciona", label: "Cómo funciona la plataforma" },
      { href: "/contacto", label: "Hablar con DAS LATAM" },
    ],
  } satisfies GuideContent,
};
