import React from "react";

import StepTwoForm from "./step-two-form.component";
import StepTwoTitle from "./step-two-title.component";

const StepTwo = (props: any) => {
  return (
    <>
      <StepTwoTitle />
      <StepTwoForm {...props} />
    </>
  );
};

export default StepTwo;
