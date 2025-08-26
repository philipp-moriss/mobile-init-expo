import { Dimensions, Platform } from "react-native";

import {
  ICommonTheme,
  ThemeFonts,
  ThemeLineHeights,
  ThemeWeights,
} from "./types/theme";

const { width, height } = Dimensions.get("window");

// Naming source: https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping
export const WEIGHTS: ThemeWeights = {
  // based on fontWeight

  h1: Platform.OS === "ios" ? "200" : "normal",
  h2: Platform.OS === "ios" ? "200" : "normal",
  text1: Platform.OS === "ios" ? "200" : "normal",
  text2: Platform.OS === "ios" ? "200" : "normal",
  text3: Platform.OS === "ios" ? "200" : "normal",
  button: Platform.OS === "ios" ? "200" : "normal",

  thin: Platform.OS === "ios" ? "100" : "normal",
  extralight: Platform.OS === "ios" ? "200" : "normal",
  light: Platform.OS === "ios" ? "300" : "normal",
  normal: Platform.OS === "ios" ? "400" : "normal",
  medium: Platform.OS === "ios" ? "500" : "normal",
  semibold: Platform.OS === "ios" ? "600" : "normal",
  bold: Platform.OS === "ios" ? "700" : "normal",
  extrabold: Platform.OS === "ios" ? "800" : "normal",
  black: Platform.OS === "ios" ? "900" : "normal",
};

export const ASSETS: any = {
  GeologicaRegular: require("./fonts/GeologicaRegular.ttf"),
  GeologicaSemiBold: require("./fonts/GeologicaSemiBold.ttf"),
  GeologicaMedium: require("./fonts/GeologicaMedium.ttf"),
  GeologicaLight: require("./fonts/GeologicaLight.ttf"),
  RobotoRegular: require("./fonts/Roboto-Regular.ttf"),
};
export const FONTS: ThemeFonts = {
  h1: "GeologicaSemiBold",
  h2: "GeologicaSemiBold",
  text1: "GeologicaSemiBold",
  text2: "GeologicaRegular",
  text3: "GeologicaRegular",
  button: "GeologicaRegular",
};

export const LINE_HEIGHTS: ThemeLineHeights = {
  h1: 24,
  h2: 25,
  text1: 22,
  text2: 15,
  text3: 12,
  button: 18,
};

export const THEME: ICommonTheme = {
  assets: { ...ASSETS },
  fonts: FONTS,
  weights: WEIGHTS,
  lines: LINE_HEIGHTS,
  sizes: { width, height },
};
