import { useCallback, useState } from "react";

import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { useSnackbar } from "notistack";

import { authState } from "store/auth";
import { setData } from "utils/auth.util";

import { ROUTES } from "constants/navigation";
import { SNACKBAR_TYPE } from "constants/common";

import { login } from "services/authentication.service";

const useLoginHook = ({ history }: any) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation(["login", "common"]);
  const [auth, setAuth] = useRecoilState(authState);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async (values: any, actions) => {
      try {
        setLoading(true);

        const { data }: any = await login(values);

        // Store in localstorage
        setData(data);

        // Update recoiljs
        setAuth({
          hasLogin: true,
          user: data.user,
        });

        try {
          const locationState = history.location.state;

          history.push(locationState.from || ROUTES.ProjectList);
        } catch (error) {}
      } catch (e) {
        enqueueSnackbar(t("login_failed"), {
          variant: SNACKBAR_TYPE.Error,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          autoHideDuration: 3000,
        });

        setLoading(false);
      }
    },
    [t, history, enqueueSnackbar, setAuth]
  );

  return { loading, hasLogin: auth.hasLogin, onSubmit };
};

export default useLoginHook;
