import React from "react";

import "./Step1.scss";

import ShoppingLayout from "../../hoc/ShoppingLayout";

import OrderSummary from "../../components/OrderSummary";

function Step1({ cartItems, handleRemove, handleChange }) {
  return (
    <div className="step1_main--container">
      <div>
        <div>Progress bar</div>
        <div>Form payment</div>
        <div>Payment Button</div>
      </div>
      <div>
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
