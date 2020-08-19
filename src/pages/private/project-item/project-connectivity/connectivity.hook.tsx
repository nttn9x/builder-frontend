import React, { useCallback, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_WOO_PROJECT_ITEM } from "queries/project.query";

import { useMessage } from "hook/snackbar.hook";
import { useProjectItemContext } from "../project-item.context";
import { useTranslation } from "react-i18next";

const useConnectivityHook = () => {
  const { t } = useTranslation();
  const {
    state: {
      data: { id, config },
    },
    setState: setStateGlobal,
  } = useProjectItemContext();
  const { showErrorMessage, showSuccessMessage } = useMessage();
  const [updateProject, { loading }] = useMutation(UPDATE_WOO_PROJECT_ITEM);

  const [state, setState] = useState(() => {
    return { wooCommerce: config.wooCommerce, openDialog: false };
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setState((prevState: any) => ({
        ...prevState,
        wooCommerce: {
          ...prevState.wooCommerce,
          [name]: value,
        },
      }));
    },
    []
  );

  const onSave = async () => {
    try {
      await updateProject({
        variables: {
          id,
          config: { ...config, wooCommerce: { ...state.wooCommerce } },
        },
      });

      setStateGlobal((draft: any) => {
        draft.data.config.wooCommerce = { ...state.wooCommerce };
      });

      showSuccessMessage(t("saved"));
    } catch (e) {
      showErrorMessage(e.message);
    }
  };

  const handleDialogOpen = useCallback(() => {
    setState((prevState: any) => ({
      ...prevState,
      openDialog: true,
    }));
  }, []);

  const handleDialogClose = useCallback(() => {
    setState((prevState: any) => ({
      ...prevState,
      openDialog: false,
    }));
  }, []);

  return {
    loading,
    state,
    onSave,
    handleChange,
    handleDialogClose,
    handleDialogOpen,
  };
};

export default useConnectivityHook;
