import React, { createContext, useCallback, useContext } from "react";

import { useRecoilState } from "recoil";
import { withRouter } from "react-router";

import { removeData } from "utils/auth.util";

import { ROUTES } from "constants/navigation";
import { authState } from "store/auth";

export const AuthDataContext = createContext<any>({
  onLogout: null,
});

const AuthDataProvider = ({ children, history, ...props }: any) => {
  const [, setAuth] = useRecoilState(authState);

  const onLogout = useCallback(() => {
    setAuth({
      hasLogin: false,
      user: null,
    });

    removeData();

    history.push(ROUTES.HOME);
  }, [history, setAuth]);

  return (
    <AuthDataContext.Provider
      value={{
        onLogout,
      }}
      {...props}
    >
      {children}
    </AuthDataContext.Provider>
  );
};

export const useAuthDataContext = () => useContext<any>(AuthDataContext);

export default withRouter(AuthDataProvider);
