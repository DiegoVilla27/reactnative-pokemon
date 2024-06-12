import { IPokemon } from "@/interfaces/pokemon";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { validationsSearch } from "../validations";

export interface IForm {
  query?: string;
}

interface IProps {
  setFilteredPokemon: Dispatch<SetStateAction<IPokemon[]>>;
  pokemons: IPokemon[];
}

const useSearch = ({ setFilteredPokemon, pokemons }: IProps) => {
  const iconStyled: StyleProp<ViewStyle> = {
    position: "absolute",
    top: 10,
    left: 13,
    zIndex: 50
  };

  const inputStyled: StyleProp<TextStyle> = {
    elevation: 2
  };

  const {
    watch,
    control,
    formState: { errors }
  } = useForm<IForm>({
    resolver: yupResolver(validationsSearch({ maxLength: 50 })),
    criteriaMode: "all",
    mode: "all"
  });

  useEffect(() => {
    const subscription = watch(({ query }, { name }) => {
      if (name === "query" && query!.length > 0) {
        const handler = setTimeout(() => {
          const filter: IPokemon[] = pokemons.filter((pokemon: IPokemon) =>
            pokemon.name.toLowerCase().includes(query!.toLowerCase())
          );
          setFilteredPokemon(filter);
        }, 500);
        return () => clearTimeout(handler);
      } else if (name === "query" && query!.length === 0) {
        setFilteredPokemon(pokemons);
      }
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch]);

  return {
    errors,
    control,
    iconStyled,
    inputStyled
  };
};

export default useSearch;
