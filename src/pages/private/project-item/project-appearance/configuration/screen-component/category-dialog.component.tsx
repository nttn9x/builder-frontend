import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";

import { GridList } from "components/ui-own";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "components/ui-libraries";
import { dashboardState } from "../../../atom/data-dashboard.atom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 300,
    },
    body: {
      width: "100%",
      height: "90vh",
    },
  })
);

const CategoryDialog = React.memo(
  ({ open, category, handleClose, onItemClick }: any) => {
    const classes = useStyles();
    const { t } = useTranslation(["common", "project"]);
    const { firstLoad, categories } = useRecoilValue(dashboardState);
    const items = useMemo(() => {
      if (category) {
        return categories.filter((c: any) => c.id !== category.id);
      }

      return categories;
    }, [category, categories]);

    return (
      <Dialog maxWidth={"lg"} fullWidth onClose={handleClose} open={open}>
        <DialogTitle>{t("categories")}</DialogTitle>
        <DialogContent classes={{ root: classes.body }}>
          <GridList
            items={items}
            loading={firstLoad}
            onItemClick={onItemClick}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t("close")}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);

export default CategoryDialog;
