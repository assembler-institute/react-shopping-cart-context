import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Button from "../Button";
import "./CheckoutFooter.scss";
import ShoppingContext from "../../context";

function CheckoutFooter() {
  const { path, nextPath } = useContext(ShoppingContext);

  console.log(path);
  return (
    <header className="bg-primary mb-4">
      <h1>CheckoutFooter</h1>
      <NavLink
        to={
          path + 1 === 4
            ? "/Checkout/order-summary"
            : `/Checkout/step-${path + 1}`
        }
      >
        <Button onClick={nextPath}>Next</Button>
      </NavLink>
    </header>
  );
}

export default CheckoutFooter;
