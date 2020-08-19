import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import { IconButton, Paper, Typography } from "components/ui-libraries";

import AddIcon from "styles/images/modules/project/icon-add.png";

import { useCardStyles } from "./list-data.component";

export const useAddIconStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardAdd: {
      borderStyle: "dashed",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    cardAddIcon: {
      width: 200,
    },
    cardAddTitle: {
      flex: "0 0 10px",
      marginTop: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
);

const ListDataAddIcon = React.memo(() => {
  const cardClasses = useCardStyles();
  const iconClasses = useAddIconStyles();
  const { t } = useTranslation(["project"]);

  return (
    <Paper
      variant={"outlined"}
      className={`${cardClasses.card} ${iconClasses.cardAdd}`}
    >
      <IconButton color={"primary"}>
        <img className={iconClasses.cardAddIcon} src={AddIcon} alt={"Add"} />
      </IconButton>
      <Typography
        variant={"h6"}
        color={"textSecondary"}
        className={iconClasses.cardAddTitle}
      >
        {t("create_new_app")}
      </Typography>
    </Paper>
  );
});

export default ListDataAddIcon;
