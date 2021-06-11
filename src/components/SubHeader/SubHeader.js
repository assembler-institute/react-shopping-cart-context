import React, { useContext } from "react";
import { Link } from "react-router-dom";

import checkoutContext from "../../context/checkoutData";

import NavBar from "../NavBar";

import "./SubHeader.scss";

export default function SubHeader() {
  const { state } = useContext(checkoutContext);
  return (
    <div className="row mt-5 text-center">
      <div className="col col-12">
        <NavBar />
      </div>
      <div className="col col-12 d-flex navbar-wrapper">
        <div className="col col-3">
          <Link to="/checkout/step-1">
            <button
              className="navbar-button"
              type="button"
              disabled={state.disabledPersonalDetails}
            >
              1
            </button>
          </Link>
          <p className="navbar-text">Personal details</p>
        </div>
        <div className="col col-3">
          <Link to="/checkout/step-2">
            <button
              className="navbar-button"
              type="button"
              disabled={state.disabledBillingAddress}
            >
              2
            </button>
          </Link>
          <p className="navbar-text">Billing Address</p>
        </div>
        <div className="col col-3">
          <Link to="/checkout/step-3">
            <button
              className="navbar-button"
              type="button"
              disabled={state.disabledPaymentDetails}
            >
              3
            </button>
          </Link>
          <p className="navbar-text">Payment Details</p>
        </div>
        <div className="col col-3">
          <Link to="/checkout/order-summary">
            <button
              className="navbar-button"
              type="button"
              disabled={state.disabledOrderSummary}
            >
              4
            </button>
          </Link>
          <p className="navbar-text">Order Summary</p>
        </div>
      </div>
    </div>
  );
}
