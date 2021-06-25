import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { orderContext } from "../OrderContextProvider/OrderContextProvider";

import "./CheckoutHeader.scss";

function CheckoutHeader() {
  const { stepOne, stepTwo } = useContext(orderContext);

  return (
    <header>
      <div className="justify-content-between checkout-header">
        <nav className="d-flex justify-content-around steps-nav">
          <NavLink exact activeClassName="is-active" to="/checkout/step-1">
            1. Information
          </NavLink>
          {stepOne.completed ? (
            <NavLink
              disabled={!stepOne.completed}
              exact
              activeClassName="is-active"
              to="/checkout/step-2"
            >
              2. Shipping
            </NavLink>
          ) : (
            <span>2. Shipping</span>
          )}
          {stepTwo.completed ? (
            <NavLink
              disabled={!stepTwo.completed}
              exact
              activeClassName="is-active"
              to="/checkout/step-3"
            >
              3. Payment
            </NavLink>
          ) : (
            <span>3. Payment</span>
          )}
        </nav>
      </div>
    </header>
  );
}
export default CheckoutHeader;
