import React from "react";
import withLayout from "../../hoc/withLayout";
import checkoutLayout from "../../hoc/checkoutLayout";

import StepOneForm from "../../components/StepOneForm";

function CheckOutStepOne() {
  return <StepOneForm />;
}

export default withLayout(checkoutLayout(CheckOutStepOne));
