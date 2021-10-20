import React from 'react';

import withLayout from "../../hoc/withLayout";
import DetailsForm from '../../components/DetailsForm';

function Checkout() {
  return (
    <>
      <DetailsForm />
    </>
  );
}

export default withLayout(Checkout);
