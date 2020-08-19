import React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Grid, Typography } from "components/ui-libraries";

import WordPressImage from "styles/images/modules/project/wordPress_blue_logo.png";

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
    logo: {
      width: 60,
    },
  })
);

const StepTwoTitle = React.memo(() => {
  const classes = useStyles();
  const { t } = useTranslation(["project"]);
  return (
    <>
      <Grid item>
        <img className={classes.logo} src={WordPressImage} alt={"WordPress"} />
      </Grid>
      <Grid xs={9} item>
        <Typography className={classes.title} variant={"h2"}>
          {t("word_press")}
        </Typography>
      </Grid>
    </>
  );
});

export default StepTwoTitle;
