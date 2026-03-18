import { formatARS, formatCompactNumber } from "@/lib/utils/format";
import type { SearchApiResponse } from "@/types/app";

type KPIGridProps = {
  data: SearchApiResponse | null;
};

export default function KPIGrid({ data }: KPIGridProps) {
  const cards = [
    {
      label: "Precio mediano",
      value: data ? formatARS(data.summary.medianPrice) : "—",
    },
    {
      label: "Ventas promedio",
      value: data ? formatCompactNumber(data.summary.averageSold) : "—",
    },
    {
      label: "Score promedio",
      value: data ? `${Math.round(data.summary.averageScore)}/100` : "—",
    },
    {
      label: "Mejor score",
      value: data ? `${data.summary.topScore}/100` : "—",
    },
  ];

  return (
    <section className="kpi-grid">
      {cards.map((card) => (
        <article key={card.label} className="kpi-card">
          <span className="muted">{card.label}</span>
          <strong>{card.value}</strong>
        </article>
      ))}
    </section>
  );
}
