/* eslint-disable no-console */
import React from "react";

import "./Step1.scss";
import "../../components/OrderSummary/OrderSummary.scss";

import ShoppingLayout from "../../hoc/ShoppingLayout";
import ProgressBar from "../../components/ProgressBar";
import OrderSummary from "../../components/OrderSummary";
import PersonalDetailsForm from "../../components/Forms/PersonalDetailsForm";
// import FormShopping from "../../components/FormShopping";

function Step1({ cartItems, ...routeProps }) {
  return (
    <div className="step1__main--container">
      <div className="step1__main--container--form">
        <ProgressBar {...routeProps} />
        <PersonalDetailsForm />
      </div>
      <div className="col">
        <OrderSummary cartItems={cartItems} />
      </div>
    </div>
  );
}

export default ShoppingLayout(Step1);
