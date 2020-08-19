import React from "react";

import { ProgressLoader } from "components/ui-own";

import LayoutHeader from "./layout-header.component";

import style from "./layout.module.scss";

const LayoutPage = ({
  children,
  bodyStyle,
  animated,
  loading,
  ...props
}: any) => {
  return (
    <>
      <LayoutHeader animated={animated} />
      <div className={style.container} {...props}>
        <div className={bodyStyle || style.main}>
          {loading && <ProgressLoader />}
          {!loading && children}
        </div>
      </div>
    </>
  );
};

export { LayoutPage };
