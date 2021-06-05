import React from "react";

import "./Step1.scss";

import ShoppingLayout from "../../hoc/ShoppingLayout";
import ProgressBar from "../../components/ProgressBar";
import OrderSummary from "../../components/OrderSummary";

function Step1({ cartItems, handleRemove, handleChange, ...routeProps }) {
  return (
    <div className="step1__main--container">
      <div className="step1__main--container--form">
        <ProgressBar {...routeProps} />
        <div>Form payment</div>
        <div>Payment Button</div>
      </div>
      <div className="col">
        <OrderSummary
          cartItems={cartItems}
          handleRemove={handleRemove}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ShoppingLayout(Step1);
