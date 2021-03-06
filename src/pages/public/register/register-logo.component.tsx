import React from "react";
import styles from "./register-logo.module.scss";
import { Link } from "react-router-dom";

import { ROUTES } from "constants/navigation";

import LogoIcon from "styles/images/common/logo.png";

const RegisterLogo = React.memo(() => {
  return (
    <div className={styles.container}>
      <Link to={ROUTES.HOME}>
        <img className={styles.logo} src={LogoIcon} alt="Device" />
      </Link>
    </div>
  );
});

export default RegisterLogo;
