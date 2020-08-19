import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Grid } from "components/ui-libraries";
import { Container } from "components/ui-own";

import StepOne from "./step-one";
import StepTwo from "./step-two";
import ProjectAddButton from "./project-add-button.component";

import useProjectAddHook from "./project-add.hook";

import BackgroundSVG from "styles/images/modules/project/app-builder-bg.svg";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${BackgroundSVG})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    body: {
      width: 600,
    },
    form: {
      width: "100%",
      height: 250,
    },
  })
);

const ProjectAdd = ({ history }: any) => {
  const classes = useStyles();
  const { t } = useTranslation(["project"]);
  const {
    state,
    loading,
    handleBack,
    handleSave,
    handleChange,
  } = useProjectAddHook({
    history,
  });

  return (
    <Container
      loading={{
        running: loading,
        message: t("we_are_making_an_amazing_for_you"),
      }}
      className={classes.container}
    >
      <div className={classes.body}>
        <div className={classes.form}>
          <Grid container spacing={3}>
            {state.step === 0 && (
              <StepOne state={state} handleChange={handleChange} />
            )}
            {state.step === 1 && (
              <StepTwo state={state} handleChange={handleChange} />
            )}
          </Grid>
          <ProjectAddButton
            final={state.step === 1}
            handleSave={handleSave}
            handleBack={handleBack}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProjectAdd;
