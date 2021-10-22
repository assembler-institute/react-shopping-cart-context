import React from "react";
import { Link } from "react-router-dom";
import "./NavList.scss";

export default function NavList() {
  return (
    <>
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
          <span>1.</span> Personal Details
        </div>
        <div
          className={
            "step ordreoversigt" +
            (location.pathname === "/checkout/step-2" && " active") +
            (location.pathname === "/checkout/step-3" ? " complete" : "")
          }
        >
          <span>2.</span> Address
        </div>
        <div
          className={
            "step betaling" +
            (location.pathname === "/checkout/step-3" && " active") +
            (location.pathname === "/checkout/step-4" ? " complete" : "")
          }
        >
          <span>3.</span> Payment Information
        </div>
        <div className="step kvittering incomplete">
          <span>4.</span> Order Completed
        </div>
      </div>
    </>
    // <ul className="row flex justify-content-around list-unstyled">
    //   <li
    //     className={          location.pathname === "/checkout/step-1" ? "current-step" : ""        }
    //   >
    //     <Link to="/checkout/step-1">Information</Link>
    //   </li>
    //   <li className="font-bolder"> &#x2192; </li>
    //   <li>
    //     <Link to="/checkout/step-2">Delivery</Link>
    //   </li>
    //   <li> &#x2192; </li>
    //   <li>
    //     <Link to="/checkout/step-3">Payment</Link>
    //   </li>
    // </ul>
  );
}
