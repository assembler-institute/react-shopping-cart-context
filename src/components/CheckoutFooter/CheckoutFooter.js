import React, { useContext } from "react";
import "./CheckoutFooter.scss";
import ShoppingContext from "../../context";

function CheckoutFooter() {
  const { details } = useContext(ShoppingContext);
  // eslint-disable-next-line
  console.log(details);
  return (
    <header className="bg-primary mb-4">
      <h1>CheckoutFooter</h1>
    </header>
  );
}

export default CheckoutFooter;
