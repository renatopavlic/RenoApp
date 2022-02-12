import { makeStyles } from "@mui/styles";

export const useTodoListStyle = makeStyles({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
  },
});

export const useTodoListItemStyle = makeStyles({
  card: {
    padding: 10,
    maxWidth: 275,
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  description: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginBottom: 0,
    fontWeight: 900,
    textTransform: "uppercase",
  },
  icon: {
    cursor: "pointer",
  },
});
