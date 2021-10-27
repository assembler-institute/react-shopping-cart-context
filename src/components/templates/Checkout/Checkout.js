import React from 'react';

import { withCheckout } from "components/HOC";

function Checkout({ children }) {
  return (
    <>
      {children}
    </>
  );
}

export default withCheckout(Checkout);