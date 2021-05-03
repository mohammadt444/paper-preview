import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    padding: 0,
    margin: 0,
    border: "1px solid #CCCCCC",
    borderRadius: 7,
    background:
      "linear-gradient(270deg, rgba(255,118,0,1) 0%, rgba(224,0,0,1) 100%);",
    boxSizing: "border-box",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: 10,
  },
  fileName: {
    fontSize: 12,
    color: "white",
    fontWeight: 700,
  },
  size: {
    fontSize: 12,
    fontWeight: 400,
    color: "rgba(255,255,255,0.57)",
  },
  download: {
    color:
      "linear-gradient(270deg, rgba(255,118,0,1) 0%, rgba(224,0,0,1) 100%);",
    borderRadius: 5,
    height: 24,
    width: 54,
    padding: 0,
    backgroundColor: "white",

    "&:hover": {
      background: "white",
    },
  },
});

export default useStyle;
