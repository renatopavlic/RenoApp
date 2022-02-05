import { makeStyles } from "@mui/styles";
import { collorPallete } from "../../style/consts";

export const useLogoStyle = makeStyles({
  first: {
    color: collorPallete.gold,
    fontSize: 30,
    textTransform: "uppercase",
    fontFamily: "Kanit",
  },
  second: {
    color: collorPallete.gray,
    fontSize: 30,
    textTransform: "uppercase",
    fontFamily: "Kanit",
  },
});
