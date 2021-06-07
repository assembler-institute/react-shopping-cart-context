import React, { useState } from "react";

import CheckoutProfile from "./CheckoutProfile";

import { PROFILE } from "../../utils/constants";

import FormContext from "../../context/form-context";

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
  payPal: {
    payPalUser: "",
    payPalPassword: "",
  },
  applePay: {
    applePayUser: "",
    applePayPassword: "",
  },
};

function Checkout({ processStep }) {
  const [formData, setFormData] = useState(initialValueFormData);

  function updateFormData(newData) {
    setFormData((prevData) => {
      console.log({ ...prevData, ...newData });
      return { ...prevData, ...newData };
    });
  }

  return (
    <FormContext.Provider
      value={{
        data: formData,
        setData: updateFormData,
      }}
    >
      {processStep === PROFILE && <CheckoutProfile />}
    </FormContext.Provider>
  );
}

export default Checkout;
