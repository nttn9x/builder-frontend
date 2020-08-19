import React from "react";

import StepOneForm from "./step-one-form.component";
import StepOneTitle from "./step-one-title.component";

const StepOne = (props: any) => {


  return (
    <>
      <StepOneTitle />
      <StepOneForm {...props} />
    </>
  );
};

export default StepOne;
