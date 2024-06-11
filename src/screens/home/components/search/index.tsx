import IconGenerate from "@helpers/assets/icons/icon-generate";
import { TextInputTW, ViewTW } from "@helpers/nativewind";
import { IPokemon } from "@interfaces/pokemon";
import { Dispatch, SetStateAction } from "react";
import { Controller } from "react-hook-form";
import useSearch from "./hooks";

interface IProps {
  setFilteredPokemon: Dispatch<SetStateAction<IPokemon[]>>;
  pokemons: IPokemon[];
}

const Search = ({ setFilteredPokemon, pokemons }: IProps) => {
  const { control, iconStyled, inputStyled } = useSearch({
    setFilteredPokemon,
    pokemons
  });

  return (
    <ViewTW>
      {IconGenerate("Search", 20, 20, iconStyled)}
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInputTW
            className="w-2/3 h-10 rounded-full border-[0.2px] border-slate-400 pl-10 pr-4 bg-slate-200 text-slate-600 shadow-md font-montserrat-r"
            placeholder="Search Pokémon..."
            placeholderTextColor="gray"
            style={inputStyled}
            keyboardType="default"
            onChangeText={onChange}
            value={value ?? ""}
          />
        )}
        name="query"
        defaultValue=""
      />
    </ViewTW>
  );
};

export default Search;
