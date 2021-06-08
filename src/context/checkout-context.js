import React, { createContext, useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  tel: "",
  address: "",
  city: "",
  zip: "",
  country: "",
  paymentMethod: "",
  carholderName: "",
  cardNumber: "",
  cardExpiry: "",
  cardCvv: "",
};

const CheckoutContext = createContext(initialState);

const UPDATE_CHECKOUT = "UPDATE_CHECKOUT";

function CheckoutReducer(state, action) {
  switch (action.type) {
    case UPDATE_CHECKOUT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const CheckoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CheckoutReducer, initialState);

  function updateCheckoutContext(data) {
    dispatch({
      type: "UPDATE_CHECKOUT",
      payload: data,
    });
  }

  return (
    <CheckoutContext.Provider
      value={{
        form: state.form,
        updateCheckoutContext,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
