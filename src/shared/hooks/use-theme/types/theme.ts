import * as React from "react";
import {ColorValue, FlexStyle, ImageSourcePropType, ScaledSize, TextStyle,} from "react-native";

// Spacing types
export interface ISpacing
    extends Pick<
        FlexStyle,
        | "margin"
        | "marginVertical"
        | "marginHorizontal"
        | "marginLeft"
        | "marginRight"
        | "marginTop"
        | "marginBottom"
        | "padding"
        | "paddingVertical"
        | "paddingHorizontal"
        | "paddingLeft"
        | "paddingRight"
        | "paddingTop"
        | "paddingBottom"
    > {
}

export interface ITheme {
    colors: ThemeColors;
    gradients: ThemeGradients;
    sizes: ThemeSizes & ThemeSpacing & ICommonTheme["sizes"];
    assets: ThemeAssets;
    fonts: ThemeFonts;
    weights: ThemeWeights;
    lines: ThemeLineHeights;
}

export interface ICommonTheme {
    assets: ThemeAssets;
    fonts: ThemeFonts;
    weights: ThemeWeights;
    lines: ThemeLineHeights;
    sizes: {
        width: ScaledSize["width"];
        height: ScaledSize["height"];
    };
}

export interface IThemeProvider {
    children?: React.ReactNode;
    theme?: ITheme;
    setTheme?: (theme?: ITheme) => void;
}

export interface ThemeColors {


    white: ColorValue;


    beige: ColorValue;
    redOrange: ColorValue;
    black: ColorValue;
    darkGrey: ColorValue;
    beigeLight: ColorValue;

    transparency80: ColorValue;
    primary: ColorValue;
    green: ColorValue;
    greenLight: ColorValue;
    yellow: ColorValue;
    pink: ColorValue;
    turquase: ColorValue;
    turquaseLight: ColorValue;
    orange: ColorValue;
    supportGreen: ColorValue;
    gray: ColorValue;
    red: ColorValue;
}

export interface ThemeGradients {
    primary?: string[];
    secondary?: string[];
    tertiary?: string[];
    black?: string[];
    white?: string[];
    light?: string[];
    dark?: string[];
    gray?: string[];
    danger?: string[];
    warning?: string[];
    success?: string[];
    info?: string[];
    divider?: string[];
    menu?: string[];
}

export interface ThemeSizes {
    padding20: number;
    padding10: number;
    base: number;
    padding5: number;
    h1: number;
    h2: number,
    text1: number,
    text2: number,
    text3: number,
    button: number,
    buttonBorder: number;
    buttonRadius: number;
    inputHeight: number;
    inputBorder: number;
    inputRadius: number;
    inputPadding: number;
    shadowOffsetWidth: number;
    shadowOffsetHeight: number;
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
}

export interface ThemeSpacing {
    xs: number;
    s: number;
    sm: number;
    m: number;
    md: number;
    l: number;
    xl: number;
    xxl: number;
}

export interface ThemeWeights {

    h1: TextStyle["fontWeight"],
    h2: TextStyle["fontWeight"]
    text1: TextStyle["fontWeight"]
    text2: TextStyle["fontWeight"]
    text3: TextStyle["fontWeight"]
    button: TextStyle["fontWeight"]

    thin: TextStyle["fontWeight"];
    extralight: TextStyle["fontWeight"];
    light: TextStyle["fontWeight"];
    normal: TextStyle["fontWeight"];
    medium: TextStyle["fontWeight"];
    semibold?: TextStyle["fontWeight"];
    bold?: TextStyle["fontWeight"];
    extrabold?: TextStyle["fontWeight"];
    black?: TextStyle["fontWeight"];
}

export interface ThemeAssets {
    GeologicaRegular: any
    GeologicaSemiBold: any
    GeologicaMedium: any
    GeologicaLight: any
    RobotoRegular: any

    logo: ImageSourcePropType;
    /*
      header: ImageSourcePropType;
      background: ImageSourcePropType;

      ios: ImageSourcePropType;
      android: ImageSourcePropType;*/
}

export interface ThemeFonts {
    h1: string;
    h2: string,
    text1: string,
    text2: string,
    text3: string,
    button: string,
}

export interface ThemeLineHeights {
    h1: number;
    h2: number,
    text1: number,
    text2: number,
    text3: number,
    button: number,
}
