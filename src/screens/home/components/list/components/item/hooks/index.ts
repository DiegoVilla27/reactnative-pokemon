import routes, { IRoutes } from "@routes/list";
import store from "@/store";
import { IPokemon } from "@interfaces/pokemon";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { toggle } from "@store/pokemon";
import { useDispatch } from "react-redux";

export const usePokeItem = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const navigation = useNavigation<NavigationProp<IRoutes>>();

  const selectPokemon = (pokemon: IPokemon) => {
    dispatch(toggle({ pokemon }));
    navigation.navigate(routes.pokemon as never);
  };

  return {
    selectPokemon
  };
};
