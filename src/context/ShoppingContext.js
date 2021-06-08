import { createContext } from "react";

const ShoppingContext = createContext({
  name: {},
  email: "",
  phoneNumber: "",
  submitStep1: () => {},
  address: "",
  city: "",
  zipCode: "",
  country: "",
  submitStep2: () => {},
  paymentMethod: "",
  cardHolderName: "",
  cardNumber: "",
  cardExpirationDate: "",
  cardCVVCode: "",
  consentCheckbox: "",
  submitStep3: () => {},
});

export default ShoppingContext;
