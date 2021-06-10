import React from "react";
// import { NavLink } from "react-router-dom";

import "./CheckoutHeader.scss";

function CheckoutHeader() {
  return (
    <header className="WrappHeader">
      <div className="Line">
        <div
          className="progressLine3
        "
        />
        <div className="Sphere1">
          <p className="detailsText">Details</p>
        </div>
        <div className="Sphere2">
          <p className="adressText">Adress</p>
        </div>
        <div className="Sphere3">
          <p className="paymentText">Payment</p>
        </div>
      </div>
    </header>
  );
}

export default CheckoutHeader;
