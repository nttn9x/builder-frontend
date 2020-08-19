import React, { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import _get from "lodash/get";
import { useRecoilValue } from "recoil";

import { Button } from "components/ui-libraries";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { useProjectItemContext } from "../../../project-item.context";
import { dashboardState } from "../../../atom/data-dashboard.atom";

import CategoryAdded from "./category-added.component";
import CategoryDialog from "./category-dialog.component";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: "100%",
      height: 150,
      borderStyle: "dashed",
    },
    container: {
      padding: theme.spacing(3),
    },
  })
);

const CategorySlider = () => {
  const { t } = useTranslation("project");
  const classes = useStyles();
  const {
    state: {
      data: {
        config: { layout },
      },
      history,
    },
    setState: setStateGlobal,
  } = useProjectItemContext();
  const { categories } = useRecoilValue(dashboardState);
  const [state, setState] = useState({
    open: false,
  });

  const category = useMemo(() => {
    const layoutName = _get(history, "layout.name", "");
    const componentName = _get(history, "component", "");
    const categoryId = _get(
      layout,
      `${layoutName}.components.${componentName}[0]`
    );

    const data = categories.find((c: any) => c.id === categoryId);
    console.warn("Nguyen: ", data);
    return data;
  }, [history, layout, categories]);

  const handleDialogOpen = useCallback(() => {
    setState((prevState) => ({ ...prevState, open: true }));
  }, []);

  const handleDialogClose = useCallback(() => {
    setState((prevState) => ({ ...prevState, open: false }));
  }, []);

  const onItemClick = useCallback(
    ({ item }) => {
      setStateGlobal((draft: any) => {
        draft.data.config.layout[draft.history.layout.name].components[
          draft.history.component
        ] = [item.id];
      });

      handleDialogClose();
    },
    [setStateGlobal, handleDialogClose]
  );

  return (
    <div className={classes.container}>
      {!category && (
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={handleDialogOpen}
        >
          {t("add_category")}
        </Button>
      )}
      {category && <CategoryAdded onEdit={handleDialogOpen} category={category} />}
      <CategoryDialog
        open={state.open}
        category={category}
        handleClose={handleDialogClose}
        onItemClick={onItemClick}
      />
    </div>
  );
};

export default CategorySlider;
