import { Icons } from "@helpers/assets/icons";
import { StyleProp, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

const isValidIconName = (name: string): name is keyof typeof Icons => {
  return name in Icons;
};

const IconGenerate = (
  name: string,
  width: number,
  height: number,
  styles?: StyleProp<ViewStyle>
) => {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  if (!isValidIconName(name)) {
    return null;
  }
  const IconComponent: React.FC<SvgProps> = Icons[name];
  return (
    <IconComponent
      width={width}
      height={height}
      style={styles ?? null}
    />
  );
};

export default IconGenerate;
