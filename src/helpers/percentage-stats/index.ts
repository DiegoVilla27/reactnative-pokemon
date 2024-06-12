import { DimensionValue } from "react-native";

export const PercentageStats = (value: number): DimensionValue | undefined => {
  const clampedValue: DimensionValue = Math.min(Math.max(value, 0), 100);
  return `${clampedValue}%` ?? undefined;
};
