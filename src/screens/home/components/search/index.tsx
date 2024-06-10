import IconGenerate from "@helpers/assets/icons/icon-generate";
import { TextInputTW, ViewTW } from "@helpers/nativewind";
import useSearch from "./hooks";

const Search = () => {
  const { iconStyled, inputStyled } = useSearch();

  return (
    <ViewTW>
      {IconGenerate("Search", 20, 20, iconStyled)}
      <TextInputTW
        className="w-2/3 h-10 rounded-full border-[0.2px] border-slate-400 pl-10 pr-4 bg-slate-200 text-slate-600 shadow-md font-montserrat-r"
        placeholder="Search Pokémon..."
        placeholderTextColor="gray"
        style={inputStyled}
        keyboardType="default"
      />
    </ViewTW>
  );
};

export default Search;
