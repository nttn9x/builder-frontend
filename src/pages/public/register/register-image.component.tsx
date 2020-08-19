import React from "react";
import styles from "./register-image.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ROUTES } from "constants/navigation";
import { Grid } from "components/ui-libraries";

import Logo from "styles/images/modules/login/signup-image.jpg";

const RegisterImage = React.memo(({ history }: any) => {
  const { t } = useTranslation(["login"]);
  return (
    <div className={styles.container}>
      <Grid justify={"flex-end"} alignItems={"flex-end"} container spacing={3}>
        <Grid item xs={12}>
          <img src={Logo} alt="Logo" />
        </Grid>
        <Grid item xs={12}>
          <Link className={styles.link} to={ROUTES.LOGIN}>
            {t("i_am_already_a_member")}
          </Link>
        </Grid>
      </Grid>
    </div>
  );
});

export default RegisterImage;
