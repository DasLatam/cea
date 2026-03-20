import Link from "next/link";

export type EditorialSection = {
  heading: string;
  body: string;
};

export type EditorialPageData = {
  kicker: string;
  title: string;
  subtitle: string;
  sections: EditorialSection[];
  asideTitle?: string;
  asideItems?: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function EditorialPage({ page }: { page: EditorialPageData }) {
  return (
    <main className="editorial-main">
      <div className="shell editorial-shell">
        <section className="hero-card hero-card--compact">
          <p className="eyebrow">{page.kicker}</p>
          <h1>{page.title}</h1>
          <p className="hero-lead">{page.subtitle}</p>
          {page.ctaHref && page.ctaLabel ? (
            <div className="hero-actions">
              <Link href={page.ctaHref} className="button-primary">
                {page.ctaLabel}
              </Link>
            </div>
          ) : null}
        </section>

        <div className="content-grid">
          <article className="article-card">
            {page.sections.map((section) => (
              <section key={section.heading} className="article-section">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </article>

          <aside className="aside-card">
            <p className="aside-kicker">Navegación rápida</p>
            <h3>{page.asideTitle ?? "Qué vas a encontrar"}</h3>
            <ul>
              {(page.asideItems ?? page.sections.map((section) => section.heading)).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="aside-note">
              <p>
                Este contenido fue escrito para usuarios que necesitan criterio antes de invertir tiempo,
                stock o capital. La intención del sitio es ordenar decisiones, no empujar compras impulsivas.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
