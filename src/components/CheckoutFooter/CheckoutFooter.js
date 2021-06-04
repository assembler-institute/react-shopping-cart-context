import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../Button";
import "./CheckoutFooter.scss";

function CheckoutFooter({ path }) {
  const nextPath = path + 1;
  return (
    <header className="bg-primary mb-4">
      <h1>CheckoutFooter</h1>
      <NavLink
        to={
          nextPath === 4
            ? "/Checkout/order-summary"
            : `/Checkout/step-${nextPath}`
        }
      >
        <Button>Next</Button>
      </NavLink>
    </header>
  );
}

export default CheckoutFooter;
