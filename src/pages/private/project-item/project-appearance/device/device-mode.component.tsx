import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Tab, Tabs } from "components/ui-libraries";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
    },
  })
);

const DeviceMode = React.memo(({ value, handleChange }: any) => {
  const classes = useStyles();
  const { t } = useTranslation("project");

  return (
    <Tabs
      indicatorColor={"primary"}
      classes={{ root: classes.root }}
      value={value}
      onChange={handleChange}
    >
      <Tab label={t("ios")} />
      <Tab label={t("android")} />
    </Tabs>
  );
});

export default DeviceMode;
