import React from "react";
import styles from "./register.module.scss";
import {Formik} from "formik";
import {useTranslation} from "react-i18next";

import {DefaultProgress} from "components/ui-own";

import RegisterSchema from "./register.yui";
import RegisterForm from "./register-form.component";

import {Grid} from "components/ui-libraries";

import RegisterImage from "./register-image.component";
import RegisterLogo from "./register-logo.component";

import useRegisterHook from "./register.hook";

// Load before access home page, improve user experience
import(/* webpackPrefetch: true */ "pages/private/project-list");

const Register = ({ history }: any) => {
  const { loading, onSubmit } = useRegisterHook({ history });
  const { t } = useTranslation(["login"]);

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, ...rest }) => {
        return (
          <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.container__form}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <RegisterLogo />
                  {loading ? (
                    <div className={styles.loading}>
                      <DefaultProgress message={t("common:please_wait")} />
                    </div>
                  ) : (
                    <RegisterForm {...rest} />
                  )}
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <RegisterImage />
                </Grid>
              </Grid>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Register;
