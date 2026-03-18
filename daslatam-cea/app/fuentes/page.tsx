import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";

export const metadata: Metadata = { title: "Fuentes" };

const envCards = [
  {
    title: "Mercado Libre",
    bullets: [
      "MERCADOLIBRE_ACCESS_TOKEN",
      "OAuth 2.0 con app propia y refresh token fuera de la UI",
      "Se usa para salir del bloqueo 403 del upstream público",
    ],
  },
  {
    title: "Google",
    bullets: [
      "GOOGLE_ADS_DEVELOPER_TOKEN",
      "GOOGLE_ADS_CLIENT_ID / CLIENT_SECRET / REFRESH_TOKEN",
      "GOOGLE_ADS_CUSTOMER_ID para métricas históricas",
    ],
  },
  {
    title: "Meta",
    bullets: [
      "META_ACCESS_TOKEN",
      "META_AD_ACCOUNT_ID",
      "Reach Estimate API para audiencia potencial",
    ],
  },
  {
    title: "Alibaba",
    bullets: [
      "ALIBABA_APP_KEY",
      "ALIBABA_APP_SECRET",
      "o conector/manual import propio de sourcing",
    ],
  },
];

export default function FuentesPage() {
  return (
    <div className="content-theme page-stack">
      <PageHero
        eyebrow="Fuentes y limitaciones"
        title="Qué datos usa hoy la plataforma y qué credenciales faltan"
        summary="El bloqueo 403 actual de Mercado Libre no se resuelve con más UI: se resuelve con una integración autenticada. Lo mismo pasa con Google, Meta y Alibaba. Esta página deja explícito qué necesita cada módulo para pasar de maqueta a fuente productiva."
        ctaHref="/metodologia"
        ctaLabel="Ver metodología"
        secondaryHref="/roadmap"
        secondaryLabel="Ver roadmap"
      />

      <section className="content-surface section-block">
        <div className="feature-grid feature-grid-steps">
          <article className="feature-card static-card">
            <strong>Mercado Libre</strong>
            <p>
              La búsqueda pública está devolviendo 403 desde tu despliegue. La salida robusta es usar OAuth propio de Mercado Libre y mantener el token en el backend.
            </p>
          </article>
          <article className="feature-card static-card">
            <strong>Google</strong>
            <p>
              Para volumen histórico serio conviene Google Ads API; el Trends API existe, pero sigue en alpha limitada. Por eso este módulo no puede marcarse como operativo sin credenciales reales.
            </p>
          </article>
          <article className="feature-card static-card">
            <strong>Meta / Facebook</strong>
            <p>
              La señal de audiencia requiere Marketing API y un ad account. Sin ese acceso no hay reach estimate confiable por nicho.
            </p>
          </article>
          <article className="feature-card static-card">
            <strong>Alibaba</strong>
            <p>
              El sourcing necesita conector autenticado o una fuente manual/propia. No conviene etiquetarlo como operativo si todavía no hay adaptador real.
            </p>
          </article>
        </div>
      </section>

      <section className="content-surface section-block">
        <div className="section-head">
          <div>
            <p className="section-label">Variables sugeridas</p>
            <h2>Configuración mínima por proveedor</h2>
          </div>
        </div>
        <div className="feature-grid feature-grid-steps">
          {envCards.map((card) => (
            <article key={card.title} className="feature-card static-card">
              <strong>{card.title}</strong>
              <ul className="article-list compact-list">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-surface section-block split-grid">
        <div>
          <h2>Principio de transparencia</h2>
          <p>
            La herramienta ya no usa demo para maquillar un upstream roto. Si una fuente falla, el tablero lo muestra y exige acción técnica concreta.
          </p>
        </div>
        <div className="content-note">
          <strong>Qué significa en la práctica</strong>
          <p>
            La UX puede estar lista, pero sin credenciales de terceros no existe “fuente operativa”. En esta versión la app ya distingue entre operativo, parcial y acción requerida.
          </p>
        </div>
      </section>
    </div>
  );
}
