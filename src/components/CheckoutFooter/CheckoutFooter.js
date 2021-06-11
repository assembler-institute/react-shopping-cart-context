import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import Button from "../Button";
import "./CheckoutFooter.scss";

function CheckoutFooter() {
  const location = useLocation();
  const history = useHistory();
  const stepNavigationData = {
    1: { stepForm: "stepOne", prevStep: true },
    2: { stepForm: "stepTwo", prevStep: false },
    3: { stepForm: "stepThree", prevStep: false },
  };

  const path = location.pathname.split("-").pop();
  /* let stepForm = "stepOne";
  let prevStep = true; */

  const stepForm = stepNavigationData[path].stepForm;
  const prevStep = stepNavigationData[path].prevStep;

  /* if (path === "/checkout/step-2") {
    stepForm = "stepTwo";
    prevStep = false;
  }
  if (path === "/checkout/step-3") {
    stepForm = "stepThree";
    prevStep = false;
  } */

  function goToPrevStep() {
    history.push(`/checkout/step-${path - 1}`);
  }

  return (
    <div className="d-flex justify-content-center checkout-footer">
      <Button disabled={prevStep} onClick={goToPrevStep}>
        Previous page
      </Button>
      <Button form={stepForm} type="submit">
        Next page
      </Button>
    </div>
  );
}

export default CheckoutFooter;
