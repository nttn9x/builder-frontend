import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: "0 0 50px",
      padding: `0 ${theme.spacing(1.5)}px`,
      backgroundColor: theme.palette.primary.light,
      display: "flex",
      alignItems: "center",
    },
  })
);

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>Logo</Typography>
    </div>
  );
};

export default Logo;
