import React, { createContext, useContext, useReducer, useEffect } from "react";
import { act } from "react-dom/test-utils";

import { actionTypes } from "./actionTypes";

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
  handleNameChange: () => {},
  handleLastNameChange: () => {},
  handlePhoneNumber: () => {},
  handleEmailChange: () => {},
  handleCountryChange: () => {},
  handleCityChange: () => {},
  handleZipCode: () => {},
  handleDelivery: () => {},
};

export const CheckoutFormContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FIRST_NAME:
      console.log(action.payload);
    case actionTypes.LAST_NAME:
      console.log(action.payload);

    case actionTypes.PHONE_NUMBER:
      console.log(action.payload);

    default:
      return { ...state };
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...state,
    handleNameChange: (event) =>
      dispatch({ type: actionTypes.FIRST_NAME, payload: event.target.value }),
    handleLastNameChange: (event) =>
      dispatch({ type: actionTypes.LAST_NAME, payload: event.target.value }),
    handlePhoneNumber: (event) =>
      dispatch({ type: actionTypes.PHONE_NUMBER, payload: event.target.value }),
    handleEmailChange: (event) =>
      dispatch({ type: actionTypes.EMAIL, payload: event.target.value }),
    handleCountryChange: (event) =>
      dispatch({ type: actionTypes.COUNTRY, payload: event.target.value }),
    handleCityChange: (event) =>
      dispatch({ type: actionTypes.CITY, payload: event.target.value }),
    handleZipCode: (event) =>
      dispatch({ type: actionTypes.ZIPCODE, payload: event.target.value }),
    handleDelivery: (event) =>
      dispatch({
        type: actionTypes.INSTRUCTIONS,
        payload: event.target.value,
      }),
  };
  return (
    <CheckoutFormContext.Provider value={value}>
      {children}
    </CheckoutFormContext.Provider>
  );
};

export function useData() {
  const context = useContext(CheckoutFormContext);
  if (!context) return null;
  return context;
}
