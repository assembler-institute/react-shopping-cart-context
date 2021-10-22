import React from 'react';

import { withCheckout, withLayout } from "components/HOC";
import { DetailsForm } from 'components/UI/organisms';

function CheckoutInfo() {
  return (
    <DetailsForm />
  );
}

export default withLayout(withCheckout(CheckoutInfo));
