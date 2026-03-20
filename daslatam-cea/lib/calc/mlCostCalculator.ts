export type SalesMode = "full" | "standard";

export type CalculatorInput = {
  mode: SalesMode;
  salePriceArs: number;
  factoryCostArs: number;
  freightToArgentinaArs: number;
  unitPackagingAndLabelArs: number;
  masterCartonCostArs: number;
  purchasedUnits: number;
  iibbPercent: number;
  sellingFeePercent: number;
  financingPercent: number;
  mlShippingChargeArs: number;
  fullStoragePerUnitArs: number;
  averageFullStorageDays: number;
};

export type CalculatorOutput = {
  unitLandedCostArs: number;
  mlSellingFeeArs: number;
  mlFixedChargeArs: number;
  mlFinancingArs: number;
  mlShippingChargeArs: number;
  fullStorageArs: number;
  iibbArs: number;
  totalUnitCostArs: number;
  unitProfitArs: number;
  unitMarginPercent: number;
  totalExpectedProfitArs: number;
};

const round2 = (value: number) => Math.round(value * 100) / 100;

export function getSuggestedSellingFeePercent(mode: SalesMode) {
  return mode === "full" ? 14 : 16;
}

export function getSuggestedFinancingPercent() {
  return 0;
}

export function getSuggestedIibbPercent() {
  return 3;
}

export function getEstimatedMlFixedChargeArs(salePriceArs: number) {
  if (salePriceArs <= 0) return 0;
  if (salePriceArs < 12000) return 650;
  if (salePriceArs < 33000) return 1100;
  return 0;
}

export function getSuggestedMlShippingChargeArs(
  mode: SalesMode,
  salePriceArs: number,
) {
  if (salePriceArs <= 0) return 0;

  const base = salePriceArs >= 30000 ? salePriceArs * 0.085 : salePriceArs * 0.06;
  const discounted = mode === "full" && salePriceArs >= 30000 ? base * 0.5 : base;

  return round2(Math.max(0, discounted));
}

export function calculateMlRealCost(input: CalculatorInput): CalculatorOutput {
  const unitLandedCostArs =
    input.factoryCostArs +
    input.freightToArgentinaArs +
    input.unitPackagingAndLabelArs +
    input.masterCartonCostArs;

  const mlSellingFeeArs = input.salePriceArs * (input.sellingFeePercent / 100);
  const mlFixedChargeArs = getEstimatedMlFixedChargeArs(input.salePriceArs);
  const mlFinancingArs = input.salePriceArs * (input.financingPercent / 100);
  const iibbArs = input.salePriceArs * (input.iibbPercent / 100);
  const mlShippingChargeArs = input.mlShippingChargeArs;
  const fullStorageArs =
    input.mode === "full"
      ? input.fullStoragePerUnitArs * input.averageFullStorageDays
      : 0;

  const totalUnitCostArs =
    unitLandedCostArs +
    mlSellingFeeArs +
    mlFixedChargeArs +
    mlFinancingArs +
    iibbArs +
    mlShippingChargeArs +
    fullStorageArs;

  const unitProfitArs = input.salePriceArs - totalUnitCostArs;
  const unitMarginPercent = input.salePriceArs > 0 ? (unitProfitArs / input.salePriceArs) * 100 : 0;
  const totalExpectedProfitArs = unitProfitArs * input.purchasedUnits;

  return {
    unitLandedCostArs: round2(unitLandedCostArs),
    mlSellingFeeArs: round2(mlSellingFeeArs),
    mlFixedChargeArs: round2(mlFixedChargeArs),
    mlFinancingArs: round2(mlFinancingArs),
    mlShippingChargeArs: round2(mlShippingChargeArs),
    fullStorageArs: round2(fullStorageArs),
    iibbArs: round2(iibbArs),
    totalUnitCostArs: round2(totalUnitCostArs),
    unitProfitArs: round2(unitProfitArs),
    unitMarginPercent: round2(unitMarginPercent),
    totalExpectedProfitArs: round2(totalExpectedProfitArs),
  };
}
