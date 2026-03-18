type GenerateInsightsInput = {
  title: string;
  price: number;
  sold: number;
  stock: number;
  medianPrice: number;
  p75Sold: number;
  flags: string[];
  freeShipping: boolean;
};

export function generateInsights(input: GenerateInsightsInput): string[] {
  const insights: string[] = [];
  const rotation = input.sold / Math.max(input.stock, 1);

  if (input.sold >= input.p75Sold && input.sold > 0) {
    insights.push("Alta demanda relativa");
  }

  if (input.medianPrice > 0 && input.price <= input.medianPrice * 0.9) {
    insights.push("Precio competitivo");
  }

  if (input.medianPrice > 0 && input.price >= input.medianPrice * 1.15) {
    insights.push("Precio alto frente al mercado");
  }

  if (rotation >= 1) {
    insights.push("Buena rotación estimada");
  }

  if (input.sold === 0) {
    insights.push("Sin tracción visible");
  }

  if (input.freeShipping) {
    insights.push("Envío gratis detectado");
  }

  if (input.flags.includes("pesado")) {
    insights.push("Costo logístico potencialmente alto");
  }

  if (input.flags.includes("frágil")) {
    insights.push("Atención a embalaje y roturas");
  }

  if (input.flags.includes("marca")) {
    insights.push("Revisar riesgo marcario");
  }

  if (input.flags.includes("regulado")) {
    insights.push("Revisar restricciones de publicación");
  }

  return insights.slice(0, 5);
}
