import React, { createContext, useReducer } from "react";

export const orderContext = createContext({
  stepOne: {
    completed: false,
    name: "",
    email: "",
    countryCode: "",
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

export const checkInitialState = {
  stepOne: {
    completed: false,
    name: "",
    email: "",
    countryCode: "",
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
};

const SUBMITONE = "SUBMITONE";

export function checkoutReducer(state, action) {
  switch (action.type) {
    case SUBMITONE: {
      return {
        ...state,
        stepOne: {
          ...action.payload,
          completed: true,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export function CheckoutContext({ children }) {
  const [checkState, dispatch] = useReducer(checkoutReducer, checkInitialState);

  function submitStepOne(formInfo) {
    dispatch({
      type: SUBMITONE,
      payload: formInfo,
    });
  }

  return (
    <orderContext.Provider
      value={{
        stepOne: checkState.stepOne,
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
        submitStepOne: submitStepOne,
      }}
    >
      {children}
    </orderContext.Provider>
  );
}
