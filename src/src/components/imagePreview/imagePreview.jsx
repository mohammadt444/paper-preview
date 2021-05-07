import React, { useEffect, useState } from "react";
import { getDirectLink } from "@web-lite/storage";
import { openModal } from "./imagePreview.helper";
// style
import useStyle from "./imagePreview.style";

function ImagePreview({ fileId }) {
  const classes = useStyle();
  const [url, setUrl] = useState();
  useEffect(() => {
    setUrl(getDirectLink(fileId));
  }, [fileId]);
  return (
    <img
      onClick={() => openModal(url)}
      className={classes.image}
      src={url}
      alt="img-preview"
    />
  );
}

export default ImagePreview;
