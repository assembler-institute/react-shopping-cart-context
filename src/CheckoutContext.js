import React, { createContext } from "react";

export const orderContext = createContext({
  stepOne: {
    completed: false,
    name: "",
    email: "",
    country: "",
    phone: "",
  },
  stepTwo: {
    completed: false,
    address: "",
    city: "",
    zip: "",
    country: "",
  },
  stepThree: {
    completed: false,
    payMethod: "",
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    acceptedTerms: false,
  },
});

export function CheckoutContext({ children }) {
  return (
    <orderContext.Provider
      value={{
        stepOne: {
          completed: false,
          name: "",
          email: "",
          country: "",
          phone: "",
        },
        stepTwo: {
          completed: false,
          address: "",
          city: "",
          zip: "",
          country: "",
        },
        stepThree: {
          completed: false,
          payMethod: "",
          cardHolder: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
          acceptedTerms: false,
        },
      }}
    >
      {children}
    </orderContext.Provider>
  );
}
