import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { LayoutPage } from "components/ui-own";

import ListData from "./list-data";
import ListHeader from "./list-header.component";

import(/* webpackPrefetch: true */ "pages/private/project-add");
import(/* webpackPrefetch: true */ "pages/private/project-item");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
      flexDirection: "column",
      padding: `0 ${theme.spacing(3)}px`,
    },
  })
);

const ProjectList = () => {
  const classes = useStyles();

  return (
    <LayoutPage animated bodyStyle={classes.root}>
      <ListHeader />
      <ListData />
    </LayoutPage>
  );
};

export default ProjectList;
