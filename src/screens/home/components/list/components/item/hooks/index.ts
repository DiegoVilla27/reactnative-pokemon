import useGetColorsByImage from "@services/colors";
import { IPokemon } from "@interfaces/pokemon";
import { useEffect, useState } from "react";

export const usePokeItem = (pokemon: IPokemon) => {
  const [pokemonFull, setPokemonFull] = useState<IPokemon>();
  const { data, loading } = useGetColorsByImage(
    pokemon.info?.sprites.other?.home.front_default ?? ""
  );

  useEffect(() => {
    if (pokemon) {
      const setNewData = async () => {
        setPokemonFull({
          ...pokemon,
          color: data
        });
      };
      setNewData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    pokemonFull,
    loading
  };
};
