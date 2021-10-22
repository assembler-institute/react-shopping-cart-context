import React from 'react';

import { withCheckout, withLayout } from "components/HOC";
import { AddressForm } from 'components/UI/organisms';

function CheckoutDelivery() {
  return (
    <AddressForm />
  );
}

export default withLayout(withCheckout(CheckoutDelivery));
