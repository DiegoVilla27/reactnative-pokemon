import { SafeAreaViewTW } from "@helpers/nativewind";
import { StyleProp, ViewStyle } from "react-native";

interface IProps {
  children: React.ReactNode;
  className?: string | undefined;
  style?: StyleProp<ViewStyle>;
}

const SafeAreaLayout = ({ children, className, style }: IProps) => {
  return (
    <SafeAreaViewTW
      className={className}
      style={style}
    >
      {children}
    </SafeAreaViewTW>
  );
};

export default SafeAreaLayout;
