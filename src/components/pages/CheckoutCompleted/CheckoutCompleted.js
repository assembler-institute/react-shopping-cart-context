import React from "react";

import { withCheckout, withLayout } from "components/HOC";
import { CheckoutComplete } from "components/UI/organisms";

function CheckoutCompleted() {
  return <CheckoutComplete />;
}

export default withLayout(CheckoutCompleted);
