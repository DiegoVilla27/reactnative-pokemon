import { ViewTW } from "@/helpers/nativewind";
import { Text } from "react-native";
import { SkeletonSimpler } from "react-native-skeleton-simpler";
import usePokeItemSkeleton from "./hooks";

const PokeItemSkeleton = () => {
  const { headerStyle, statsStyle, typesStyle, imageStyles } =
    usePokeItemSkeleton();

  return (
    <ViewTW className="flex flex-row p-4 rounded-xl mb-4 justify-between bg-gray-400">
      <ViewTW className="flex flex-col">
        <SkeletonSimpler
          loading={true}
          layout={headerStyle}
        >
          <Text>Your content</Text>
        </SkeletonSimpler>
        <ViewTW className="flex flex-row">
          <SkeletonSimpler
            loading={true}
            containerStyle={statsStyle.containerStyle}
            layout={statsStyle.layout}
          >
            <Text>Your content</Text>
          </SkeletonSimpler>
          <SkeletonSimpler
            loading={true}
            containerStyle={typesStyle.containerStyle}
            layout={typesStyle.layout}
          >
            <Text>Your content</Text>
          </SkeletonSimpler>
        </ViewTW>
      </ViewTW>
      <SkeletonSimpler
        loading={true}
        layout={imageStyles}
      >
        <Text>Your content</Text>
      </SkeletonSimpler>
    </ViewTW>
  );
};

export default PokeItemSkeleton;
