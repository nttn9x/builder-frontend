import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "constants/navigation";

import ProjectAppearance from "./project-appearance";
import AppIcon from "./project-app-icon";
import LaunchScreen from "./project-launch-screen";

import Connectivity from "./project-connectivity";

const ProjectItem = () => {
  return (
    <>
      <Route exact path={ROUTES.PROJECT_ITEM_APP_ICON}>
        <AppIcon />
      </Route>
      <Route exact path={ROUTES.PROJECT_ITEM_LAUNCH_SCREEN}>
        <LaunchScreen />
      </Route>
      <Route exact path={ROUTES.PROJECT_ITEM_TABS}>
        <ProjectAppearance />
      </Route>
      <Route path={ROUTES.PROJECT_ITEM_SETTING}>
        <Connectivity />
      </Route>
    </>
  );
};

export default ProjectItem;
