import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

import { Dialog, DialogContent, Typography } from "components/ui-libraries";

import { DefaultProgress } from "components/ui-own";

import SuccessImg from "styles/images/common/success.png";
import ErrorImg from "styles/images/common/error.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 300,
    },
    body: {
      width: "100%",
      minHeight: 280,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      marginBottom: theme.spacing(1.5),
    },
    icon: {
      width: 100,
      marginBottom: theme.spacing(3),
    },
  })
);

const ContentResult = ({ error, message }: any) => {
  const { t } = useTranslation(["common", "project"]);
  const classes = useStyles();
  return (
    <>
      {error && (
        <>
          <img className={classes.icon} src={ErrorImg} alt={"Success"} />
          <Typography>{message}</Typography>
        </>
      )}

      {!error && (
        <>
          <img className={classes.icon} src={SuccessImg} alt={"Success"} />
          <Typography
            className={classes.title}
            variant={"h5"}
            color={"textPrimary"}
          >
            {t("success")}
          </Typography>

          <Typography
            align={"center"}
            className={classes.title}
            color={"textSecondary"}
            component={"div"}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: t("project:checkConnectionSuccess"),
              }}
            />
          </Typography>
        </>
      )}
    </>
  );
};

const ConnectionDialog = React.memo(
  ({ open, wooCommerce, handleClose }: any) => {
    const { t } = useTranslation(["common", "project"]);
    const [state, setState] = useState({
      error: false,
      message: null,
      loading: false,
    });
    const classes = useStyles();

    useEffect(() => {
      if (!open) {
        return;
      }
      setState((prevState) => ({ ...prevState, loading: true }));
      try {
        const api = new WooCommerceRestApi({
          ...wooCommerce,
          version: "wc/v3",
          queryStringAuth: true,
        });

        api
          .get("products")
          .then((response: any) => {
            setState({ error: false, message: null, loading: false });
          })
          .catch((error: any) => {
            setState({ error: true, message: error.message, loading: false });
          });
      } catch (e) {
        console.log(
          "Nguyen C: connectivity-dialog.component.tsx, F: useEffect, N: e ",
          e
        );
      }
    }, [open, setState, wooCommerce]);

    return (
      <Dialog
        maxWidth={"sm"}
        fullWidth
        onClose={handleClose}
        classes={{ paper: classes.paper }}
        open={open}
      >
        <DialogContent classes={{ root: classes.body }}>
          {state.loading && (
            <DefaultProgress
              size={140}
              thickness={2}
              message={t("project:checkConnection")}
            />
          )}
          {!state.loading && (
            <ContentResult error={state.error} message={state.message} />
          )}
        </DialogContent>
      </Dialog>
    );
  }
);

export default ConnectionDialog;
