import React from "react";
import styles from "./logo.module.scss";

import LogoIcon from "styles/images/common/logo.png";

const Logo = () => {
  return <img className={styles.logo} src={LogoIcon} alt="Device" />;
};

export default Logo;
