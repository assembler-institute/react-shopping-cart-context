import React from 'react';

import { withLayout } from "components/HOC";
import { Checkout } from 'components/templates';
import { AddressForm } from 'components/UI/organisms';

function CheckoutDelivery() {
  return (
    <Checkout>
      <AddressForm />
    </Checkout>
  );
}

export default withLayout(CheckoutDelivery);
