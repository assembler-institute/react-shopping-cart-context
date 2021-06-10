import React from "react";
import withLayout from "../../hoc/withLayout";
import checkoutLayout from "../../hoc/checkoutLayout";

import StepTwoForm from "../../components/StepTwoForm";

function CheckOutStepTwo() {
  return <StepTwoForm />;
}

export default withLayout(checkoutLayout(CheckOutStepTwo));
