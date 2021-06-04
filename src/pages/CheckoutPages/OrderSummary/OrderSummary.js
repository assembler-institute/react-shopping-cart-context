import React from "react";
import withLayout from "../../../hoc/withLayout";

const isCheckout = true;

function OrderSummary() {
  return <div>Order summary</div>;
}

export default withLayout(OrderSummary, isCheckout);
