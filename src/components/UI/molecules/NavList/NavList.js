import React from "react";
import { Link } from "react-router-dom";
import "./NavList.scss";

export default function NavList() {
  return (
    <div id="checkout-steps">
      <div
        className={
          "step levering" +
          (location.pathname === "/checkout/step-1" && " active") +
          (location.pathname === "/checkout/step-2" ||
            location.pathname === "/checkout/step-3"
            ? " complete"
            : "")
        }
      >
        <Link to="/checkout/step-1">Information</Link>
      </div>
      <div
        className={
          "step ordreoversigt" +
          (location.pathname === "/checkout/step-2" && " active") +
          (location.pathname === "/checkout/step-3" ? " complete" : "")
        }
      >
        <Link to="/checkout/step-2">Delivery</Link>
      </div>
      <div
        className={
          "step betaling" +
          (location.pathname === "/checkout/step-3" && " active") +
          (location.pathname === "/checkout/step-4" ? " complete" : "")
        }
      >
        <Link to="/checkout/step-3">Payment</Link>
      </div>
      <div className="step kvittering incomplete">
        Confirmation
      </div>
    </div>
  );
}
