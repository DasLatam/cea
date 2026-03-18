import Link from "next/link";
import type { GuideContent } from "@/lib/content";

export default function GuidePage({ content }: { content: GuideContent }) {
  return (
    <div className="content-page-grid">
      <section className="content-stack">
        <article className="hero-card content-surface">
          <p className="section-label">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="hero-summary">{content.summary}</p>
        </article>

        {content.sections.map((section) => (
          <article key={section.title} className="content-surface article-card">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets?.length ? (
              <ul className="article-list">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </section>

      <aside className="content-sidebar">
        <div className="content-surface sticky-card">
          <h3>Lecturas relacionadas</h3>
          <div className="related-links">
            {content.related.map((item) => (
              <Link key={item.href} href={item.href} className="related-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
