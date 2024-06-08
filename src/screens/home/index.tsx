import { Icons } from "@helpers/assets/icons";
import { Images } from "@helpers/assets/images";
import { TextBox, ViewBox } from "@helpers/nativewind";
import SafeAreaLayout from "@layouts/safe-area";
import {
  Image,
  ImageStyle,
  ScrollView,
  StatusBar,
  StyleProp,
  ViewStyle
} from "react-native";

const HomeScreen = () => {
  const safeAreaStyles: StyleProp<ViewStyle> = {
    backgroundColor: "red"
  };
  const imageStyles: StyleProp<ImageStyle> = {
    height: 120,
    width: 120,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 2
  };

  return (
    <SafeAreaLayout style={safeAreaStyles}>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle={"light-content"}
      />
      <Image
        style={imageStyles}
        source={Images.HomeBg}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ViewBox className="bg-gray-200">
          <Icons.Bug
            width={100}
            height={100}
          />
          <TextBox className="text-blue-500 text-lg">
            Hello, Tailwind with NativeWind!
          </TextBox>
        </ViewBox>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default HomeScreen;
