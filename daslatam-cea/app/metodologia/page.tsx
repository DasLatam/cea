import type { CSSProperties } from "react";

export const metadata = {
  title: "Metodología",
  description:
    "Cómo validar productos, registrar señales, revisar proveedores y tomar decisiones comerciales con una metodología práctica para vender mejor en Argentina.",
  keywords: [
    "metodología ecommerce argentina",
    "validar productos mercado libre",
    "planilla de análisis de productos",
    "alibaba proveedores verified",
    "google trends argentina ecommerce",
  ],
  openGraph: {
    title: "Metodología · CEA",
    description:
      "Cómo validar productos, registrar señales, revisar proveedores y tomar decisiones comerciales con una metodología práctica para vender mejor en Argentina.",
    url: "/metodologia",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metodología · CEA",
    description:
      "Cómo validar productos, registrar señales, revisar proveedores y tomar decisiones comerciales con una metodología práctica para vender mejor en Argentina.",
  },
};


const principleCards = [
  {
    title: "Registrar antes de entusiasmarse",
    text:
      "La primera defensa contra el autoengaño no es una corazonada: es una planilla donde quede escrito qué viste, dónde lo viste, qué costos estimaste y por qué ese producto te pareció interesante.",
  },
  {
    title: "Cruzar señales, no depender de una sola",
    text:
      "Una tendencia aislada no alcanza. Conviene mirar demanda potencial, competencia visible, presión publicitaria, proveedor, logística y margen antes de comprometer stock.",
  },
  {
    title: "Cerrar todo por escrito",
    text:
      "Cuando una condición importante queda afuera del chat, aumenta el riesgo. Es mejor que precio, embalaje, etiquetado, fotos reales, envío y plazos queden documentados desde el inicio.",
  },
];

const spreadsheetFields = [
  ["Fecha de análisis", "Para saber cuándo fue tomada cada decisión y no mezclar datos viejos con señales nuevas."],
  ["Producto o nicho", "Nombre claro del producto y, si hace falta, una variante concreta."],
  ["Problema que resuelve", "Ayuda a distinguir moda pasajera de necesidad real o compra impulsiva."],
  ["Keyword principal", "La búsqueda exacta que vas a revisar en Mercado Libre, Google, Meta y Alibaba."],
  ["Fuente del hallazgo", "Mercado Libre Tendencias, Google Trends, Meta Ads Library, Alibaba, red social, proveedor o dato propio."],
  ["Señal en Mercado Libre", "Qué viste: crecimiento, deseadas, populares, cantidad de publicaciones, rango de precios y competidores."],
  ["Señal en Google", "Evolución de interés, estacionalidad, regiones y términos relacionados."],
  ["Señal publicitaria", "Quién lo está anunciando, con qué mensaje, desde cuándo y con qué insistencia."],
  ["Proveedor observado", "Nombre, antigüedad, condición Verified, reseñas, calificación y tipo de fábrica o trader."],
  ["Costo del producto", "Valor de compra cotizado por unidad y por cantidad mínima."],
  ["Costo puesto en Argentina", "Producto, flete, embalaje, etiquetado, logística y cualquier costo por unidad que cambie el margen real."],
  ["Precio de venta estimado", "Rango posible en Mercado Libre o en el canal que pienses usar."],
  ["Margen estimado", "Ganancia por unidad y total, con un criterio realista y no optimista."],
  ["Riesgos", "Fragilidad, devoluciones, restricciones, talles, garantías, modas cortas o dependencia de una campaña puntual."],
  ["Decisión", "Seguir, pedir muestra, profundizar, descartar o revisar más adelante."],
];

const steps = [
  {
    title: "1. Anotar la hipótesis comercial",
    text:
      "Antes de buscar más datos, conviene escribir qué producto estás mirando, para quién serviría, qué necesidad cubriría y por qué podría venderse. Esto obliga a pensar con foco y evita cambiar de criterio a mitad del análisis.",
  },
  {
    title: "2. Buscar señales rápidas en Mercado Libre",
    text:
      "En Mercado Libre Tendencias podés ver rápidamente qué búsquedas crecieron, qué búsquedas son más deseadas y qué tendencias aparecen como populares. Es una buena forma de abrir el radar y detectar nichos para analizar con más detalle.",
    href: "https://tendencias.mercadolibre.com.ar/",
    hrefLabel: "Abrir Mercado Libre Tendencias",
  },
  {
    title: "3. Bajar el producto a la realidad del marketplace",
    text:
      "Una vez detectado el nicho, el paso útil no es festejar la idea sino revisar cómo se ofrece hoy en Mercado Libre: cantidad de publicaciones, variedad, nivel de precios, calidad visual, reputación aparente y tipo de competidores. Ahí aparece si todavía hay espacio o si ya está saturado.",
  },
  {
    title: "4. Contrastar el interés con Google Trends",
    text:
      "Google Trends sirve para mirar la evolución del interés en el tiempo, comparar términos, ver regiones y encontrar consultas relacionadas. Es útil para distinguir si el interés es estacional, si viene creciendo o si fue apenas un pico de ruido.",
    href: "https://trends.google.com/explore?geo=AR",
    hrefLabel: "Abrir Google Trends para Argentina",
  },
  {
    title: "5. Revisar presión comercial en Meta",
    text:
      "La Biblioteca de anuncios de Meta permite ver anuncios activos y buscar por palabra clave o anunciante. Para análisis comercial conviene usar el modo de todos los anuncios. Esto ayuda a ver si otros ya están empujando ese producto, cómo lo comunican y qué ángulos de venta repiten.",
    href: "https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=AR&media_type=all",
    hrefLabel: "Abrir Biblioteca de anuncios de Meta",
  },
  {
    title: "6. Validar proveedor y condiciones en Alibaba",
    text:
      "Si el producto va por importación, recién ahí conviene abrir proveedores. La lógica no es pedir precio y listo: hay que mirar si el proveedor está verificado, cuántos años lleva activo, qué reseñas tiene, si responde bien por chat y si acepta dejar por escrito embalaje, etiquetado, envío y alcance exacto del precio.",
    href: "https://www.alibaba.com/",
    hrefLabel: "Abrir Alibaba",
  },
  {
    title: "7. Hacer recién ahí los números",
    text:
      "Cuando la señal comercial parece razonable, recién tiene sentido estimar costo puesto en Argentina, precio de venta, cargos del canal, impuestos, logística y margen real. Un producto puede verse atractivo en búsquedas y aun así ser malo cuando lo pasás por una calculadora seria.",
  },
];

const mlChecks = [
  "Las 20 búsquedas que más crecieron sirven para detectar cambios de interés o fenómenos recientes.",
  "Las 20 búsquedas más deseadas ayudan a ver intención aspiracional o productos muy buscados aunque todavía no sean masivos.",
  "Las 20 tendencias más populares son una señal rápida para abrir categorías y encontrar subnichos.",
  "Después conviene profundizar por categoría para no quedarse sólo con el titular general de la tendencia.",
];

const alibabaChecks = [
  "Hablar siempre por el chat de la plataforma y dejar ahí todas las condiciones importantes. Si algo sale mal, esa conversación ayuda a respaldar el reclamo.",
  "Priorizar proveedores con sello Verified y revisar además antigüedad, tipo de empresa y consistencia del perfil.",
  "Como regla práctica, conviene empezar mirando proveedores con al menos 3 años de actividad visible.",
  "Buscar un mínimo de reseñas útiles y una calificación alta sostenida; no alcanza con ver el promedio, hay que leer bien las observaciones negativas.",
  "Pedir fotos reales del producto en la mano y sobre la mesa, incluyendo el embalaje individual que después recibe el comprador final.",
  "Si necesitás etiqueta individual, código o alguna presentación especial, pedirlo desde el inicio porque suele ser económico o quedar incluido en el acuerdo.",
  "Aclarar siempre que el precio cotizado sea final e incluya todo lo conversado: unidad, bolsa, caja, accesorios, etiquetado y embalaje.",
  "Negociar por chat quién se ocupa del envío y bajo qué alcance, evitando frases vagas que después generan costos extra.",
];

const orderRules = [
  {
    title: "Todo lo sensible, por escrito",
    text:
      "No conviene repartir el acuerdo entre mensajes sueltos, audios externos y suposiciones. Lo importante es que el chat de la plataforma concentre precio final, cantidades, tiempos, embalaje, fotos, etiquetado, muestra y alcance del envío.",
  },
  {
    title: "El proveedor también se valida",
    text:
      "Validar demanda sin validar proveedor deja medio trabajo hecho. La oportunidad comercial puede ser buena y aun así arruinarse por mala comunicación, embalaje pobre, fotos engañosas o costos que aparecieron tarde.",
  },
  {
    title: "La compra cierra con costo total, no con precio unitario",
    text:
      "El número que importa no es sólo la unidad en fábrica. Importa cuánto termina costando venderlo bien en Argentina, con presentación correcta, logística definida y margen todavía defendible.",
  },
];

const paymentAlert = [
  "Si vas a pagar en moneda extranjera, conviene revisar cómo liquida hoy tu banco los consumos en dólares antes de cerrar la orden.",
  "Para planificación financiera, es más prudente comparar el costo de cancelar el consumo con dólares propios contra dejar que se pesifique automáticamente.",
  "Ese punto cambia con regulación y con la operatoria del banco, así que no conviene dejarlo supuesto dentro del margen.",
];

const cardStyle: CSSProperties = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 20,
  padding: 22,
  boxShadow: "0 10px 28px rgba(17,24,39,0.04)",
};

export default function MetodologiaPage() {
  return (
    <main className="page-shell" style={{ padding: "34px 20px 64px" }}>
      <section style={{ display: "grid", gap: 16, marginBottom: 28 }}>
        <span
          style={{
            display: "inline-flex",
            width: "fit-content",
            padding: "8px 12px",
            borderRadius: 999,
            background: "#eaf7ff",
            color: "#0c4a6e",
            fontWeight: 800,
          }}
        >
          Metodología
        </span>
        <h1 style={{ margin: 0, fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05 }}>
          Cómo ordenamos la validación de productos, nichos y proveedores
        </h1>
        <div className="reading-block page-intro-reading" style={{ display: "grid", gap: 14, fontSize: 18, lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          <p style={{ margin: 0 }}>
            En comercio electrónico, una buena decisión rara vez nace de una sola fuente. Lo más útil es combinar señales rápidas de demanda, observación directa del marketplace, presión publicitaria, análisis en buscadores y una revisión seria del proveedor si el producto va a importarse.
          </p>
          <p style={{ margin: 0 }}>
            El orden puede cambiar. A veces una idea aparece en una tendencia, otras veces surge por un anuncio, una búsqueda en Google o una categoría concreta de Mercado Libre. Lo importante no es el punto de partida, sino dejar registro y cruzar evidencias antes de comprar stock.
          </p>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginBottom: 30 }}>
        {principleCards.map((item) => (
          <article key={item.title} style={cardStyle}>
            <h2 style={{ margin: "0 0 10px", fontSize: 22 }}>{item.title}</h2>
            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>{item.text}</p>
          </article>
        ))}
      </section>

      <section style={{ ...cardStyle, marginBottom: 30 }}>
        <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>La herramienta base sigue siendo una buena planilla</h2>
        <p style={{ margin: "0 0 16px", color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          Antes de enamorarse de un producto conviene armar una planilla simple y constante. No hace falta un sistema complejo: alcanza con registrar siempre las mismas variables para que cada análisis quede comparable con el anterior.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          {spreadsheetFields.map(([title, text]) => (
            <div key={title} style={{ borderRadius: 16, border: "1px solid #e5e7eb", background: "#f8fafc", padding: 16 }}>
              <div style={{ fontWeight: 800, marginBottom: 8, color: "#0f172a" }}>{title}</div>
              <div style={{ color: "#4b5563", lineHeight: 1.7, textAlign: "justify", hyphens: "auto" }}>{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...cardStyle, marginBottom: 30 }}>
        <h2 style={{ margin: "0 0 14px", fontSize: 28 }}>Una secuencia práctica para validar</h2>
        <div style={{ display: "grid", gap: 14 }}>
          {steps.map((step) => (
            <article key={step.title} style={{ borderRadius: 18, border: "1px solid #e5e7eb", background: "#fff", padding: 18 }}>
              <div style={{ display: "flex", gap: 12, justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{ maxWidth: 820 }}>
                  <h3 style={{ margin: "0 0 8px", fontSize: 22 }}>{step.title}</h3>
                  <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>{step.text}</p>
                </div>
                {step.href ? (
                  <a
                    href={step.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: 44,
                      padding: "0 16px",
                      borderRadius: 12,
                      background: "#0f172a",
                      color: "#fff",
                      fontWeight: 800,
                      textDecoration: "none",
                    }}
                  >
                    {step.hrefLabel}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18, marginBottom: 30 }}>
        <article style={cardStyle}>
          <h2 style={{ margin: "0 0 10px", fontSize: 24 }}>Qué mirar en Mercado Libre Tendencias</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
            {mlChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article style={cardStyle}>
          <h2 style={{ margin: "0 0 10px", fontSize: 24 }}>Qué revisar en Alibaba antes de cotizar en serio</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
            {alibabaChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginBottom: 30 }}>
        {orderRules.map((item) => (
          <article key={item.title} style={cardStyle}>
            <h2 style={{ margin: "0 0 10px", fontSize: 24 }}>{item.title}</h2>
            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>{item.text}</p>
          </article>
        ))}
      </section>

      <section style={{ ...cardStyle, marginBottom: 30 }}>
        <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>Alerta financiera al pagar en dólares</h2>
        <div className="reading-block" style={{ display: "grid", gap: 12, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          <p style={{ margin: 0 }}>
            En operaciones internacionales no conviene suponer el costo cambiario. Antes de pagar, revisá cómo se liquida hoy el consumo en moneda extranjera en tu banco y cómo impacta eso sobre tu costo real por unidad.
          </p>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {paymentAlert.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ ...cardStyle }}>
        <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>La decisión final sigue siendo propia</h2>
        <div className="reading-block" style={{ display: "grid", gap: 14, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          <p style={{ margin: 0 }}>
            La metodología no busca convertir una idea en verdad, sino obligarla a pasar por fuentes, números y condiciones reales. Cuanto más ordenado sea el proceso, menos lugar queda para comprar por entusiasmo.
          </p>
          <p style={{ margin: 0 }}>
            Un producto puede parecer fuerte en tendencias, sostener interés en Google y además tener anunciantes activos. Pero si el proveedor no transmite confianza, el embalaje es pobre o el costo final destruye el margen, la decisión correcta puede seguir siendo no avanzar.
          </p>
        </div>
      </section>
    </main>
  );
}
