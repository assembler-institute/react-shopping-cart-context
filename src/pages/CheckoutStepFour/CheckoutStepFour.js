import React from "react";
import withLayout from "../../hoc/withLayout";

import StepFourForm from "../../components/StepFourForm";

function CheckOutStepFour() {
  return (
    <div className="row">
      <div className="col col-12">
        <StepFourForm />
      </div>
    </div>
  );
}

export default withLayout(CheckOutStepFour);
