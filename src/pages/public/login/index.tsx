import React from "react";
import styles from "./login.module.scss";

import { useTranslation } from "react-i18next";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";

import { ROUTES } from "constants/navigation";

import { Grid } from "components/ui-libraries";
import { DefaultProgress } from "components/ui-own";

import LoginSchema from "./login.yui";
import LoginImage from "./login-image.component";
import LoginForm from "./login-form.component";
import LoginLogo from "./login-logo.component";

import useLoginHook from "./login.hook";

// Load before access home page, improve user experience
import(/* webpackPrefetch: true */ "pages/private/project-list");
import(/* webpackPrefetch: true */ "pages/public/register");

const Login = ({ history }: any) => {
  const { t } = useTranslation(["login", "common"]);
  const { hasLogin, loading, onSubmit } = useLoginHook({ history });

  if (hasLogin) {
    return <Redirect to={ROUTES.ProjectList} />;
  }

  return (
    <Formik
      initialValues={{ identifier: "nttn9x", password: "123456" }}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, ...rest }) => {
        return (
          <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.container__form}>
              <Grid container spacing={3}>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <LoginImage />
                </Grid>
                <Grid item xs={6}>
                  <LoginLogo />
                  {loading ? (
                    <div className={styles.loading}>
                      <DefaultProgress message={t("common:please_wait")} />
                    </div>
                  ) : (
                    <LoginForm {...rest} />
                  )}
                </Grid>
              </Grid>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Login;
