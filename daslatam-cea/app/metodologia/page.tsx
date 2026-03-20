import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metodología",
  description:
    "Cómo validar productos, registrar señales y tomar decisiones comerciales con una metodología práctica para vender mejor en Argentina.",
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
      "Una tendencia aislada no alcanza. Conviene mirar demanda potencial, competencia visible, presión publicitaria, costos, logística y margen antes de comprometer stock.",
  },
  {
    title: "Tomar decisiones con criterio comercial",
    text:
      "La idea no es perseguir todos los productos del momento, sino detectar oportunidades donde todavía exista espacio para entrar con números razonables y una propuesta vendible.",
  },
];

const spreadsheetFields = [
  ["Fecha de análisis", "Para saber cuándo fue tomada cada decisión y no mezclar datos viejos con señales nuevas."],
  ["Producto o nicho", "Nombre claro del producto y, si hace falta, una variante concreta."],
  ["Problema que resuelve", "Ayuda a distinguir moda pasajera de necesidad real o compra impulsiva."],
  ["Keyword principal", "La búsqueda exacta que vas a revisar en Mercado Libre, Google y otras fuentes."],
  ["Fuente del hallazgo", "Mercado Libre Tendencias, Google Trends, Meta Ads Library, red social, proveedor o dato propio."],
  ["Señal en Mercado Libre", "Qué viste: crecimiento, deseadas, populares, cantidad de publicaciones, rango de precios y competidores."],
  ["Señal en Google", "Evolución de interés, estacionalidad, regiones y términos relacionados."],
  ["Señal publicitaria", "Quién lo está anunciando, con qué mensaje, desde cuándo y con qué insistencia."],
  ["Costo del producto", "Valor de compra estimado, ya sea por proveedor local o importación."],
  ["Costo puesto en Argentina", "Producto, flete, embalaje, etiquetado, logística y cualquier costo por unidad que cambie el margen real."],
  ["Precio de venta estimado", "Rango posible en Mercado Libre o en el canal que pienses usar."],
  ["Margen estimado", "Ganancia por unidad y total, con un criterio realista y no optimista."],
  ["Riesgos", "Fragilidad, devoluciones, restricciones, talles, garantías, modas cortas o dependencia de una campaña puntual."],
  ["Decisión", "Seguir, profundizar, descartar o revisar más adelante."],
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
      "La Biblioteca de anuncios de Meta permite ver anuncios activos y buscar por palabra clave o anunciante. Para análisis comercial conviene usar el modo de todos los anuncios, no el filtro de anuncios políticos. Esto ayuda a ver si otros ya están empujando ese producto, cómo lo comunican y qué ángulos de venta repiten.",
    href: "https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=AR&media_type=all",
    hrefLabel: "Abrir Biblioteca de anuncios de Meta",
  },
  {
    title: "6. Hacer recién ahí los números",
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

const metaChecks = [
  "Buscar por palabra clave del producto y también por marcas o competidores visibles.",
  "Revisar si hay muchos anunciantes distintos o si siempre aparecen los mismos.",
  "Mirar cuánto insiste cada anunciante y desde cuándo corre la campaña.",
  "Anotar qué beneficio prometen: precio, practicidad, regalo, novedad, problema que resuelve o urgencia.",
];

const decisionRules = [
  {
    title: "Señales favorables",
    items: [
      "El nicho muestra interés visible en más de una fuente.",
      "Todavía hay margen para diferenciar oferta, precio o presentación.",
      "El costo puesto en Argentina deja ganancia razonable incluso con comisiones y devoluciones probables.",
    ],
  },
  {
    title: "Señales de cautela",
    items: [
      "La tendencia existe, pero el mercado parece ya muy copado por grandes jugadores o importadores con volumen.",
      "El producto depende demasiado de una moda breve o de una sola campaña estacional.",
      "El margen sólo cierra si todo sale perfecto.",
    ],
  },
  {
    title: "Señales para descartar",
    items: [
      "No aparece evidencia suficiente de demanda real o la búsqueda es demasiado esporádica.",
      "La competencia es abundante y homogénea, sin un espacio claro para entrar.",
      "El costo total y la logística destruyen el margen antes de publicar.",
    ],
  },
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
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "34px 20px 64px" }}>
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
          Cómo ordenamos la validación de productos y nichos
        </h1>
        <div className="reading-block" style={{ maxWidth: 930, display: "grid", gap: 14, fontSize: 18, lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          <p style={{ margin: 0 }}>
            En comercio electrónico, una buena decisión rara vez nace de una sola fuente. Lo más útil es combinar señales rápidas de demanda, observación directa del marketplace, presión publicitaria, análisis en buscadores y números reales.
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
              <div style={{ fontWeight: 800, color: "#0f172a", marginBottom: 8 }}>{title}</div>
              <div style={{ color: "#475569", lineHeight: 1.65, fontSize: 14 }}>{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...cardStyle, marginBottom: 30 }}>
        <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>Secuencia sugerida de análisis</h2>
        <p style={{ margin: "0 0 18px", color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          No existe un único orden obligatorio. Estas fuentes se pueden usar en cualquier dirección: detectar una oportunidad en Meta y después validar en Mercado Libre, encontrar una búsqueda en Google y luego revisar competencia, o empezar por Mercado Libre Tendencias y recién después pasar al resto. Lo importante es que el análisis termine en una decisión documentada.
        </p>
        <div style={{ display: "grid", gap: 14 }}>
          {steps.map((step) => (
            <article key={step.title} style={{ borderRadius: 18, border: "1px solid #e5e7eb", background: "#fff", padding: 18 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: 20 }}>{step.title}</h3>
              <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>{step.text}</p>
              {step.href ? (
                <a href={step.href} target="_blank" rel="noreferrer" style={{ display: "inline-flex", marginTop: 12, fontWeight: 800, color: "#0b6db4" }}>
                  {step.hrefLabel}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18, marginBottom: 30 }}>
        <article style={cardStyle}>
          <h2 style={{ margin: "0 0 10px", fontSize: 24 }}>Cómo usar Mercado Libre Tendencias</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
            {mlChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article style={cardStyle}>
          <h2 style={{ margin: "0 0 10px", fontSize: 24 }}>Qué buscar en Google Trends</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
            <li>Comparar términos parecidos para no validar una keyword equivocada.</li>
            <li>Mirar la serie temporal para detectar estacionalidad o un pico aislado.</li>
            <li>Revisar regiones para ver dónde hay más interés relativo.</li>
            <li>Explorar búsquedas relacionadas para abrir variantes comerciales o mejores títulos.</li>
          </ul>
        </article>

        <article style={cardStyle}>
          <h2 style={{ margin: "0 0 10px", fontSize: 24 }}>Cómo leer Meta Ads Library</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
            {metaChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section style={{ ...cardStyle, marginBottom: 30 }}>
        <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>Lo que esta metodología no promete</h2>
        <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          Ninguna herramienta garantiza ventas por sí sola. Tendencias, búsquedas y anuncios ayudan a reducir incertidumbre, pero no reemplazan criterio comercial, ejecución, calidad de oferta, servicio posventa, reputación, pricing ni timing. La decisión final sigue siendo propia y conviene asumirla como tal.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
        {decisionRules.map((group) => (
          <article key={group.title} style={cardStyle}>
            <h2 style={{ margin: "0 0 10px", fontSize: 24 }}>{group.title}</h2>
            <ul style={{ margin: 0, paddingLeft: 20, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
