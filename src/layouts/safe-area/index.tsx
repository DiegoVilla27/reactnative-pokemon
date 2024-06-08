import { SafeAreaView, StyleProp, ViewStyle } from "react-native";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SafeAreaLayout = ({ children, style = {} }: IProps) => {
  return <SafeAreaView style={style}>{children}</SafeAreaView>;
};

export default SafeAreaLayout;
