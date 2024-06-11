import IconGenerate from "@helpers/assets/icons/icon-generate";
import { ColorType } from "@helpers/color-type";
import { GradientBackground } from "@helpers/gradient-background";
import { ImageTW, LinearGradientTW, TextTW, ViewTW } from "@helpers/nativewind";
import { IPokemon } from "@interfaces/pokemon";
import { Type } from "@interfaces/pokemon/pokemon-api";
import { TouchableWithoutFeedback } from "react-native";
import { usePokeItem } from "./hooks";
import PokeItemSkeleton from "./skeleton";

interface IProps {
  pokemon: IPokemon;
}

const PokeItem = ({ pokemon }: IProps) => {
  const { selectPokemon } = usePokeItem();

  return (
    <>
      {pokemon ? (
        <TouchableWithoutFeedback onPress={() => selectPokemon(pokemon)}>
          <ViewTW className="relative">
            <LinearGradientTW
              colors={GradientBackground(pokemon.color)}
              className="relative rounded-xl cursor-pointer p-4 mb-4"
              accessibilityElementsHidden={true}
            >
              <ViewTW className="relative z-10 text-left flex flex-col gap-1">
                <TextTW className="text-black font-montserrat-l capitalize text-3xl font-bold">
                  #{pokemon.info?.id}
                </TextTW>
                <TextTW className="capitalize text-3xl font-bold text-white font-montserrat-b">
                  {pokemon.name}
                </TextTW>
                <ViewTW className="flex h-10 flex-row items-center">
                  <ViewTW className="flex flex-row items-center justify-center bg-black/[.5] rounded-md mr-2 p-2">
                    <TextTW className="text-white font-montserrat-r text-sm">
                      {pokemon.info!.weight}kg
                    </TextTW>
                  </ViewTW>
                  <ViewTW className="flex flex-row items-center justify-center bg-black/[.5] rounded-md mr-2 p-2">
                    <TextTW className="text-white font-montserrat-r text-sm">
                      {pokemon.info!.height}m
                    </TextTW>
                  </ViewTW>
                </ViewTW>
                <ViewTW className="flex h-10 flex-row items-center">
                  {pokemon.info!.types.map((type: Type) => (
                    <ViewTW
                      key={type.type.name}
                      className="flex flex-row items-center justify-center rounded-md mr-2 p-2"
                      style={{ backgroundColor: ColorType(type.type.name) }}
                    >
                      {IconGenerate(type.type.name, 20, 20)}
                      <TextTW className="text-white capitalize ml-1">
                        {type.type.name}
                      </TextTW>
                    </ViewTW>
                  ))}
                </ViewTW>
              </ViewTW>
              <ViewTW className="absolute top-0 right-0 bg-white/[.1] w-48 h-48 rounded-full"></ViewTW>
            </LinearGradientTW>
            <ImageTW
              className="absolute right-0 -top-4 w-48 h-48"
              src={pokemon.info?.sprites.other?.home.front_default}
            />
          </ViewTW>
        </TouchableWithoutFeedback>
      ) : (
        <PokeItemSkeleton />
      )}
    </>
  );
};

export default PokeItem;
