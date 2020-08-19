import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Tab, TabPanel, Tabs } from "components/ui-libraries";

import { useProjectItemContext } from "../../../project-item.context";

import Header from "./header.component";
import General from "./general.component";
import Layout from "./layout.component";

const useStyles = makeStyles((theme: Theme) => ({
  tabPanel: {
    padding: theme.spacing(1.5),
  },
  indicator: {
    display: "none",
  },
  tabRoot: {
    minHeight: 35,
    color: theme.palette.action.disabled,
    fontSize: "0.75em",
  },
  tabSelected: { color: theme.palette.text.primary },
  tabsRoot: {
    minHeight: 35,
    border: `1px solid ${theme.palette.divider}`,
    margin: theme.spacing(1.5),
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius * 4,
  },
}));

const ScreenLayout = React.memo(() => {
  const { t } = useTranslation("project");
  const classes = useStyles();
  const {
    state: {
      history: { layout },
    },
    setState,
  } = useProjectItemContext();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setState((draft: any) => {
      draft.history.layout.tab = newValue;
    });
  };

  return (
    <>
      <Header />
      <Tabs
        classes={{ indicator: classes.indicator, root: classes.tabsRoot }}
        value={layout.tab}
        onChange={handleChange}
        indicatorColor={"primary"}
        centered
      >
        <Tab
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
          label={t("layout")}
        />
        <Tab
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
          label={t("general")}
        />
      </Tabs>
      <TabPanel className={classes.tabPanel} value={layout.tab} index={0}>
        <Layout />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={layout.tab} index={1}>
        <General />
      </TabPanel>
    </>
  );
});

export default ScreenLayout;
