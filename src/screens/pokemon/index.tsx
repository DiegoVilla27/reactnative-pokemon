import IconGenerate from "@/helpers/assets/icons/icon-generate";
import { GradientBackground } from "@/helpers/gradient-background";
import { NameStats } from "@/helpers/name-stats";
import { TransformRgbToColorValue } from "@/helpers/transform-rgb-colorvalue";
import { IPokemonApi, Stat, Type } from "@/interfaces/pokemon/pokemon-api";
import {
  ImageTW,
  LinearGradientTW,
  ScrollViewTW,
  TextTW,
  ViewTW
} from "@helpers/nativewind";
import { StatusBar } from "react-native";
import usePokemon from "./hooks";

function PokemonScreen() {
  const { pokemon, typesStyle, statsStyle } = usePokemon();

  return (
    <>
      {pokemon ? (
        <ScrollViewTW className="flex-1 h-screen w-screen">
          <StatusBar
            animated={true}
            backgroundColor={TransformRgbToColorValue(pokemon!.color!)}
          />
          <ViewTW className="bg-white relative w-screen h-screen p-2">
            <LinearGradientTW
              className="w-screen absolute left-0 top-0 h-1/3 rounded-b-[50px]"
              colors={GradientBackground(pokemon?.color)}
            ></LinearGradientTW>
            <ViewTW className="h-full flex flex-col items-center justify-center relative gap-4">
              <ImageTW
                className="w-64 h-64 object-contain"
                source={{
                  uri: pokemon.info?.sprites.other?.home.front_default
                }}
              />
              <TextTW className="text-3xl capitalize font-montserrat-b text-black">
                {pokemon.name}
              </TextTW>
              <ViewTW className="flex h-10 flex-row items-center">
                {pokemon.info!.types.map((type: Type) => (
                  <ViewTW
                    className="flex flex-row items-center justify-center rounded-md mr-2 p-2"
                    key={type.type.name}
                    style={typesStyle(type.type.name)}
                  >
                    {IconGenerate(type.type.name, 25, 25)}
                    <TextTW className="text-white text-lg capitalize mx-2">
                      {type.type.name}
                    </TextTW>
                  </ViewTW>
                ))}
              </ViewTW>
              <ViewTW
                className={`mt-2 px-4 w-full flex flex-col gap-1 ${
                  pokemon.evolutions && pokemon.evolutions.length <= 1
                    ? "mb-2"
                    : ""
                }`}
              >
                {pokemon.info!.stats.map((stats: Stat) => (
                  <ViewTW
                    key={stats.stat.name}
                    className="flex flex-row gap-y-2 items-center"
                  >
                    <TextTW className="text-black font-montserrat-s capitalize flex-1 text-sm">
                      {NameStats(stats.stat.name)}
                    </TextTW>
                    <TextTW className="text-black font-montserrat-l w-9 ios:text-lg android:text-sm">
                      {stats.base_stat}
                    </TextTW>
                    <ViewTW className="flex-[2] w-full bg-slate-300 rounded-full flex justify-start p-1">
                      <ViewTW
                        className="h-3 rounded-full"
                        style={statsStyle(stats.base_stat, pokemon!.color!)}
                      ></ViewTW>
                    </ViewTW>
                  </ViewTW>
                ))}
              </ViewTW>
              {pokemon.evolution_data && pokemon.evolution_data.length > 1 ? (
                <ViewTW className="relative flex flex-col mt-2 text-center">
                  <ViewTW
                    className={`flex flex-row gap-2 justify-center items-center ${
                      pokemon.evolution_data!.length > 3
                        ? "flex-nowrap justify-start"
                        : ""
                    }`}
                  >
                    <ScrollViewTW horizontal>
                      {pokemon.evolution_data.map((evolution: IPokemonApi) => (
                        <ImageTW
                          className="w-24 h-24 object-contain"
                          key={evolution.sprites.other!.home.front_default}
                          source={{
                            uri: evolution.sprites.other!.home.front_default
                          }}
                        />
                      ))}
                    </ScrollViewTW>
                  </ViewTW>
                </ViewTW>
              ) : null}
            </ViewTW>
          </ViewTW>
        </ScrollViewTW>
      ) : null}
    </>
  );
}

export default PokemonScreen;
