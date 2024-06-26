import { ViewTW } from "@helpers/nativewind";
import { Bounce } from "react-native-animated-spinkit";

export const Spinner = () => {
  return (
    <ViewTW className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black z-50">
      <Bounce
        size={48}
        color="#FFF"
      />
    </ViewTW>
  );
};
