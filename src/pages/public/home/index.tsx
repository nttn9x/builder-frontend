import React from "react";
import styles from "./home.module.scss";
import clsx from "clsx";

import { useThemesContext } from "context/theme.context";

import { Container, Grid } from "components/ui-libraries";

import LogoComponent from "./logo.component";
import BannerLeftComponent from "./banner-left.component";
import BannerRightComponent from "./banner-right.component";

// Load before access home page, improve user experience
import(/* webpackPrefetch: true */ "pages/public/login");
import(/* webpackPrefetch: true */ "pages/private/project-list");

const Home = () => {
  const { isLargeScreen } = useThemesContext();

  return (
    <div className={styles.body}>
      <Container>
        <LogoComponent />
        <div
          className={clsx(styles.banner, {
            [styles["banner--small-screen"]]: !isLargeScreen,
          })}
        >
          <Grid container justify={isLargeScreen ? "space-between" : "center"}>
            <Grid item xs={12} md={7}>
              <BannerLeftComponent />
            </Grid>
            <Grid
              item
              xs={6}
              md={5}
              className={clsx({
                [styles["banner-right--small-screen"]]: !isLargeScreen,
              })}
            >
              <BannerRightComponent />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Home;
