import { RootState } from "@/store";
import { IPokemon } from "@interfaces/pokemon";
import { useGetPokemonsSvc } from "@services/pokemon";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useHome = () => {
  const [generation, setGeneration] = useState<number>(1);
  const { data, loading } = useGetPokemonsSvc(generation);
  const [filteredPokemon, setFilteredPokemon] = useState<IPokemon[]>([]);

  const togglePokemon = useSelector(
    (store: RootState) => store.pokemonSelected.show
  );

  useEffect(() => {
    setFilteredPokemon(data);
  }, [data]);

  return {
    data,
    filteredPokemon,
    setFilteredPokemon,
    generation,
    setGeneration,
    loading,
    togglePokemon
  };
};
