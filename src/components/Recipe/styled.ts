import { makeStyles } from "@mui/styles";

export const useRecipeStyle = makeStyles({
  itemText: {
    fontSize: 20,
    textTransform: "uppercase",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    maxWidth: "100%",
  },
  listItem: {
    width: "fit-content",
  },
  image: {
    height: "100%",
    width: "100%",
    maxHeight: 400,
    objectFit: "cover",
  },
});
