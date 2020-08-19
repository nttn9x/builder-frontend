import React from "react";
import { SnackbarProvider } from "notistack";
import { IconButton } from "components/ui-libraries";
import { CloseIcon } from "components/icons";

const Snackbar: React.FC<any> = ({ children }) => {
  const ref = React.createRef<any>();
  const onClickDismiss = (key: string) => () => {
    try {
      if (ref.current) {
        ref.current.closeSnackbar(key);
      }
    } catch (e) {
      console.log(
        "Nguyen C: snackbar.context.tsx, F:onClickDismiss, N: error ",
        e
      );
    }
  };

  return (
    <SnackbarProvider
      ref={ref}
      action={(key: string) => (
        <IconButton color={"inherit"} onClick={onClickDismiss(key)}>
          <CloseIcon />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
};

export default Snackbar;
