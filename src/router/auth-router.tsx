import React, {useEffect} from "react";
import {Route} from "react-router-dom";

import {getUser} from "utils/auth.util";

import {ROUTES} from "constants/navigation";

const withAuth = (Component: any) => (props: any) => {
  const show = !!getUser();

  useEffect(() => {
    if (!show) {
      props.history.push({
        pathname: ROUTES.LOGIN,
        state: {
          from: props.history.location.pathname,
        },
      });
    }
  }, [show, props.history]);

  return show ? <Component {...props} /> : null;
};

const AuthRoute = ({ component, ...props }: any) => {
  return <Route {...props} component={withAuth(component)} />;
};

export default AuthRoute;
