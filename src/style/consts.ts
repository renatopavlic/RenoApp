import createPalette from "@mui/material/styles/createPalette";

export const collorPallete = {
  gray: "#f4f1de",
  red: "#e07a5f",
  blue: "#3d405b",
  green: "#81b29a",
  gold: "#f2cc8f",
};

export const customPallete = createPalette({
  primary: {
    main: collorPallete.green,
  },
  secondary: {
    main: collorPallete.blue,
  },
  success: {
    main: collorPallete.green,
  },
  error: {
    main: collorPallete.red,
  },
  background: {
    paper: collorPallete.gray,
  },
  info: {
    main: collorPallete.gold,
  },
});

export const customDarkPallete = createPalette({
  mode: "dark",
  primary: { main: collorPallete.gold },
});
