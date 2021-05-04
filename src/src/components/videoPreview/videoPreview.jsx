import React from "react";
// helpers
import { getAparatUrlByLink } from "./videoPreview.helper";

// style
import useStyle from "./videoPreview.style";

function VideoPreview({ data }) {
  const { url } = data;
  const classes = useStyle();
  return (
    <div className={classes.viewContainer}>
      <iframe
        className={classes.iframe}
        title="Aparat Video"
        src={getAparatUrlByLink(url)}
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  );
}

export default VideoPreview;
