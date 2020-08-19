import React from "react";
import styles from "./banner-right.module.scss";
import clsx from "clsx";

import { useThemesContext } from "context/theme.context";

const BannerRight = () => {
  const { isMobile, isTablet } = useThemesContext();

  return (
    <div className={styles.device}>
      <div
        className={clsx(styles.device__container, {
          [styles["device__container--mobile"]]: isMobile && !isTablet,
        })}
      ></div>
    </div>
  );
};

export default BannerRight;
