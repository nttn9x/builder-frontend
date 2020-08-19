import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Image from "styles/images/modules/project/woo-commerce.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "100%",
      height: "100%",
    },
  })
);

const Guild = React.memo(() => {
  const classes = useStyles();

  return <img className={classes.image} src={Image} alt={"guide"} />;
});

export default Guild;
