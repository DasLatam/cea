type ScoreBadgeProps = {
  score: number;
};

export default function ScoreBadge({ score }: ScoreBadgeProps) {
  const rounded = Math.round(score);

  let className = "score-badge score-low";
  if (rounded >= 75) className = "score-badge score-high";
  else if (rounded >= 55) className = "score-badge score-medium";

  return <span className={className}>{rounded}</span>;
}
