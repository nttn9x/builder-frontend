import React from "react";
import styles from "./banner-left.module.scss";
import { Link } from "react-router-dom";

import { Button, Grid, Typography } from "components/ui-libraries";
import { useTranslation } from "react-i18next";
import { useThemesContext } from "context/theme.context";

const BannerLeftComponent = () => {
  const { t } = useTranslation(["home"]);
  const { isLargeScreen } = useThemesContext();

  return (
    <>
      <Grid container spacing={1} justify={isLargeScreen ? "center" : "center"}>
        <Grid item xs={12}>
          <Typography
            component={"div"}
            className={styles["title--one"]}
            variant={"h2"}
          >
            {t("title")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component={"div"}
            className={styles["title--two"]}
            variant={"h5"}
            color={"textSecondary"}
          >
            {t("whatYouWant")}
          </Typography>
        </Grid>
        <Grid item xs={"auto"} md={12}>
          <Link to={"/login"}>
            <Button
              className={styles.button}
              variant={"contained"}
              color={"primary"}
            >
              {t("letsBuild")}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default BannerLeftComponent;
