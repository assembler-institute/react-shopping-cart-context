import React from "react";
import { Link } from "react-router-dom";

export default function SubHeader() {
  return (
    <div className="row">
      <div className="col col-3">
        <Link to="/checkout/step-1">Personal Details</Link>
      </div>
      <div className="col col-3">
        <Link to="/checkout/step-2">Billing Address</Link>
      </div>
      <div className="col col-3">
        <Link to="/checkout/step-3">Payment Details</Link>
      </div>
      <div className="col col-3">
        <Link to="/checkout/order-summary">Order Summary</Link>
      </div>
    </div>
  );
}
