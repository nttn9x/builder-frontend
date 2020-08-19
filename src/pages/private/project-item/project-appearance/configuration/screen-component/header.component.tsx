import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { COMPONENTS, STEP_TYPES } from "constants/common";

import { IconButton, Toolbar, Typography } from "components/ui-libraries";
import { KeyboardBackspaceIcon } from "components/icons";

import { useProjectItemContext } from "../../../project-item.context";

const Header = React.memo(() => {
  const { t } = useTranslation("project");
  const {
    state: { history },
    setState,
  } = useProjectItemContext();

  const component: any = useMemo(() => {
    return COMPONENTS.find((s) => s.id === history.component);
  }, [history]);

  const handleBack = useCallback(() => {
    setState((draft: any) => {
      draft.history.step = STEP_TYPES.Layout;
    });
  }, [setState]);

  return (
    <Toolbar variant="dense">
      <IconButton edge="start" onClick={handleBack}>
        <KeyboardBackspaceIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
        {t(component.i18nKey)}
      </Typography>
    </Toolbar>
  );
});

export default Header;
