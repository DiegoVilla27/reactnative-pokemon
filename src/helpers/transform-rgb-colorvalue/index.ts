import { Rgb } from "@/interfaces/colors";
import { ColorValue } from "react-native";

export const TransformRgbToColorValue = (
  color: string | number | Rgb
): ColorValue | undefined => {
  if (typeof color === "string") {
    return color;
  }
  const [r, g, b] = color as Rgb;
  return `rgb(${r},${g},${b})`;
};
