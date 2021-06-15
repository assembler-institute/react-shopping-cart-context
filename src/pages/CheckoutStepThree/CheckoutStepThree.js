import React from "react";
import withLayout from "../../hoc/withLayout";
import checkoutLayout from "../../hoc/checkoutLayout";

import StepThreeForm from "../../components/StepThreeForm";

function CheckOutStepThree() {
  return <StepThreeForm />;
}

export default withLayout(checkoutLayout(CheckOutStepThree));
