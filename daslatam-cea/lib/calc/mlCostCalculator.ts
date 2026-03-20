export type FulfillmentMode = "full" | "standard";

export type CostInputs = {
  mode: FulfillmentMode;
  salePrice: number;
  sellingFeePct: number;
  installmentsPct: number;
  iibbPct: number;
  fixedCharge: number;
  chinaCost: number;
  freightToArgentina: number;
  packagingCost: number;
  labelingCost: number;
  lengthCm: number;
  widthCm: number;
  heightCm: number;
  weightKg: number;
  manualLogisticsCost: number;
  useManualLogisticsCost: boolean;
};

export type CostResult = {
  volumetricScore: number;
  logisticsBaseEstimate: number;
  logisticsCostCharged: number;
  logisticsDiscountPct: number;
  sellingFee: number;
  installmentsFee: number;
  iibbRetention: number;
  totalProductCost: number;
  totalMarketplaceCosts: number;
  totalCosts: number;
  profit: number;
  marginPct: number;
  contributionPct: number;
  isPositive: boolean;
};

function round2(value: number) {
  return Math.round(value * 100) / 100;
}

function getLogisticsBaseEstimate({ lengthCm, widthCm, heightCm, weightKg, salePrice }: Pick<CostInputs, "lengthCm" | "widthCm" | "heightCm" | "weightKg" | "salePrice">) {
  const volumetricScore = (lengthCm * widthCm * heightCm) / 6000;
  const chargeable = Math.max(weightKg || 0, volumetricScore || 0);

  let estimate = 0;
  if (chargeable <= 0.5) estimate = 3200;
  else if (chargeable <= 1) estimate = 4200;
  else if (chargeable <= 2) estimate = 5600;
  else if (chargeable <= 3) estimate = 7200;
  else if (chargeable <= 5) estimate = 9200;
  else if (chargeable <= 9) estimate = 12600;
  else if (chargeable <= 12) estimate = 16800;
  else if (chargeable <= 20) estimate = 22400;
  else estimate = 29800;

  if (salePrice > 0 && salePrice < 33000) {
    estimate += 900;
  }

  return {
    volumetricScore: round2(volumetricScore),
    baseEstimate: round2(estimate),
  };
}

export function calculateMlCosts(inputs: CostInputs): CostResult {
  const { volumetricScore, baseEstimate } = getLogisticsBaseEstimate(inputs);
  const logisticsBaseEstimate = inputs.useManualLogisticsCost ? inputs.manualLogisticsCost : baseEstimate;

  const logisticsDiscountPct = inputs.mode === "full" && inputs.salePrice >= 30000 ? 50 : 0;
  const logisticsCostCharged = logisticsBaseEstimate * (1 - logisticsDiscountPct / 100);

  const sellingFee = inputs.salePrice * (inputs.sellingFeePct / 100);
  const installmentsFee = inputs.salePrice * (inputs.installmentsPct / 100);
  const iibbRetention = inputs.salePrice * (inputs.iibbPct / 100);

  const totalProductCost =
    inputs.chinaCost +
    inputs.freightToArgentina +
    inputs.packagingCost +
    inputs.labelingCost;

  const totalMarketplaceCosts =
    sellingFee +
    installmentsFee +
    iibbRetention +
    inputs.fixedCharge +
    logisticsCostCharged;

  const totalCosts = totalProductCost + totalMarketplaceCosts;
  const profit = inputs.salePrice - totalCosts;
  const marginPct = inputs.salePrice > 0 ? (profit / inputs.salePrice) * 100 : 0;
  const contributionPct = inputs.salePrice > 0 ? ((inputs.salePrice - totalMarketplaceCosts) / inputs.salePrice) * 100 : 0;

  return {
    volumetricScore,
    logisticsBaseEstimate: round2(logisticsBaseEstimate),
    logisticsCostCharged: round2(logisticsCostCharged),
    logisticsDiscountPct,
    sellingFee: round2(sellingFee),
    installmentsFee: round2(installmentsFee),
    iibbRetention: round2(iibbRetention),
    totalProductCost: round2(totalProductCost),
    totalMarketplaceCosts: round2(totalMarketplaceCosts),
    totalCosts: round2(totalCosts),
    profit: round2(profit),
    marginPct: round2(marginPct),
    contributionPct: round2(contributionPct),
    isPositive: profit >= 0,
  };
}
