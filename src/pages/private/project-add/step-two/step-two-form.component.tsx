import React from "react";
import { useTranslation } from "react-i18next";

import { Grid, TextField } from "components/ui-libraries";

const StepTwoForm = ({ state, handleChange }: any) => {
  const { t } = useTranslation(["project"]);

  return (
    <>
      <Grid xs={12} item style={{ position: "relative" }}>
        <TextField
          fullWidth
          name={"name"}
          onChange={handleChange}
          label={t("API")}
        />
      </Grid>
      <Grid xs={12} item style={{ position: "relative" }}>
        <TextField
          fullWidth
          name={"name"}
          onChange={handleChange}
          label={t("KEY")}
        />
      </Grid>
    </>
  );
};

export default StepTwoForm;
