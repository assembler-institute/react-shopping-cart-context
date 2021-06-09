import { createContext } from "react";

const ShoppingContext = createContext({
  personalDetails: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  submitStep1: () => {},
  shippingingDetails: {
    address: "",
    city: "",
    zipCode: "",
    country: "",
  },
  submitStep2: () => {},
  paymentDetails: {
    paymentMethod: "",
    cardHolderName: "",
    cardNumber: "",
    cardExpirationDate: "",
    cardCVVCode: "",
    consentCheckbox: false,
  },
  submitStep3: () => {},
});

export default ShoppingContext;
