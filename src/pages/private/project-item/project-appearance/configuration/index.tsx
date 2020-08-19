import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Container } from "components/ui-own";

import { STEP_TYPES } from "constants/common";

import ScreenList from "./screen-list.component";
import ScreenComponent from "./screen-component";
import ScreenLayout from "./screen-layout";

import { useProjectItemContext } from "../../project-item.context";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      flex: "0 0 350px",
      boxShadow: theme.shadows["2"],
      backgroundColor: theme.palette.background.paper,
    },
  });
});

const Configuration = React.memo(() => {
  const classes = useStyles();
  const {
    state: {
      history: { step },
    },
  } = useProjectItemContext();

  return (
    <Container className={classes.root}>
      {step === STEP_TYPES.Root && <ScreenList />}
      {step === STEP_TYPES.Layout && <ScreenLayout />}
      {step === STEP_TYPES.Component && <ScreenComponent />}
    </Container>
  );
});

export default Configuration;
