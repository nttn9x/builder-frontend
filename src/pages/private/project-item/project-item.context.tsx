import React, { createContext, useContext, useMemo } from "react";
import { withRouter } from "react-router";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

import _clone from "lodash/clone";
import _get from "lodash/get";

import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import { useQuery } from "@apollo/client";

import {
  COMPONENT_TYPES,
  COMPONENTS,
  SCREEN_TYPES,
  STEP_TYPES,
} from "constants/common";

import { FETCH_PROJECT_ITEM_QUERY } from "queries/project.query";
import ProjectEmpty from "./project-item-empty.component";

export const wooCommerceState = {
  url: "",
  consumerKey: "",
  consumerSecret: "",
};

const configState = {
  wooCommerce: { ...wooCommerceState },
  layout: null,
};

const historyState = {
  step: 2,
  // step: STEP_TYPES.Root,
  layout: {
    tab: 0,
    name: "HOME",
    // tab: 0,
    // name: null,
  },
  component: "CATEGORY",
  // component: null,
};


export const stateDefault = {
  done: false,
  history: historyState,
  data: {
    name: "",
    config: _clone(configState),
  },
};

const checkValue = (project: any) => {
  let dataClone: any = JSON.parse(JSON.stringify(project));

  if (!dataClone.config) {
    dataClone.config = _clone(configState);
  }

  if (!dataClone.config.wooCommerce) {
    dataClone.config.wooCommerce = { ...wooCommerceState };
  }

  if (!dataClone.config.layout || Array.isArray(dataClone.config.layout)) {
    dataClone.config.layout = {};
  }

  if (!dataClone.config.layout[SCREEN_TYPES.Home]) {
    dataClone.config.layout[SCREEN_TYPES.Home] = {
      order: [...COMPONENTS],
      components: {
        [COMPONENT_TYPES.CATEGORY]: [],
        [COMPONENT_TYPES.CATEGORY_SLIDER]: [],
      },
    };
  }

  if (!dataClone.config.layout[SCREEN_TYPES.Category]) {
    dataClone.config.layout[SCREEN_TYPES.Category] = {
      order: [...COMPONENTS],
      components: {},
    };
  }

  return dataClone;
};

export const ProjectItemContext = createContext<any>(_clone(stateDefault));

const ProjectItemProvider = ({ children, history, ...props }: any) => {
  const [state, setState] = useImmer(_clone(stateDefault));
  const params: any = useParams();
  const wooCommerceRestApi = useMemo(() => {
    const wooCommerce = state.data.config.wooCommerce;

    try {
      return new WooCommerceRestApi({
        ...wooCommerce,
        version: "wc/v3",
        queryStringAuth: true,
      });
    } catch (e) {
      return null;
    }
  }, [state.data.config.wooCommerce]);

  useQuery(FETCH_PROJECT_ITEM_QUERY, {
    variables: { id: params.id },
    onCompleted: (res) => {
      const dataRead = _get(res, "project", {});

      const dataClone: any = checkValue(dataRead);

      setState((draft) => {
        draft.done = true;
        draft.data = dataClone;
      });
    },
  });

  return (
    <ProjectItemContext.Provider
      value={{
        state,
        setState,
        wooCommerceRestApi,
      }}
      {...props}
    >
      {!state.done && <ProjectEmpty />}
      {state.done && children}
    </ProjectItemContext.Provider>
  );
};

export const useProjectItemContext = () => useContext<any>(ProjectItemContext);

export default withRouter(ProjectItemProvider);
