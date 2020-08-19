import React from "react";
import { Typography } from "components/ui-libraries";
import { useTranslation } from "react-i18next";

import useStyles from "./slider-item.styles";

const EmptySlide = ({ index, ...props }: any) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.containerStyle} {...props}>
      <div className={classes.bodyStyle}>
        <div className={classes.paperStyle}>
          <Typography className={classes.textEmpty} variant={"h6"}>{`${t(
            "banner"
          )} ${index}`}</Typography>
        </div>
      </div>
    </div>
  );
};

export default EmptySlide;
