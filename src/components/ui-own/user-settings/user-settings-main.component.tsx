import React from "react";
import { useTranslation } from "react-i18next";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "components/ui-libraries";
import { useAuthDataContext } from "context/auth.context";

import { ExitToAppIcon } from "components/icons";

const UserSettingsMain: React.FC<any> = ({ doLogout }) => {
  const { t } = useTranslation(["common"]);
  const { onLogout } = useAuthDataContext();
  return (
    <List>
      <ListItem button onClick={onLogout}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText>{t("log_out")}</ListItemText>
      </ListItem>
    </List>
  );
};

export default UserSettingsMain;
