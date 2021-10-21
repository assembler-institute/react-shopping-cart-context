import React, { createContext } from "react";

const initialState = {
  name: "",
  lastName: "",
  phoneNumber: null,
  email: "",
  Address: "",
  Country: "",
  City: "",
  ZipCode: "",
  DeliveryInstrucctions: "",
};

const CheckoutFormContext = createContext(initialState);

export default CheckoutFormContext;
