import React from "react";
import withLayout from "../../../hoc/withLayout";

const isCheckout = true;

function PaymentDetails() {
  return <div>Payment details</div>;
}

export default withLayout(PaymentDetails, isCheckout);
