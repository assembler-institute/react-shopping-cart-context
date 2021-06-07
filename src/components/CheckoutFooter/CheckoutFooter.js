import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { orderContext } from "../../CheckoutContext";

import Button from "../Button";
import "./CheckoutFooter.scss";

function CheckoutFooter() {
  const location = useLocation();
  const { stepOne, stepTwo, stepThree } = useContext(orderContext);

  const path = location.pathname;
  let nextStep = true;
  let prevStep = true;

  if (path === "/checkout/step-1") {
    nextStep = !stepOne.completed;
  }
  if (path === "/checkout/step-2") {
    nextStep = !stepTwo.completed;
    prevStep = false;
  }
  if (path === "/checkout/step-3") {
    nextStep = !stepThree.completed;
    prevStep = false;
  }

  return (
    <div className="d-flex justify-content-center checkout-footer">
      <Button disabled={prevStep}>Previous page</Button>
      <Button disabled={nextStep}>Next page</Button>
    </div>
  );
}

export default CheckoutFooter;
