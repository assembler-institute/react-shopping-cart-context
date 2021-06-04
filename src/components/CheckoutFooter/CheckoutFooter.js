import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Button from "../Button";
import "./CheckoutFooter.scss";

function CheckoutFooter() {
  const [step, setStep] = useState(1);

  return (
    <header className="bg-primary mb-4">
      <h1>CheckoutFooter</h1>
      <NavLink to={`/Checkout/step-${step}`}>
        <Button
          onClick={() => {
            setStep(step + 1);
            console.log(step);
          }}
        >
          Next
        </Button>
      </NavLink>
    </header>
  );
}

export default CheckoutFooter;
