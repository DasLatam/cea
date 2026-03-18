import { clamp } from "@/lib/utils/numbers";

type ProductScoreInput = {
  price: number;
  sold: number;
  stock: number;
  medianPrice: number;
  maxSold: number;
  maxRotation: number;
  flags: string[];
  freeShipping: boolean;
  condition: string;
};

const FLAG_PENALTIES: Record<string, number> = {
  pesado: 8,
  frágil: 8,
  marca: 10,
  regulado: 12,
};

export function computeProductScore(input: ProductScoreInput): number {
  const soldRatio = clamp(input.sold / Math.max(input.maxSold, 1), 0, 1);
  const rotation = input.sold / Math.max(input.stock, 1);
  const rotationRatio = clamp(rotation / Math.max(input.maxRotation, 1), 0, 1);

  let priceAdvantage = 0.5;
  if (input.medianPrice > 0) {
    const relativeDiff = (input.medianPrice - input.price) / input.medianPrice;
    priceAdvantage = clamp(0.5 + relativeDiff, 0, 1);
  }

  const soldScore = soldRatio * 40;
  const rotationScore = rotationRatio * 25;
  const priceScore = priceAdvantage * 20;
  const logisticsBonus = input.freeShipping ? 5 : 0;
  const conditionBonus = input.condition === "new" ? 5 : 0;
  const penalty = input.flags.reduce((sum, flag) => sum + (FLAG_PENALTIES[flag] ?? 4), 0);

  return Math.round(clamp(soldScore + rotationScore + priceScore + logisticsBonus + conditionBonus - penalty, 0, 100));
}
