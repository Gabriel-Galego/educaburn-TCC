import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    primary: {
      700: "#996DFF",
    },
    orange: {
      700: "#c2410c",
      600: "#ea580c",
      500: "#f97316",
    },
    green: {
      700: "#00875F",
      500: "#00B37E",
      300: "#04D361",
    },
    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#C4C4CC",
      100: "#E1E1E6",
    },
    white: "#FFFFFF",
    BRAND_LIGHT: "#00B37E",
    BRAND_MID: "#00875F",
    WARNING_LIGHT: "#FBA94C",
    DANGER_LIGHT: "#F75A68",
    GRAY_LIGHT: "#D9D9D9",
  },

  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56,
  },
});
