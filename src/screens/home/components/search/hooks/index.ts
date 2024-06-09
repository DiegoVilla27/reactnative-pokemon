import { StyleProp, TextStyle, ViewStyle } from "react-native";

const useSearch = () => {
  const iconStyled: StyleProp<ViewStyle> = {
    position: "absolute",
    top: "50%",
    left: 13,
    transform: [{ translateY: -10 }],
    zIndex: 50
  };

  const inputStyled: StyleProp<TextStyle> = {
    elevation: 2
  };

  return {
    iconStyled,
    inputStyled
  };
};

export default useSearch;
