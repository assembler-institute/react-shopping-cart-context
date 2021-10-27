import React from 'react';

import { withLayout } from "components/HOC";
import { Checkout } from 'components/templates';
import { PaymentForm } from 'components/UI/organisms';

function CheckoutPayment() {
  return (
    <Checkout>
      <PaymentForm />
    </Checkout>
  );
}

export default withLayout(CheckoutPayment);
