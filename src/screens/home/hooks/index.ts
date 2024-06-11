import { RootState } from "@/store";
import { IPokemon } from "@interfaces/pokemon";
import { useGetPokemonsSvc } from "@services/pokemon";
import { useEffect, useState } from "react";
import { Platform, StatusBar } from "react-native";
import { useSelector } from "react-redux";

export const useHome = () => {
  const [generation, setGeneration] = useState<number>(1);
  const { data, loading } = useGetPokemonsSvc(generation);
  const [filteredPokemon, setFilteredPokemon] = useState<IPokemon[]>([]);
  const safeAreaStyles = {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  };

  const togglePokemon = useSelector(
    (store: RootState) => store.pokemonSelected.show
  );

  useEffect(() => {
    setFilteredPokemon(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    data,
    filteredPokemon,
    setFilteredPokemon,
    generation,
    setGeneration,
    loading,
    togglePokemon,
    safeAreaStyles
  };
};
