export function safeNumber(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;

  if (typeof value === "string") {
    const rangeMap: Record<string, number> = {
      RANGO_1_50: 1,
      RANGO_51_100: 50,
      RANGO_101_150: 100,
      RANGO_151_200: 150,
      RANGO_201_250: 200,
      RANGO_251_500: 250,
      RANGO_501_5000: 500,
      RANGO_5001_50000: 5000,
      RANGO_50001_99999: 50000,
    };

    if (value in rangeMap) {
      return rangeMap[value];
    }

    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }

  return 0;
}

export function average(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }

  return sorted[mid];
}

export function percentile(numbers: number[], fraction: number): number {
  if (numbers.length === 0) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  const index = Math.min(
    sorted.length - 1,
    Math.max(0, Math.floor(sorted.length * fraction))
  );
  return sorted[index];
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
