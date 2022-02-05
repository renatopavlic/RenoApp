import { createTheme } from "@mui/material";
import { customDarkPallete, customPallete } from "./consts";

export const theme = createTheme({
  palette: customPallete,
  spacing: 6,
  typography: {
    fontFamily: "Quicksand, sans-serif",
    body1: {
      fontSize: "calc(13px * var(--font-size-multiplier, 1))",
    },
    body2: {
      fontSize: "calc(13px * var(--font-size-multiplier, 1))",
    },
    subtitle1: {
      fontSize: "calc(12px * var(--font-size-multiplier, 1))",
    },
    h4: {
      fontSize: 20,
      lineHeight: "24px",
      fontWeight: 700,
    },
    h5: {
      fontSize: 15,
      lineHeight: "24px",
      fontWeight: 700,
    },
  },
});

export const darkTheme = createTheme({
  palette: customDarkPallete,
  spacing: 6,
  typography: {
    fontFamily: "Quicksand, sans-serif",
    body1: {
      fontSize: "calc(13px * var(--font-size-multiplier, 1))",
    },
    body2: {
      fontSize: "calc(13px * var(--font-size-multiplier, 1))",
    },
    subtitle1: {
      fontSize: "calc(12px * var(--font-size-multiplier, 1))",
    },
    h4: {
      fontSize: 20,
      lineHeight: "24px",
      fontWeight: 700,
    },
    h5: {
      fontSize: 15,
      lineHeight: "24px",
      fontWeight: 700,
    },
  },
});

/* declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
      reno: string;
    };
    customColors: {
      first: string;
      second: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
      reno?: string;
    };
    customColors?: {
      first?: string;
      second?: string;
    };
  }
} */
