import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Paper } from "components/ui-libraries";

import Navigation from "./navigation.component";
import Info from "./info.component";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: "0 0 200px",
      height: "100%",
      background: "transparent",
    },
  })
);

const Menu = React.memo(() => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Info />
      <Navigation />
    </Paper>
  );
});

export default Menu;
