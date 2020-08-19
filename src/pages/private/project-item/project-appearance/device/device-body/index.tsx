import React, { useCallback, useMemo } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import _get from "lodash/get";

import { Typography } from "components/ui-libraries";

import { COMPONENT_TYPES, STEP_TYPES } from "constants/common";

import Logo from "pages/private/project-item/common/logo.component";
import Category from "./category.component";
import CategorySlider from "./slider.component";

import { useProjectItemContext } from "../../../project-item.context";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    screenBody: {
      flex: 1,
      background: "#fff",
    },
    screenEmpty: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    screenEmptyText: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
  })
);

const DeviceBody = ({ ios }: any) => {
  const classes = useStyles();
  const {
    state: {
      data: {
        name,
        config: { layout },
      },
      history: {
        step,
        layout: { name: id },
      },
    },
  } = useProjectItemContext();
  const components = useMemo(() => {
    try {
      return _get(layout[id], "order", []);
    } catch (e) {
      return [];
    }
  }, [id, layout]);

  const _renderComponent = useCallback((item: any, index: number) => {
    switch (item.id) {
      case COMPONENT_TYPES.CATEGORY:
        return <Category key={index}></Category>;
      case COMPONENT_TYPES.CATEGORY_SLIDER:
        return <CategorySlider key={index}></CategorySlider>;
      default:
        return <div key={index}></div>;
    }
  }, []);

  if (step === STEP_TYPES.Root) {
    return (
      <div className={classes.screenEmpty}>
        <Typography className={classes.screenEmptyText} variant={"h3"}>
          {name}
        </Typography>
      </div>
    );
  }

  return (
    <>
      <Logo />
      <div className={clsx(classes.screenBody, {})}>
        {(components || []).map((c: any, i: number) => _renderComponent(c, i))}
      </div>
    </>
  );
};

export default DeviceBody;
