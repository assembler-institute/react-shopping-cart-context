import React from "react";

import ShoppingLayout from "../../hoc/ShoppingLayout";
import ProgressBar from "../../components/ProgressBar";
import OrderSummary from "../../components/OrderSummary";
import FormShopping from "../../components/FormShopping";

function Step2({ cartItems, handleRemove, handleChange, ...routeProps }) {
  return (
    <div className="step1__main--container">
      <div className="step1__main--container--form">
        <ProgressBar {...routeProps} />
        <FormShopping />
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

export default ShoppingLayout(Step2);
