import React, { createContext, useReducer } from "react";

export const orderContext = createContext({
  stepOne: {
    completed: false,
    name: "",
    email: "",
    countryCode: "+34",
    phone: "",
  },
  stepTwo: {
    completed: false,
    address: "",
    city: "",
    zip: "",
    country: "Spain",
  },
  stepThree: {
    completed: false,
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
    countryCode: "+34",
    phone: "",
  },
  stepTwo: {
    completed: false,
    address: "",
    city: "",
    zip: "",
    country: "Spain",
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
const SUBMITTWO = "SUBMITTWO";
const SUBMITTHREE = "SUBMITTHREE";
const RESET = "RESET";

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
    case SUBMITTWO: {
      return {
        ...state,
        stepTwo: {
          ...action.payload,
          completed: true,
        },
      };
    }
    case SUBMITTHREE: {
      return {
        ...state,
        stepThree: {
          ...action.payload,
          completed: true,
        },
      };
    }
    case RESET: {
      return {
        stepOne: {
          completed: false,
          name: "",
          email: "",
          countryCode: "+34",
          phone: "",
        },
        stepTwo: {
          completed: false,
          address: "",
          city: "",
          zip: "",
          country: "Spain",
        },
        stepThree: {
          completed: false,
          cardHolder: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
          acceptedTerms: false,
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

  function submitStepOne(formOne) {
    dispatch({
      type: SUBMITONE,
      payload: formOne,
    });
  }

  function submitStepTwo(formTwo) {
    dispatch({
      type: SUBMITTWO,
      payload: formTwo,
    });
  }

  function submitStepThree(formThree) {
    dispatch({
      type: SUBMITTHREE,
      payload: formThree,
    });
  }

  function resetCheckoutForms() {
    dispatch({
      type: RESET,
    });
  }

  return (
    <orderContext.Provider
      value={{
        stepOne: checkState.stepOne,
        stepTwo: checkState.stepTwo,
        stepThree: checkState.stepThree,
        submitStepOne: submitStepOne,
        submitStepTwo: submitStepTwo,
        submitStepThree: submitStepThree,
        resetCheckoutForms: resetCheckoutForms,
      }}
    >
      {children}
    </orderContext.Provider>
  );
}
