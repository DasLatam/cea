import type { GuideContent } from "@/lib/content";

export default function GuidePage({ content }: { content: GuideContent }) {
  return (
    <article style={{ maxWidth: 980, margin: "0 auto", padding: "32px 20px 56px" }}>
      <div style={{ display: "grid", gap: 16, marginBottom: 28 }}>
        <span
          style={{
            display: "inline-flex",
            width: "fit-content",
            padding: "8px 12px",
            borderRadius: 999,
            background: "#fff7c8",
            color: "#6d5600",
            fontWeight: 800,
          }}
        >
          {content.kicker}
        </span>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3.4rem)", lineHeight: 1.05, margin: 0 }}>{content.title}</h1>
        <div className="reading-block" style={{ display: "grid", gap: 14, color: "#374151", fontSize: 18, lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          {content.intro.map((paragraph) => (
            <p key={paragraph} style={{ margin: 0 }}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gap: 20 }}>
        {content.sections.map((section) => (
          <section
            key={section.title}
            style={{
              background: "#fff",
              border: "1px solid #e4e8ef",
              borderRadius: 20,
              padding: "24px 24px 22px",
              boxShadow: "0 8px 24px rgba(16,17,20,0.04)",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: 14, fontSize: 26 }}>{section.title}</h2>
            <div className="reading-block" style={{ display: "grid", gap: 14, color: "#374151", lineHeight: 1.85, textAlign: "justify", hyphens: "auto" }}>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} style={{ margin: 0 }}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div
        style={{
          marginTop: 28,
          padding: "22px 24px",
          borderRadius: 18,
          background: "#eef8ff",
          border: "1px solid #cfe8f8",
          color: "#23435b",
          fontWeight: 700,
          lineHeight: 1.7,
        }}
      >
        {content.closing}
      </div>
    </article>
  );
}
