import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";

import { ROUTES } from "constants/navigation";

import { LayoutApp, ProgressLoader } from "components/ui-own";
import ThemeProvider from "context/theme.context";
import AuthProvider from "context/auth.context";
import SnackbarProvider from "context/snackbar.context";

import { client } from "utils/apolloClient";

import AuthRoute from "./auth-router";
import Home from "pages/public/home";

// Private
const ProjectList = React.lazy(() => import("pages/private/project-list"));
const ProjectItem = React.lazy(() => import("pages/private/project-item"));
const ProjectAdd = React.lazy(() => import("pages/private/project-add"));

// Public
const Login = React.lazy(() => import("pages/public/login"));
const Register = React.lazy(() => import("pages/public/register"));

const Root: React.FC = () => {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <SnackbarProvider>
          <ApolloProvider client={client}>
            <Router>
              <AuthProvider>
                <LayoutApp>
                  <Suspense fallback={<ProgressLoader />}>
                    <AuthRoute
                      exact
                      path={ROUTES.ProjectList}
                      component={ProjectList}
                    />
                    <AuthRoute
                      path={ROUTES.PROJECT_ITEM}
                      component={ProjectItem}
                    />
                    <AuthRoute
                      path={ROUTES.PROJECT_ITEM_ADD}
                      component={ProjectAdd}
                    />

                    <Route exact path={ROUTES.LOGIN} component={Login} />
                    <Route exact path={ROUTES.REGISTER} component={Register} />
                    <Route exact path={ROUTES.HOME} component={Home} />
                  </Suspense>
                </LayoutApp>
              </AuthProvider>
            </Router>
          </ApolloProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default Root;
