import React from "react";

import "./Step1.scss";

import ShoppingLayout from "../../hoc/ShoppingLayout";

import OrderSummary from "../../components/OrderSummary";

function Step1() {
  return (
    <div className="step1_main--container">
      <div>
        <div>Progress bar</div>
        <div>Form payment</div>
        <div>Payment Button</div>
      </div>
      <div>
        <OrderSummary />
      </div>
    </div>
  );
}

export default ShoppingLayout(Step1);
