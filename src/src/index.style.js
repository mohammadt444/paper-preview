import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
  wrapper: {
    marginBottom: 10,
    width: "100%",
  },
});

export default useStyle;
