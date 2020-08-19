import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "components/ui-libraries";
import { HomeIcon } from "components/icons";

import { SCREENS, STEP_TYPES } from "constants/common";

import { useProjectItemContext } from "../../project-item.context";

const ListTabItem = memo(({ title, id, onItemClick }: any) => {
  return (
    <ListItem button onClick={() => onItemClick(id)}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
});

const ScreenList = React.memo(() => {
  const { t } = useTranslation("project");
  const { setState } = useProjectItemContext();

  const onClick = useCallback(
    (name) => {

      setState((draft: any) => {
        draft.history.layout.name = name;
        draft.history.step = STEP_TYPES.Layout;
      });
    },
    [setState]
  );

  return (
    <>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          {t("tab_screens")}
        </Typography>
      </Toolbar>
      <List component="nav">
        {SCREENS.map((tab: any, i: number) => (
          <ListTabItem
            key={i}
            id={tab.id}
            title={t(tab.i18nKey)}
            onItemClick={onClick}
          />
        ))}
      </List>
    </>
  );
});

export default ScreenList;
