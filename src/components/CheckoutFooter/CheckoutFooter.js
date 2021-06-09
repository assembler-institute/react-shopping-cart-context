import React from "react";
import { useLocation } from "react-router-dom";

import Button from "../Button";
import "./CheckoutFooter.scss";

function CheckoutFooter() {
  const location = useLocation();

  const path = location.pathname;
  let stepForm = "stepOne";
  let prevStep = true;

  if (path === "/checkout/step-2") {
    stepForm = "stepTwo";
    prevStep = false;
  }
  if (path === "/checkout/step-3") {
    stepForm = "stepThree";
    prevStep = false;
  }

  return (
    <div className="d-flex justify-content-center checkout-footer">
      <Button disabled={prevStep}>Previous page</Button>
      <Button form={stepForm} type="submit">
        Next page
      </Button>
    </div>
  );
}

export default CheckoutFooter;
