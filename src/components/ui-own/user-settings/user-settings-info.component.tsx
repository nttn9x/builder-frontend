import React from "react";
import styles from "./user-settings.module.scss";

import { AccountBoxIcon } from "components/icons";

import Typography from "components/ui-own/typography-nowrap";

const UserSettingsInfo: React.FC<any> = ({ user }) => {
  return (
    <div className={styles.userinfo}>
      <div className={styles.userinfo_image}>
        <AccountBoxIcon color="primary" />
      </div>
      <div className={styles.userinfo_detail}>
        <Typography title={user.username} color="textPrimary">
          {user.username}
        </Typography>
        <Typography title={user.email} color="textSecondary">
          {user.email}
        </Typography>
      </div>
    </div>
  );
};

export default UserSettingsInfo;
