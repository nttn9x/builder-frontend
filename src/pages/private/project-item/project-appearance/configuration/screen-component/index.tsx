import React from "react";

import { COMPONENT_TYPES } from "constants/common";

import Header from "./header.component";
import Category from "./category.component";
import CategorySlider from "./category-slider.component";

import { useProjectItemContext } from "../../../project-item.context";

const ScreenItem = () => {
  const {
    state: {
      history: { component },
    },
  } = useProjectItemContext();

  const _renderComponent = () => {
    if (component === COMPONENT_TYPES.CATEGORY) {
      return <Category />;
    }
    return <div>a</div>;
  };

  return (
    <>
      <Header />
      {_renderComponent()}
    </>
  );
};

export default ScreenItem;
