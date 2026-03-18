import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  summary,
  ctaHref,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  ctaHref?: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="hero-card content-surface">
      <p className="section-label">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="hero-summary">{summary}</p>
      {(ctaHref || secondaryHref) && (
        <div className="hero-actions">
          {ctaHref && ctaLabel ? (
            <Link href={ctaHref} className="primary-button inline-button">
              {ctaLabel}
            </Link>
          ) : null}
          {secondaryHref && secondaryLabel ? (
            <Link href={secondaryHref} className="secondary-button inline-button">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      )}
    </section>
  );
}
