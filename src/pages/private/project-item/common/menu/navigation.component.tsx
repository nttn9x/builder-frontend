import React, { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ROUTES } from "constants/navigation";

import { navs } from "./navigation.styles";

import Menu from "./navigation-menu.component";

const Navigation = React.memo(() => {
  const params: any = useParams();
  const history: any = useHistory();

  const onNavClick = useCallback(
    (value?: any) => {
      if (value) {
        history.push(`${ROUTES.ProjectList}/${params.id}/${value}`);
      } else {
        history.push(`${ROUTES.ProjectList}/${params.id}`);
      }
    },
    [history, params]
  );

  return (
    <>
      {navs.map((n: any, i: number) => (
        <Menu onItemClick={onNavClick} data={n} key={i} />
      ))}
    </>
  );
});

export default Navigation;
