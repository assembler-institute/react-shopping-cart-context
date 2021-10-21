import React from 'react';

import { withCheckout, withLayout } from "hoc";
import { DetailsForm } from 'components';

function CheckoutInfo() {
  return (
    <DetailsForm />
  );
}

export default withLayout(withCheckout(CheckoutInfo));
