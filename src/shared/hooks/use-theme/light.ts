import {THEME as commonTheme} from "./theme";
import {ITheme, ThemeColors, ThemeGradients, ThemeSizes, ThemeSpacing,} from "./types/theme";

export const COLORS: ThemeColors = {
    redOrange: '#FC712C',
    black: '#3D3D3D',
    darkGrey: '#757575',

    transparency80: "#0000000D",

    beige: '#F4D5AC',
    beigeLight: '#F4D5AC',
    primary: "#ED975B",
    green: "#2B8280",
    greenLight: "#2B8280",
    orange: "#ED975B",
    red: "#DE3452",
    yellow: "#FECC59",
    pink: "#FF7483",
    turquase: "#08B1BD",
    turquaseLight: "#88CACE",
    supportGreen: "#00AE27",
    gray: "#C9C7C7",
    white: "#FFFFFF",
};

export const GRADIENTS: ThemeGradients = {
    /* primary: ["#FF0080", "#7928CA"],
     secondary: ["#A8B8D8", "#627594"],
     info: ["#21D4FD", "#2152FF"],
     success: ["#98EC2D", "#17AD37"],
     warning: ["#FBCF33", "#F53939"],
     danger: ["#FF667C", "#EA0606"],

     light: ["#EBEFF4", "#CED4DA"],
     dark: ["#3A416F", "#141727"],

   /!*  white: [String(COLORS.white), "#EBEFF4"],
     black: [String(COLORS.black), "#141727"],*!/

     divider: ["rgba(255,255,255,0.3)", "rgba(102, 116, 142, 0.6)"],
     menu: [
       "rgba(255, 255, 255, 0.2)",
       "rgba(112, 125, 149, 0.5)",
       "rgba(255, 255, 255, 0.2)",
     ],*/
};

export const SIZES: ThemeSizes = {
    // global sizes
    base: 8,
    padding20: 20,
    padding10: 10,
    padding5: 5,

    // fonts sizes
    h1: 24,
    h2: 20,
    text1: 18,
    text2: 15,
    text3: 12,
    button: 18,

    // button sizes
    buttonBorder: 1,
    buttonRadius: 8,

    // button shadow
    shadowOffsetWidth: 0,
    shadowOffsetHeight: 7,
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,

    // input sizes
    inputHeight: 46,
    inputBorder: 1,
    inputRadius: 8,
    inputPadding: 12,
};

export const SPACING: ThemeSpacing = {
    /** xs: 4px */
    xs: SIZES.base * 0.5,
    /** s: 8px */
    s: SIZES.base * 1,
    /** sm: 16px */
    sm: SIZES.base * 2,
    /** m: 24px */
    m: SIZES.base * 3,
    /** md: 32px */
    md: SIZES.base * 4,
    /** l: 40px */
    l: SIZES.base * 5,
    /** xl: 48px */
    xl: SIZES.base * 6,
    /** xxl: 56px */
    xxl: SIZES.base * 7,
};

export const LIGHT: ITheme = {
    ...commonTheme,
    colors: COLORS,
    gradients: GRADIENTS,
    sizes: {...SIZES, ...commonTheme.sizes, ...SPACING},
};
