import React from 'react';

import { withCheckout, withLayout } from "components/HOC";
import { PaymentForm } from 'components/UI/organisms';

function CheckoutPayment() {
  return (
    <PaymentForm />
  );
}

export default withLayout(withCheckout(CheckoutPayment));
