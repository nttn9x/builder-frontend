import React, { useMemo } from "react";
import styles from "./login-form.module.scss";

import { Button, Grid, TextField, Typography } from "components/ui-libraries";
import { useTranslation } from "react-i18next";

const LoginForm = (props: any) => {
  const { values, touched, errors, handleBlur, handleChange } = props;
  const { t } = useTranslation(["login", "error"]);

  const isIdentifierError = useMemo(
    () => errors.identifier && touched.identifier,
    [errors.identifier, touched.identifier]
  );
  const isPasswordError = useMemo(() => errors.password && touched.password, [
    errors.password,
    touched.password,
  ]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant={"h4"} className={styles.title}>
          {t("sign_in")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          autoFocus
          error={isIdentifierError}
          label={t("username")}
          onChange={handleChange("identifier")}
          defaultValue={values.identifier}
          helperText={isIdentifierError && t(`error:${errors.identifier}`)}
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
          {t("login")}
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
