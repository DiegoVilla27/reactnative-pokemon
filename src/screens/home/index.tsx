import { Spinner } from "@components/spinner";
import { Images } from "@helpers/assets/images";
import { ImageTW, ScrollViewTW, TextTW, ViewTW } from "@helpers/nativewind";
import SafeAreaLayout from "@layouts/safe-area";
import { StatusBar } from "react-native";
import PokeList from "./components/list";
import Search from "./components/search";
import { useHome } from "./hooks";

const HomeScreen = () => {
  const { loading, filteredPokemon, safeAreaStyles } = useHome();

  return (
    <SafeAreaLayout
      className={loading ? "bg-black" : "bg-slate-100"}
      style={safeAreaStyles}
    >
      <StatusBar
        animated={true}
        barStyle={loading ? "light-content" : "dark-content"}
        backgroundColor={loading ? "#000000" : "#f1f5f9"}
      />
      {!loading ? (
        <>
          <ImageTW
            className="h-28 w-28 absolute top-3 right-3 z-10 opacity-30"
            source={Images.HomeBg}
          />
          <ViewTW className="bg-slate-100 px-4 pb-4">
            <TextTW className="font-montserrat-b text-5xl text-black">
              Pokedex
            </TextTW>
            <Search />
          </ViewTW>
          <ScrollViewTW>
            <PokeList pokemons={filteredPokemon} />
          </ScrollViewTW>
        </>
      ) : (
        <Spinner />
      )}
    </SafeAreaLayout>
  );
};

export default HomeScreen;
