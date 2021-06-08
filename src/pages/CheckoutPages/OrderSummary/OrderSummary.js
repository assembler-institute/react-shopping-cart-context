import React from "react";
import withLayout from "../../../hoc/withLayout";

const isCheckout = true;

function OrderSummary() {
  return (
    <div className="row">
      <div className="col col-8">1234</div>
    </div>
  );
}

export default withLayout(OrderSummary, isCheckout);
