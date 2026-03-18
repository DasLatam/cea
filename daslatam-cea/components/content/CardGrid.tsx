import Link from "next/link";

export default function CardGrid({
  title,
  items,
}: {
  title: string;
  items: Array<{ href: string; title: string; text: string }>;
}) {
  return (
    <section className="content-surface section-block">
      <div className="section-head">
        <h2>{title}</h2>
      </div>
      <div className="feature-grid">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="feature-card">
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
