import React from 'react';

import { withLayout } from "components/HOC";
import { Checkout } from 'components/templates';
import { DetailsForm } from 'components/UI/organisms';

function CheckoutInfo() {
  return (
    <Checkout>
      <DetailsForm />
    </Checkout>
  );
}

export default withLayout(CheckoutInfo);
