import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Typography } from "components/ui-libraries";
import { useProjectItemContext } from "../../project-item.context";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(1.5),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    nameApp: {
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);

const Info = React.memo(() => {
  const classes = useStyles();
  const {
    state: {
      data: { name },
    },
  } = useProjectItemContext();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.nameApp}
        variant={"subtitle1"}
        color={"textPrimary"}
      >
        {name}
      </Typography>
    </div>
  );
});

export default Info;
