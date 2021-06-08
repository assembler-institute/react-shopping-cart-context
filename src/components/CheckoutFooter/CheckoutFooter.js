import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import "./CheckoutFooter.scss";
import ShoppingContext from "../../context";

function CheckoutFooter() {
  const { path, nextPath, prevPath, details } = useContext(ShoppingContext);
  // eslint-disable-next-line
  console.log(details);
  return (
    <header className="bg-primary mb-4">
      <h1>CheckoutFooter</h1>
      <NavLink to={`/Checkout/step-${path - 1}`}>
        <Button disabled={path - 1 === 0} onClick={prevPath}>
          Previous
        </Button>
      </NavLink>
      <NavLink
        to={
          path + 1 === 4
            ? "/Checkout/order-summary"
            : `/Checkout/step-${path + 1}`
        }
      >
        <Button onClick={nextPath}>
          {path + 1 === 4 ? "Buy now" : "Next"}
        </Button>
      </NavLink>
    </header>
  );
}

export default CheckoutFooter;
