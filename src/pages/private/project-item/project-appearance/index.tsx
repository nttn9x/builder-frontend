import React from "react";

import Device from "./device";
import Configuration from "./configuration";
import useProjectItemContext from "./project-appearance.hook";

const ProjectAppearance = () => {
  useProjectItemContext();

  return (
    <>
      <Device />
      <Configuration />
    </>
  );
};

export default ProjectAppearance;
