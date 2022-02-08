import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { collorPallete } from "../../style/consts";

// dark #0077BB
// light #26AFF7
// right #048FDF

export const useWeatherStyle = makeStyles<Theme>(() => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: collorPallete.blue,
      clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)",
      padding: "75px 1.5rem",
    },
    title: {
      alignSelf: "start",
      color: collorPallete.gray,
      paddingBottom: "3rem",
    },
    cardContainer: {
      width: "100%",
      display: "flex",
      flexDirection: (props) => (props ? "column" : "row"),
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    formContainer: {
      backgroundColor: collorPallete.gray,
      padding: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: (props) => (props ? 0 : 50),
    },
  };
});

export const useWeatherCardStyle = makeStyles<Theme>(() => {
  return {
    container: {
      minWidth: 275,
      width: "100%",
      height: "100%",
      maxWidth: 600,
      minHeight: 300,
      marginTop: (props: any) => (props.md ? 50 : 0),
      marginLeft: (props: any) => (props.md ? 0 : 20),
    },
    content: {
      display: "flex",
      flexDirection: (props: any) => (props.md ? "column" : "row"),
      height: "100%",
    },
    contentLeft: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      flexGrow: 1,
      flexShrink: 0,
      padding: "0 30px",
      color: collorPallete.gray,
      background:
        "linear-gradient(to bottom right, #0077BB 0%, #26AFF7 100%) 100% no-repeat",
    },
    contentRight: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#048FDF",
    },
    divider: {
      backgroundColor: "white",
    },
    bigTitle: {
      fontSize: 30,
    },
  };
});
