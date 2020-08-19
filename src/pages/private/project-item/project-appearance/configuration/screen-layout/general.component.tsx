import React from "react";
import { useTranslation } from "react-i18next";

import { Grid, TextField } from "components/ui-libraries";

const General = React.memo(() => {
  const { t } = useTranslation("project");

  return (
    <Grid container spacing={3}>
      <Grid xs={12} item style={{ position: "relative" }}>
        <TextField fullWidth label={t("label")} variant="outlined" />
      </Grid>
    </Grid>
  );
});

export default General;
