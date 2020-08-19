import React from "react";
import { useTranslation } from "react-i18next";

import { Grid, TextField } from "components/ui-libraries";

const Config = ({ wooCommerce, handleChange }: any) => {
  const { t } = useTranslation(["project", "common"]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={wooCommerce.url}
            label={t("url")}
            variant="outlined"
            name={"url"}
            onChange={handleChange}
            inputProps={{
              autoComplete: "new-password",
              form: {
                autocomplete: "off",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={wooCommerce.consumerKey}
            label={t("consumer_key")}
            variant="outlined"
            name={"consumerKey"}
            onChange={handleChange}
            inputProps={{
              autoComplete: "new-password",
              form: {
                autocomplete: "off",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={wooCommerce.consumerSecret}
            onChange={handleChange}
            name={"consumerSecret"}
            label={t("consumer_secret")}
            variant="outlined"
            type={"password"}
            inputProps={{
              autoComplete: "new-password",
              form: {
                autocomplete: "off",
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Config;
