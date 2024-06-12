import { ColorType } from "@/helpers/color-type";
import { PercentageStats } from "@/helpers/percentage-stats";
import { TransformRgbToColorValue } from "@/helpers/transform-rgb-colorvalue";
import { Rgb } from "@/interfaces/colors";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

function usePokemon() {
  const typesStyle = (type: string) => {
    return { backgroundColor: ColorType(type) };
  };

  const statsStyle = (stat: number, color: string | number | Rgb) => {
    return {
      width: PercentageStats(stat),
      backgroundColor: TransformRgbToColorValue(color)
    };
  };

  const pokemon = useSelector(
    (state: RootState) => state.pokemonSelected.pokemon
  );

  return {
    pokemon,
    typesStyle,
    statsStyle
  };
}

export default usePokemon;
