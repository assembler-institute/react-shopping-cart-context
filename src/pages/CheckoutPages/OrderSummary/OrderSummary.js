import React from "react";
import withLayout from "../../../hoc/withLayout";

const isCheckout = true;

function OrderSummary() {
  return (
    <div className="row">
      <div className="col col-12">Order summary page</div>
    </div>
  );
}

export default withLayout(OrderSummary, isCheckout);
