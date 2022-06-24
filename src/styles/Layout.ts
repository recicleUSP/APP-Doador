import { Dimensions, PixelRatio } from "react-native";

export const Width = Dimensions.get("window").width;
export const Height = Dimensions.get("window").height;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();
