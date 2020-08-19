import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { SCREENS, STEP_TYPES } from "constants/common";

import { IconButton, Toolbar, Typography } from "components/ui-libraries";
import { KeyboardBackspaceIcon } from "components/icons";

import { useProjectItemContext } from "../../../project-item.context";

const Header = React.memo(() => {
  const { t } = useTranslation("project");
  const {
    state: { history },
    setState: setStateGlobal,
  } = useProjectItemContext();

  const screen: any = useMemo(() => {
    return SCREENS.find((s) => s.id === history.layout.name);
  }, [history.layout.name]);

  const handleBack = useCallback(() => {
    setStateGlobal((draft: any) => {
      draft.history.step = STEP_TYPES.Root;
    });
  }, [setStateGlobal]);

  return (
    <Toolbar variant="dense">
      <IconButton edge="start" onClick={handleBack}>
        <KeyboardBackspaceIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
        {t(screen.i18nKey)}
      </Typography>
    </Toolbar>
  );
});

export default Header;
