import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

import { actionTypes } from "./actionTypes";

const initialState = {
  name: "",
  lastName: "",
  phoneNumber: null,
  email: "",
  address: "",
  country: "",
  city: "",
  zipCode: "",
  instructions: "",
  handleNameChange: () => { },
  handleLastNameChange: () => { },
  handlePhoneNumber: () => { },
  handleEmailChange: () => { },
  handleAddressChange: () => { },
  handleCountryChange: () => { },
  handleCityChange: () => { },
  handleZipCode: () => { },
  handleDelivery: () => { },
};

export const CheckoutContext = createContext(initialState);

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
        address: action.payload,
      };

    case actionTypes.COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case actionTypes.CITY:
      return {
        ...state,
        city: action.payload,
      };

    case actionTypes.ZIPCODE:
      return {
        ...state,
        zipCode: action.payload,
      };

    case actionTypes.INSTRUCTIONS:
      return {
        ...state,
        instructions: action.payload,
      };
    default:
      return { ...state };
  }
};

const DataProvider = ({ children }) => {
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
    <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>
  );
};

function useData() {
  const context = useContext(CheckoutContext);
  if (!context) return null;
  return context;
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { DataProvider, useData };
