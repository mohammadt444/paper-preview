import React, { useEffect, useState } from "react";
import { getDirectLink } from "@web-lite/storage";
// style
import useStyle from "./imagePreview.style";

function ImagePreview({ fileId }) {
  const classes = useStyle();
  const [url, setUrl] = useState();
  useEffect(() => {
    setUrl(getDirectLink(fileId));
  }, [fileId]);
  return <img className={classes.image} src={url} alt="img-preview" />;
}

export default ImagePreview;
