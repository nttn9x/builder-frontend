import React from "react";
import { LayoutPage } from "components/ui-own";
import Menu from "./common/menu";

import ProjectRoute from "./project-item.route";

import ProjectItemProvider from "./project-item.context";

import useStyles from "./project-item.styles";

const ProjectItem = () => {
  const classes = useStyles();

  return (
    <ProjectItemProvider>
      <LayoutPage bodyStyle={classes.root}>
        <Menu />
        <ProjectRoute />
      </LayoutPage>
    </ProjectItemProvider>
  );
};

export default ProjectItem;
