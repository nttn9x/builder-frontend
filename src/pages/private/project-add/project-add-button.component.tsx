import React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Button, Grid } from "components/ui-libraries";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: 180,
      height: 40,
      borderRadius: 20,
    },
  })
);

const ProjectAddButtonComponent = React.memo(
  ({ final, handleBack, handleSave }: any) => {
    const classes = useStyles();
    const { t } = useTranslation(["project"]);

    return (
      <Grid container justify={"flex-end"} spacing={3}>
        {final && (
          <Grid item>
            <Button onClick={handleBack} className={classes.button}>
              {t("back")}
            </Button>
          </Grid>
        )}
        <Grid item>
          <Button
            onClick={handleSave}
            className={classes.button}
            color={"primary"}
            variant={"contained"}
          >
            {t(final ? "build" : "next")}
          </Button>
        </Grid>
      </Grid>
    );
  }
);

export default ProjectAddButtonComponent;
