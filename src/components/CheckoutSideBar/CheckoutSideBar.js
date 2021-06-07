import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";

import ShoppingContext from "../../context";

import "./CheckoutSideBar.scss";

function CheckoutSideBar() {
  const { cartItems } = useContext(ShoppingContext);

  return (
    <header className="bg-primary mb-4">
      <h4>{JSON.stringify(cartItems)}</h4>
    </header>
  );
}

export default CheckoutSideBar;
