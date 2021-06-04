import React from "react";

import CheckoutProfile from "./CheckoutProfile";

import { PROFILE } from "../../utils/constants";

function Checkout({ processStep }) {
  return <>{processStep === PROFILE && <CheckoutProfile />}</>;
}

export default Checkout;
