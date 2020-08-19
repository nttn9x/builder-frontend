import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Toolbar, Typography } from "components/ui-libraries";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: "bold",
    },
  })
);

const ListHeader = React.memo(() => {
  const classes = useStyles();
  const { t } = useTranslation("project");

  return (
    <Toolbar disableGutters>
      <Typography className={classes.title} variant="h5">
        {t("my_apps")}
      </Typography>
    </Toolbar>
  );
});

export default ListHeader;
