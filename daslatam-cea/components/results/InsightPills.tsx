type InsightPillsProps = {
  flags: string[];
  insights: string[];
};

export default function InsightPills({ flags, insights }: InsightPillsProps) {
  const pills = [...insights.slice(0, 2), ...flags.slice(0, 2)].slice(0, 4);

  if (pills.length === 0) {
    return <span className="muted">Sin señales</span>;
  }

  return (
    <div className="pill-wrap">
      {pills.map((pill) => (
        <span key={pill} className="pill">
          {pill}
        </span>
      ))}
    </div>
  );
}
