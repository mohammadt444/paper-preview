import { getInfo } from "@web-lite/storage";
import { Button, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getDecimalSize, downloadFile } from "../../helper/utilities/function";
// style
import useStyle from "./filePreview.style";
// localization
import t from "./filePreview.local";

function FilePreview({ fileId }) {
  const classes = useStyle();
  const [fileName, setFileName] = useState();
  const [size, setSize] = useState();
  const [url, setUrl] = useState();
  useEffect(() => {
    getInfo(fileId)
      .then(({ fileName, size, directLink }) => {
        setFileName(fileName);
        setSize(size);
        setUrl(directLink);
      })
      .catch(console.log);
  }, [fileId]);
  return (
    <Paper elevation={0} className={classes.root}>
      <div className={classes.wrapper}>
        <div>
          <Typography className={classes.fileName}>{fileName}</Typography>
          <Typography className={classes.size}>
            {getDecimalSize(size)}
          </Typography>
        </div>

        <Button
          onClick={() => url && downloadFile(url, fileName)}
          className={classes.download}
        >
          {t.download}
        </Button>
      </div>
    </Paper>
  );
}

export default FilePreview;
