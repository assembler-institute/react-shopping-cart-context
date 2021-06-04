import React from "react";
import withLayout from "../../../hoc/withLayout";

const isCheckout = true;

function BillingAddress() {
  return <div>Billing address</div>;
}

export default withLayout(BillingAddress, isCheckout);
