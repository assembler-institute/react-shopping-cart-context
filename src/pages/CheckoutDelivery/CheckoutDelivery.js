import React from 'react';

import { withCheckout, withLayout } from "hoc";
import { AddressForm } from 'components';

function CheckoutDelivery() {
  return (
    <AddressForm />
  );
}

export default withLayout(withCheckout(CheckoutDelivery));
