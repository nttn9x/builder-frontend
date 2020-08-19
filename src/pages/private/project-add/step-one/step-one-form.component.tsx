import React from "react";
import { useTranslation } from "react-i18next";
import { Theme, withStyles } from "@material-ui/core/styles";

import { Button, Grid, TextField, Tooltip } from "components/ui-libraries";

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.getContrastText(theme.palette.error.main),
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: theme.spacing(1.5),
  },
  arrow: {
    color: theme.palette.error.main,
  },
}))(Tooltip);

const StepOneForm = ({ state, handleChange }: any) => {
  const { t } = useTranslation(["project"]);

  return (
    <Grid xs={12} item style={{ position: "relative" }}>
      <TextField
        autoFocus
        fullWidth
        name={"name"}
        value={state.name}
        onChange={handleChange}
      />
      <LightTooltip
        PopperProps={{
          disablePortal: true,
        }}
        open={state.showError}
        title={t("app_name_should_not_be_blank")}
        placement="top-end"
        disableFocusListener
        disableHoverListener
        disableTouchListener
        arrow
      >
        <Button style={{ position: "absolute", right: 0 }}></Button>
      </LightTooltip>
    </Grid>
  );
};

export default StepOneForm;
