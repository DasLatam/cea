import type { CSSProperties } from "react";

export const metadata = {
  title: "Fuentes",
  description:
    "Mercado Libre Tendencias, Google Trends, Meta Ads Library, Alibaba y registro propio para detectar oportunidades y validar ideas con más criterio.",
  keywords: [
    "mercado libre tendencias argentina",
    "google trends argentina",
    "meta ads library argentina",
    "alibaba proveedores",
    "fuentes para validar productos",
  ],
  openGraph: {
    title: "Fuentes · CEA",
    description:
      "Mercado Libre Tendencias, Google Trends, Meta Ads Library, Alibaba y registro propio para detectar oportunidades y validar ideas con más criterio.",
    url: "/fuentes",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuentes · CEA",
    description:
      "Mercado Libre Tendencias, Google Trends, Meta Ads Library, Alibaba y registro propio para detectar oportunidades y validar ideas con más criterio.",
  },
};


const sources = [
  {
    title: "Mercado Libre Tendencias",
    href: "https://tendencias.mercadolibre.com.ar/",
    text:
      "Sirve para detectar búsquedas que crecieron, búsquedas deseadas y tendencias populares dentro del principal marketplace de Argentina. Es una fuente muy útil para abrir radar y encontrar productos o nichos que merecen una validación posterior más profunda.",
    bullets: [
      "Aporta señales rápidas de interés dentro del ecosistema Mercado Libre.",
      "Permite profundizar por categoría para salir del listado general.",
      "No reemplaza la revisión manual de competencia, precio ni margen.",
    ],
  },
  {
    title: "Google Trends",
    href: "https://trends.google.com/explore?geo=AR",
    text:
      "Se usa para mirar evolución del interés, comparar términos, revisar regiones y descubrir búsquedas relacionadas. Ayuda a entender si una palabra clave tiene estacionalidad, si crece de forma sostenida o si fue un pico corto impulsado por una moda o una noticia.",
    bullets: [
      "Aporta contexto temporal y geográfico.",
      "Sirve para contrastar términos parecidos o ambiguos.",
      "No muestra rentabilidad ni competencia real dentro del marketplace.",
    ],
  },
  {
    title: "Biblioteca de anuncios de Meta",
    href: "https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=AR&media_type=all",
    text:
      "La usamos para ver si otros jugadores ya están empujando un producto o una promesa de venta. Para análisis comercial conviene entrar en el modo de todos los anuncios activos y buscar por palabra clave o anunciante.",
    bullets: [
      "Permite observar presión publicitaria y mensajes repetidos.",
      "Ayuda a identificar creatividades, claims y anunciantes activos.",
      "No garantiza que una campaña sea rentable ni cuánto está vendiendo realmente.",
    ],
  },
  {
    title: "Alibaba",
    href: "https://www.alibaba.com/",
    text:
      "Cuando el análisis apunta a importación, Alibaba pasa a ser una fuente para validar proveedores, calidades, condiciones comerciales y costos ocultos. No se usa sólo para pedir precio: se usa para revisar con quién se podría trabajar y bajo qué alcance real.",
    bullets: [
      "Conviene priorizar proveedores con sello Verified y perfil consistente.",
      "La antigüedad visible, las reseñas y la calidad de respuesta ayudan a filtrar mejor.",
      "Todo lo importante debería quedar documentado en el chat de la plataforma.",
    ],
  },
  {
    title: "Observación directa en Mercado Libre",
    href: "/herramientas/calculadora-costos",
    text:
      "Después de detectar una oportunidad, conviene bajar el producto a la realidad del marketplace: cantidad de publicaciones, nivel de saturación, rango de precios, calidad visual, promesas de valor, reputación aparente y presencia de grandes vendedores. Esta observación manual es decisiva.",
    bullets: [
      "Ayuda a medir la competencia visible y la calidad de la oferta actual.",
      "Permite estimar si todavía hay espacio para entrar con una propuesta distinta.",
      "Debe complementarse con números reales, no sólo con intuición comercial.",
    ],
  },
  {
    title: "Planilla propia de registro",
    href: "/metodologia",
    text:
      "La fuente más importante termina siendo el registro propio. Una planilla bien llevada permite comparar productos entre sí, recordar por qué se descartó o aprobó una idea y no volver a empezar de cero cada vez que reaparece una tendencia.",
    bullets: [
      "Guarda decisiones, supuestos y resultados de cada análisis.",
      "Ayuda a evitar memoria selectiva y entusiasmo sin sustento.",
      "Convierte señales dispersas en un criterio de trabajo acumulable.",
    ],
  },
];

const alibabaChecklist = [
  "Hablar siempre por el chat de la plataforma para que cualquier diferencia quede respaldada dentro del sistema.",
  "Verificar que el proveedor tenga sello Verified y revisar si la información del perfil es consistente con lo que ofrece.",
  "Tomar como referencia inicial una antigüedad de al menos 3 años visibles en la plataforma.",
  "Buscar reseñas positivas suficientes y una calificación sólida; además de mirar el promedio, conviene leer con atención las críticas negativas.",
  "Pedir fotos reales del producto y del embalaje individual, porque esa presentación afecta la percepción del comprador final.",
  "Si hace falta etiquetado individual, pedirlo desde el inicio y dejar por escrito alcance y costo.",
  "Aclarar que el precio cotizado incluye todo lo necesario para evitar sorpresas con bolsa, caja, accesorios o embalajes adicionales.",
  "Negociar por chat el alcance del envío y quién se ocupa de que la mercadería llegue a la dirección indicada en Argentina.",
  "Aprovechar la traducción integrada si hace falta escribir en castellano, pero revisar que las condiciones sensibles queden claras y sin ambigüedad.",
];

const logFields = [
  "fecha del análisis",
  "producto o nicho",
  "keyword principal",
  "fuente del hallazgo",
  "rango de precios observado",
  "cantidad y tipo de competidores",
  "proveedor o proveedores observados",
  "costo estimado y costo puesto en Argentina",
  "margen estimado",
  "riesgos y observaciones",
  "decisión final",
];

const limits = [
  {
    title: "Una tendencia no es una orden de compra",
    text:
      "Que una búsqueda crezca no significa automáticamente que convenga entrar. Puede haber ruido, moda corta, saturación de oferta o costos imposibles para un vendedor chico o mediano.",
  },
  {
    title: "Un anuncio activo no prueba rentabilidad",
    text:
      "Que alguien invierta en anuncios muestra intención comercial, pero no garantiza que esté vendiendo bien ni que el producto deje margen después de costos, devoluciones y comisiones.",
  },
  {
    title: "Una buena keyword no reemplaza una cuenta bien hecha",
    text:
      "Las fuentes de demanda ayudan a orientar, pero la decisión real se define cuando el producto pasa por un cálculo serio y por una revisión honesta del canal de venta y del proveedor.",
  },
];

const cardStyle: CSSProperties = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 20,
  padding: 22,
  boxShadow: "0 10px 28px rgba(17,24,39,0.04)",
};

export default function FuentesPage() {
  return (
    <main className="page-shell" style={{ padding: "34px 20px 64px" }}>
      <section style={{ display: "grid", gap: 16, marginBottom: 28 }}>
        <span
          style={{
            display: "inline-flex",
            width: "fit-content",
            padding: "8px 12px",
            borderRadius: 999,
            background: "#eefbf3",
            color: "#166534",
            fontWeight: 800,
          }}
        >
          Fuentes
        </span>
        <h1 style={{ margin: 0, fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05 }}>
          Qué fuentes usamos para detectar oportunidades y validar ideas
        </h1>
        <div className="reading-block page-intro-reading" style={{ display: "grid", gap: 14, fontSize: 18, lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          <p style={{ margin: 0 }}>
            En CEA no intentamos validar productos con una sola señal. Lo más útil es combinar fuentes que muestren demanda potencial, presión comercial, competencia visible, viabilidad económica y, cuando corresponde, consistencia del proveedor.
          </p>
          <p style={{ margin: 0 }}>
            Estas fuentes no se usan para confirmar caprichos, sino para reducir incertidumbre. Cuanto mejor se documenten, más fácil resulta repetir un buen proceso y descartar rápido lo que no cierra.
          </p>
        </div>
      </section>

      <section style={{ display: "grid", gap: 18, marginBottom: 30 }}>
        {sources.map((source) => (
          <article key={source.title} style={cardStyle}>
            <div style={{ display: "flex", gap: 12, justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ maxWidth: 820 }}>
                <h2 style={{ margin: "0 0 10px", fontSize: 26 }}>{source.title}</h2>
                <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>{source.text}</p>
              </div>
              <a href={source.href} target={source.href.startsWith("http") ? "_blank" : undefined} rel={source.href.startsWith("http") ? "noreferrer" : undefined} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 44, padding: "0 16px", borderRadius: 12, background: "#0f172a", color: "#fff", fontWeight: 800, textDecoration: "none" }}>
                Abrir fuente
              </a>
            </div>
            <ul style={{ margin: "16px 0 0", paddingLeft: 20, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
              {source.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section style={{ ...cardStyle, marginBottom: 30 }}>
        <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>Qué conviene mirar en Alibaba con más atención</h2>
        <p style={{ margin: "0 0 16px", color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          Cuando el producto tiene chances reales de importarse, Alibaba deja de ser una simple vidriera y pasa a ser parte del proceso de validación. La plataforma sirve mejor cuando se usa para documentar condiciones, filtrar proveedores y bajar el riesgo antes de pagar.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
          {alibabaChecklist.map((item) => (
            <div key={item} style={{ borderRadius: 16, background: "#f8fafc", border: "1px solid #e5e7eb", padding: 16, color: "#334155", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...cardStyle, marginBottom: 30 }}>
        <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>Qué conviene dejar registrado siempre</h2>
        <p style={{ margin: "0 0 16px", color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          Una fuente sirve mucho más cuando queda documentada. Si no registrás qué viste, dónde lo viste y qué conclusión sacaste, la próxima vez vas a volver a mirar lo mismo desde cero.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
          {logFields.map((field) => (
            <div key={field} style={{ borderRadius: 16, background: "#f8fafc", border: "1px solid #e5e7eb", padding: 16, fontWeight: 700, color: "#0f172a" }}>
              {field}
            </div>
          ))}
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginBottom: 30 }}>
        {limits.map((item) => (
          <article key={item.title} style={cardStyle}>
            <h2 style={{ margin: "0 0 10px", fontSize: 24 }}>{item.title}</h2>
            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>{item.text}</p>
          </article>
        ))}
      </section>

      <section style={{ ...cardStyle }}>
        <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>Cómo se combinan estas fuentes</h2>
        <div className="reading-block" style={{ display: "grid", gap: 14, color: "#4b5563", lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          <p style={{ margin: 0 }}>
            Un camino posible es detectar una palabra o nicho en Mercado Libre Tendencias, revisar después si el interés se sostiene en Google Trends, mirar qué anuncian otros en Meta y finalmente pasar el producto por una validación manual en Mercado Libre y por una calculadora de costos.
          </p>
          <p style={{ margin: 0 }}>
            Si el análisis sigue siendo atractivo, entra Alibaba para validar proveedor, condiciones de embalaje, etiquetado, consistencia del precio y alcance real del envío. Todo eso debería quedar documentado dentro del chat de la plataforma.
          </p>
          <p style={{ margin: 0 }}>
            No hay un orden obligatorio. Lo importante es que el análisis termine en una decisión concreta: seguir, pedir muestra, profundizar, esperar o descartar.
          </p>
        </div>
      </section>
    </main>
  );
}
