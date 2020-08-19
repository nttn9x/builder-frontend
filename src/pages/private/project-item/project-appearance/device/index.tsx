import React, { useCallback } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DeviceAndroid, DeviceIOS } from "components/ui-own";

import DeviceMode from "./device-mode.component";
import DeviceBody from "./device-body";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      height: "100%",
      padding: theme.spacing(6),
    },
    body: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "2.5em",
      boxShadow: theme.shadows["2"],
    },
    device: { flex: 1, overflow: "hidden" },
  })
);

const Device = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = useCallback(
    (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    },
    []
  );

  const ios = value === 0;

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <DeviceMode value={value} handleChange={handleChange} />
        <div className={classes.device}>
          {ios && (
            <DeviceIOS>
              <DeviceBody ios={ios} />
            </DeviceIOS>
          )}
          {!ios && (
            <DeviceAndroid>
              <DeviceBody />
            </DeviceAndroid>
          )}
        </div>
      </div>
    </div>
  );
};

export default Device;
