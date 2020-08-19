import { useCallback, useState } from "react";

import { useRecoilState } from "recoil";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

import { SNACKBAR_TYPE } from "constants/common";

import { authState } from "store/auth";
import { setData } from "utils/auth.util";

import { ROUTES } from "constants/navigation";
import { register } from "services/authentication.service";

const useRegisterHook = ({ history }: any) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation(["login"]);
  const [, setAuth] = useRecoilState(authState);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async (values: any, actions) => {
      try {
        setLoading(true);

        const { data }: any = await register(values);

        // Store in localstorage
        setData(data);

        // Update recoiljs
        setAuth({
          hasLogin: true,
          user: data.user,
        });

        history.push(ROUTES.ProjectList);
      } catch (e) {
        enqueueSnackbar(t(e.message), {
          variant: SNACKBAR_TYPE.Error,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });

        setLoading(false);
      }
    },
    [t, history, enqueueSnackbar, setAuth]
  );

  return { loading, onSubmit };
};

export default useRegisterHook;
