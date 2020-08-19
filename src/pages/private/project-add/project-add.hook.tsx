import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client"

import { authState } from "store/auth";
import { SNACKBAR_TYPE } from "constants/common";
import { ADD_PROJECT_ITEM, GET_PROJECT_LIST_QUERY } from "queries/project.query";

import { getProjectItemURL } from "utils/navigation.util";

const useProjectAddHook = ({ history }: any) => {
  const auth = useRecoilValue(authState);
  const [state, setState] = useState<any>({
    step: 0,
    name: "",
    config: {},
    showError: false,
  });
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation(["error"]);
  const [addProject, { loading, error, data }] = useMutation(ADD_PROJECT_ITEM, {
    refetchQueries: [{ query: GET_PROJECT_LIST_QUERY }],
  });

  useEffect(() => {
    if (loading) {
      return;
    }

    if (error) {
      enqueueSnackbar(t("create_data"), {
        variant: SNACKBAR_TYPE.Error,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      return;
    }
    if (data) {
      history.push(getProjectItemURL(data.createProject.project.id));
    }
  }, [loading, error, data, t, history, enqueueSnackbar]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;

      setState((prevState: any) => {
        const newState = {
          ...prevState,
          [name]: value,
        };

        if (newState.showError) {
          const preName = (newState.name || "").trim();
          newState.showError = preName.length < 1;
        }

        return newState;
      });
    },
    []
  );

  const handleSave = useCallback(async () => {
    const { name, step } = state;
    const value = (name || "").trim();

    if (value.length < 1) {
      setState((prevState: any) => ({
        ...prevState,
        name: "",
        showError: true,
      }));
      return;
    }

    if (step === 0) {
      setState((prevState: any) => ({
        ...prevState,
        step: 1,
        showError: false,
      }));
      return;
    }

    try {
      await addProject({
        variables: { name: state.name, email: auth.user.email },
      });
    } catch (e) {
      console.log("Nguyen C: project-add.hook.tsx, F: e, N: e ", e);
    }
  }, [state, auth, addProject]);

  const handleBack = useCallback(() => {
    setState((prevState: any) => ({
      ...prevState,
      step: 0,
    }));
  }, []);

  return { state, loading, handleBack, handleSave, handleChange };
};

export default useProjectAddHook;
