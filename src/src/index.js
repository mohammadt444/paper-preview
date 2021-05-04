import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { normalizeData } from "./helper/utilities/function";
import ContentMapper from "./helper/components/contentMapper";
import "./helper/utilities/loading";
import theme from "./setup/theme";
import "./css/index.scss";
// style
import useStyle from "./index.style";
import { cns } from "./helper/style/utils";

export const PreviewComponent = ({ data }) => {
  const contents = normalizeData(data);
  const classes = useStyle();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={cns(classes.container, "scroll-bar")}>
        {contents.map((content) => (
          <div key={content._id} className={classes.wrapper}>
            <ContentMapper
              type={content.type}
              data={content.data}
            />
          </div>
        ))}
      </div>
    </MuiThemeProvider>
  );
};
