import React from "react";

import CheckoutProfile from "./CheckoutProfile";
import FormContextProvider from "../../components/ContextComponents/FormContextProvider";

import { PROFILE } from "../../utils/constants";

function Checkout({ processStep }) {
  return (
    <FormContextProvider>
      {processStep === PROFILE && <CheckoutProfile />}
    </FormContextProvider>
  );
}

export default Checkout;
