import React from "react";
import parse from "html-react-parser";
// style
import useStyle from "./textPreview.style";

function TextPreview({ data }) {
  const classes = useStyle();
  return <div className={classes.textPreview}>{parse(data)}</div>;
}

export default TextPreview;
