import React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Grid, Typography } from "components/ui-libraries";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
    },
    title: {
      fontWeight: theme.typography.fontWeightLight,
      marginRight: theme.spacing(1.5),
    },
  })
);

const StepOneTitle = React.memo(() => {
  const classes = useStyles();
  const { t } = useTranslation(["project"]);
  return (
    <Grid xs={12} item>
      <div className={classes.header}>
        <Typography className={classes.title} variant={"h2"}>
          {t("enter_app_name")}
        </Typography>
        <Typography color={"textSecondary"}>
          {`(${t("you_can_change_it_later")})`}
        </Typography>
      </div>
    </Grid>
  );
});

export default StepOneTitle;
