import * as R from "ramda";

export const getAparatUrlByLink = (url) => {
  const urlParts = R.split("/", url);
  const videoHash = R.nth(R.startsWith("https", url) ? 4 : 2, urlParts);

  return `https://www.aparat.com/video/video/embed/videohash/${videoHash}/vt/frame`;
};
