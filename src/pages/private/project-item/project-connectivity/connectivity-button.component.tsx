import React from "react";
import { useTranslation } from "react-i18next";

import { ButtonCircular } from "components/ui-own";
import { Button, Grid } from "components/ui-libraries";

const ButtonAction = React.memo(({ loading, onSave, testConnection }: any) => {
  const { t } = useTranslation("project");
  return (
    <>
      <Grid item>
        <Button disabled={loading} variant={"outlined"} onClick={testConnection}>
          {t("common:test")}
        </Button>
      </Grid>
      <Grid item>
        <ButtonCircular
          loading={loading}
          onClick={onSave}
          color={"primary"}
          variant={"contained"}
        >
          {t("common:save")}
        </ButtonCircular>
      </Grid>
    </>
  );
});

export default ButtonAction;
