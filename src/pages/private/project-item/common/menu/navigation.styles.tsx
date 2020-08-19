import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { PaletteIcon, StorageIcon } from "components/icons";
import { MODE_THEME } from "../../../../../utils/setting-themes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: { paddingTop: 0, paddingBottom: 0 },
    icon: {
      minWidth: "unset",
      marginRight: theme.spacing(1.5),
      color:
        theme.palette.type !== MODE_THEME.DARK
          ? "#fff"
          : theme.palette.text.secondary,
      backgroundColor:
        theme.palette.type !== MODE_THEME.DARK
          ? theme.palette.grey["200"]
          : theme.palette.background.default,
      borderRadius: theme.shape.borderRadius,
      padding: "0.25em",
    },
    textPrimary: { color: theme.palette.text.primary },
    textSecondary: { color: theme.palette.text.secondary },
  })
);

const useSubStyles = makeStyles((theme: Theme) =>
  createStyles({
    menu: {
      paddingLeft: theme.spacing(6.8),
    },
    textPrimary: {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
    },
    textSecondary: { color: theme.palette.text.secondary },
  })
);

const navs = [
  {
    path: "appearance",
    color: "#ffc53a",
    i18nKey: "appearance",
    icon: <PaletteIcon />,
    menus: [
      {
        i18nKey: "app_icon",
        path: "app-icon",
      },
      {
        i18nKey: "launch_screen",
        path: "launch-screen",
      },
      {
        i18nKey: "tabs",
        path: "tabs",
      },
    ],
  },
  {
    path: "connectivity",
    color: "#f68751",
    i18nKey: "connectivity",
    icon: <StorageIcon />,
  },
];

export { useStyles, useSubStyles, navs };
