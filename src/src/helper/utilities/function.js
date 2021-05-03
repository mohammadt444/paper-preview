import * as R from "ramda";
import { v4 as uuidv4 } from "uuid";

export const normalizeData = (data) =>
  R.compose(
    R.map((val) => ({ _id: uuidv4(), type: val.type, data: val.meta })),
    R.map(R.omit(["index", "paperId"])),
    R.sortBy(R.prop("index"))
  )(data);

const format = (num, decimals = 0) =>
  num.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });

export const getDecimalSize = (num) => {
  if (num < 1024) return num + "b";
  else if (num < 1024 * 1024) return format(num / 1024) + "Kb";
  else if (num < 1024 * 1024 * 1024)
    return format(num / (1024 * 1024), 1) + "Mb";
  else if (num < 1024 * 1024 * 1024 * 1024)
    return format(num / (1024 * 1024 * 1024), 1) + "Gb";
};

export const downloadFile = (() => {
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";

  return (url, fileName) => {
    a.href = url;
    a.target = "_blank";
    a.download = fileName;
    a.click();
  };
})();
