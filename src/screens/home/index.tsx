import { Spinner } from "@components/spinner";
import { Images } from "@helpers/assets/images";
import { ImageTW, ScrollViewTW, TextTW, ViewTW } from "@helpers/nativewind";
import SafeAreaLayout from "@layouts/safe-area";
import { StatusBar } from "react-native";
import { useHome } from "./hooks";
import PokeList from "./components/list";
import Search from "./components/search";

const HomeScreen = () => {
  const { loading, filteredPokemon } = useHome();

  return (
    <>
      {!loading ? (
        <SafeAreaLayout className="bg-slate-100">
          <StatusBar
            animated={true}
            translucent={true}
            barStyle={loading ? "light-content" : "dark-content"}
          />
          <ImageTW
            className="h-28 w-28 absolute top-3 right-3 z-10 opacity-30"
            source={Images.HomeBg}
          />
          <ViewTW className="bg-slate-100 px-4 pb-4">
            <TextTW className="font-montserrat-b text-5xl">Pokedex</TextTW>
            <Search />
          </ViewTW>
          <ScrollViewTW contentInsetAdjustmentBehavior="automatic">
            <PokeList pokemons={filteredPokemon} />
          </ScrollViewTW>
        </SafeAreaLayout>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default HomeScreen;
