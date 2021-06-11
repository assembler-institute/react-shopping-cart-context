import React from "react";

import "./checkoutPage.scss";

import ShoppingLayout from "../../hoc/ShoppingLayout";
import ProgressBar from "../../components/ProgressBar";
import CheckoutResume from "../../components/CheckoutResume";

function Step4({ cartItems, ...routeProps }) {
  return (
    <div className="checkout__main--container">
      <div className="checkout__main--container--form">
        <ProgressBar {...routeProps} />
        <CheckoutResume {...routeProps} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default ShoppingLayout(Step4);
