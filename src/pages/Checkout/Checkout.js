import React from "react";

import CheckoutProfile from "./CheckoutProfile";

import { PROFILE } from "../../utils/constants";

const initialValueFormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postCode: "",
  country: "",
  card: {
    cardName: "",
    cardNumber: "",
    cardDate: "",
    cardCVV: "",
    cardTerms: false,
  },
  paypal: {
    paypalUser: "",
    paypalPassword: "",
  },
  applePay: {
    applePayUser: "",
    applePayPassword: "",
  },
};

function Checkout({ processStep }) {
  return <>{processStep === PROFILE && <CheckoutProfile />}</>;
}

export default Checkout;
