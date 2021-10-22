import React from "react";

import { withCheckout, withLayout } from "hoc";
import { PaymentForm } from "components/UI";

function CheckoutPayment() {
  return <PaymentForm />;
}

export default withLayout(withCheckout(CheckoutPayment));
