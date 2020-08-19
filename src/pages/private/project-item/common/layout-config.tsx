import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      padding: theme.spacing(3),
    },
    body: {
      padding: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "2.5em",
      boxShadow: theme.shadows["2"],
    },
  })
);

const LayoutConfig = ({ className, ...props }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={`${classes.body} ${className}`} {...props} />
    </div>
  );
};

export default LayoutConfig;
