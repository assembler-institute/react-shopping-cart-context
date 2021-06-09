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
        name: state.name,
        email: state.email,
        tel: state.tel,
        address: state.address,
        city: state.city,
        zip: state.zip,
        country: state.country,
        paymentMethod: state.paymentMethod,
        carholderName: state.carholderName,
        cardNumber: state.cardNumber,
        cardExpiry: state.cardExpiry,
        cardCvv: state.cardCvv,
        updateCheckoutContext,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
