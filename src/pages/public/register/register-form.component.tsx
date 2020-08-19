import React, { useMemo } from "react";
import styles from "./register-form.module.scss";

import { Button, Grid, TextField, Typography } from "components/ui-libraries";
import { useTranslation } from "react-i18next";

const RegisterForm = (props: any) => {
  const { values, touched, errors, handleBlur, handleChange } = props;
  const { t } = useTranslation(["login", "error"]);

  const isUsernameError = useMemo(() => errors.username && touched.username, [
    errors.username,
    touched.username,
  ]);
  const isPasswordError = useMemo(() => errors.password && touched.password, [
    errors.password,
    touched.password,
  ]);
  const isEmailError = useMemo(() => errors.email && touched.email, [
    errors.email,
    touched.email,
  ]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant={"h4"} className={styles.title}>
          {t("sign_up")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          autoFocus
          error={isUsernameError}
          label={t("username")}
          onChange={handleChange("username")}
          defaultValue={values.username}
          helperText={isUsernameError && t(`error:${errors.username}`)}
          variant="outlined"
          onBlur={handleBlur}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          error={isEmailError}
          label={t("email")}
          onChange={handleChange("email")}
          defaultValue={values.email}
          helperText={isEmailError && t(`error:${errors.email}`)}
          variant="outlined"
          onBlur={handleBlur}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          inputProps={{
            autoComplete: "new-password",
            form: {
              autoComplete: "off",
            },
          }}
          error={isPasswordError}
          label={t("password")}
          defaultValue={values.password}
          helperText={isPasswordError && t(`error:${errors.password}`)}
          variant="outlined"
          type={"password"}
          onChange={handleChange("password")}
          onBlur={handleBlur}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          className={styles.button}
          variant="contained"
          color={"primary"}
          type={"submit"}
        >
          {t("register")}
        </Button>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
