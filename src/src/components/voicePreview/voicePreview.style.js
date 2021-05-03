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
      "linear-gradient(269deg, rgba(255,118,0,1) 0%, rgba(224,0,0,1) 100%);",
    boxSizing: "border-box",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: 10,
  },
  text: {
    fontSize: 12,
    color: "white",
    fontWeight: 400,
    direction: "rtl",
    textAlign: "right",
  },
  size: {
    fontSize: 12,
    fontWeight: 400,
    color: "rgba(255,255,255,0.57)",
    marginBottom: 10,
    textAlign: "right",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 28,
  },
  recordWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 4,
  },
  uploadText: {
    fontSize: 14,
    color: "white",
    fontWeight: 400,
    direction: "rtl",
  },
  progress: {
    fontSize: 17,
    color: "white",
    fontWeight: 400,
  },
  progressBarWrapper: {
    width: "100%",
    display: "flex",
    height: 12.4,
    background: "rgba(255,255,255,0.44)",
    borderRadius: 3,
  },
  progressBar: {
    display: "flex",
    background: "white",
    margin: 3,
    borderRadius: 1,
  },
  playIcon: {
    width: 38.651,
    display: "flex",
    viewBox: "0 0 38.651 19.938",
    cursor: "pointer",
  },
  playIconWrapper: {
    padding: 0,
    display: "flex",
    borderRadius: 5,
    marginRight: 4.3,
    "&:hover": {
      backgroundColor: "white",
    },
  },
});

export default useStyle;
