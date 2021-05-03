import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  viewContainer: {
    display: "flex",
    position: "relative",
    width: "100%",
    paddingBottom: "56.25%",
  },
  iframe: {
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "none",
    top: 0,
    left: 0,
  },
});

export default useStyle;
