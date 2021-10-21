import React, { createContext, useContext, useReducer, useEffect } from "react";

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
  handleAddressChange: () => {},
  handleCountryChange: () => {},
  handleCityChange: () => {},
  handleZipCode: () => {},
  handleDelivery: () => {},
};

export const CheckoutForm = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FIRST_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case actionTypes.LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case actionTypes.PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      };

    case actionTypes.EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case actionTypes.ADDRESS:
      return {
        ...state,
        Address: action.payload,
      };

    case actionTypes.COUNTRY:
      return {
        ...state,
        Country: action.payload,
      };
    case actionTypes.CITY:
      return {
        ...state,
        City: action.payload,
      };

    case actionTypes.ZIPCODE:
      return {
        ...state,
        ZipCode: action.payload,
      };

    case actionTypes.INSTRUCTIONS:
      return {
        ...state,
        DeliveryInstrucctions: action.payload,
      };
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
    handleAddressChange: (event) =>
      dispatch({ type: actionTypes.ADDRESS, payload: event.target.value }),
    handleCountryChange: (val) =>
      dispatch({ type: actionTypes.COUNTRY, payload: val }),
    handleCityChange: (val) =>
      dispatch({ type: actionTypes.CITY, payload: val }),
    handleZipCode: (event) =>
      dispatch({ type: actionTypes.ZIPCODE, payload: event.target.value }),
    handleDelivery: (event) =>
      dispatch({
        type: actionTypes.INSTRUCTIONS,
        payload: event.target.value,
      }),
  };
  return (
    <CheckoutForm.Provider value={value}>{children}</CheckoutForm.Provider>
  );
};

export function useData() {
  const context = useContext(CheckoutForm);
  if (!context) return null;
  return context;
}
