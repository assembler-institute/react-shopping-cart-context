import { createContext } from "react";

const checkoutData = createContext({
  isCheckoutDisabled: true,
  userName: "",
  userPassword: "",
  name: "",
  lastName: "",
  email: "",
  phonePrefix: "",
  phoneNumber: "",
  address: "",
  city: "",
  ZC: 0,
  country: "",
  paymentMethod: "",
  cardName: "",
  cardNumber: 0,
  cardExpiryDate: 0,
  cvc: 0,
  termsConditions: false,
  setCheckoutData: () => {},
  tempData: () => {},
});

export default checkoutData;
