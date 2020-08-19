import React from "react";

import { Divider, Grid } from "components/ui-libraries";

import LayoutConfig from "../common/layout-config";

import Guide from "./connectivity-guide.component";
import Config from "./connectivity-config.component";
import Header from "./connectivity-header.component";
import Button from "./connectivity-button.component";
import Dialog from "./connectivity-dialog.component";

import useConnectivityHook from "./connectivity.hook";

const Connectivity = () => {
  const {
    loading,
    state: { wooCommerce, openDialog },
    onSave,
    handleChange,
    handleDialogClose,
    handleDialogOpen,
  } = useConnectivityHook();

  return (
    <LayoutConfig>
      <Dialog
        open={openDialog}
        wooCommerce={wooCommerce}
        handleClose={handleDialogClose}
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={6}>
          <Config wooCommerce={wooCommerce} handleChange={handleChange} />
        </Grid>
        <Grid item xs={6}>
          <Guide />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} container justify={"flex-end"} alignItems={"center"}>
          <Button
            loading={loading}
            onSave={onSave}
            testConnection={handleDialogOpen}
          />
        </Grid>
      </Grid>
    </LayoutConfig>
  );
};

export default Connectivity;
