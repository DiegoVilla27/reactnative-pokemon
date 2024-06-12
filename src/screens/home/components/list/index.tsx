import { IPokemon } from "@interfaces/pokemon";
import PokeItem from "./components/item";
import { ViewTW } from "@/helpers/nativewind";

interface IProps {
  pokemons: IPokemon[];
}

const PokeList = ({ pokemons }: IProps) => {
  if (pokemons.length === 0) {
    return null;
  }

  return (
    <ViewTW className="p-4 pt-0 pb-28">
      {pokemons.map((pokemon: IPokemon) => (
        <PokeItem
          key={pokemon.name}
          pokemon={pokemon}
        />
      ))}
    </ViewTW>
  );
};

export default PokeList;
