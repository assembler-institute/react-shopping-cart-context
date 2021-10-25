import React from "react";
import { Link } from "react-router-dom";
import "./NavList.scss";

export default function NavList() {
  return (
<<<<<<< HEAD
    <>
      <div id="checkout-steps">
        <div
          className={
            "step levering" +
            (location.pathname === "/checkout/step-1" ? " active" : "") +
            (location.pathname === "/checkout/step-2" ||
            location.pathname === "/checkout/step-3"
              ? " complete"
              : "")
          }
        >
          <span>1.</span> <Link to="/checkout/step-1">Personal Details</Link>
        </div>
        <div
          className={
            "step ordreoversigt " +
            (location.pathname === "/checkout/step-2" ? " active" : "") +
            (location.pathname === "/checkout/step-3" ? " complete" : "")
          }
        >
          <span>2.</span> <Link to="/checkout/step-2">Address</Link>
        </div>
        <div
          className={
            "step betaling " +
            (location.pathname === "/checkout/step-3" ? " active" : "") +
            (location.pathname === "/checkout/step-4" ? " complete" : "")
          }
        >
          <span>3.</span> <Link to="/checkout/step-3">Payment Information</Link>
        </div>
        <div
          className={
            "step kvittering " +
            (location.pathname === "/checkout/complete" ? " complete" : "")
          }
        >
          <span>4.</span> Order Completed
        </div>
=======
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
>>>>>>> 2bf4393bb00aaddc77d9d357c3b60c4dbf125491
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
