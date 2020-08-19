import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  ListItemIcon,
  MenuItem,
  MenuList,
  Skeleton,
} from "components/ui-libraries";
import { LayoutPage, SkeletonDetail } from "components/ui-own";

import { useStyles as useMenuStyles } from "./common/menu";
import { useStyles as useInfoStyles } from "./common/menu/info.component";

import Layout from "./common/layout-config";

import useLayoutStyles from "./project-item.styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
    },
    layout: {
      height: "100%",
    },
    nameApp: {
      width: "100%",
      height: 35,
    },
    nameNav: {
      width: "100%",
      height: 16,
    },
    iconNav: {
      width: "1.6em",
      height: "1.6em",
      padding: "0.25em",
    },
  })
);

const ProjectEmpty = React.memo(() => {
  const classes = useStyles();
  const classeMenus = useMenuStyles();
  const classeInfos = useInfoStyles();
  const layoutStyles = useLayoutStyles();

  return (
    <LayoutPage bodyStyle={layoutStyles.root}>
      <div className={classeMenus.root}>
        <div className={classeInfos.root}>
          <Skeleton
            animation="wave"
            variant="text"
            className={classes.nameApp}
          />
        </div>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <Skeleton
                className={classes.iconNav}
                animation="wave"
                variant="rect"
              />
            </ListItemIcon>
            <Skeleton
              animation="wave"
              variant="text"
              className={classes.nameNav}
            />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Skeleton
                className={classes.iconNav}
                animation="wave"
                variant="rect"
              />
            </ListItemIcon>
            <Skeleton
              animation="wave"
              variant="text"
              className={classes.nameNav}
            />
          </MenuItem>
        </MenuList>
      </div>
      <Layout className={classes.layout}>
        <SkeletonDetail />
      </Layout>
    </LayoutPage>
  );
});

export default ProjectEmpty;
