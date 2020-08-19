import React from "react";
import styles from "./login-image.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ROUTES } from "constants/navigation";
import { Grid } from "components/ui-libraries";
import Logo from "styles/images/modules/login/signin-image.jpg";

const LoginImage = React.memo(({ history }: any) => {
  const { t } = useTranslation(["login"]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <img src={Logo} alt="Logo" />
      </Grid>
      <Grid item xs={12}>
        <Link className={styles.link} to={ROUTES.REGISTER}>
          {t("create_an_account")}
        </Link>
      </Grid>
    </Grid>
  );
});

export default LoginImage;
