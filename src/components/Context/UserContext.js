import React, { useReducer, useContext, createContext } from "react";
import { actionTypes } from "./typesUser";
import { TAXES, SHIPPING } from "../../Variables/Variables";

const initValues = {
  completed: false,
  name: "",
  email: "",
  countryCode: "+34",
  phone: "",
  address: "",
  city: "",
  zip: "",
  country: "Spain",
  cardHolder: "",
  cardNumber: "",
  expiryDate: "",
  cvc: "",
  rules: false,
  paymentMethod: "Visa",
  step: 1,
  subTotal: 0,
  taxes: 0,
  shipping: 0,
  discount: 0,
  total: 0,
  userDataValid: false,
};

const UserContext = createContext(initValues);

function reducer(state, action) {
  const { step } = state;

  switch (action.type) {
    case actionTypes.SAVE_USER: {
      const { name, email, countryCode, phone } = action.payload;

      return {
        ...state,
        name: name,
        email: email,
        countryCode: countryCode,
        phone: phone,
        userDataValid: true,
        /* step: step + 1, */
      };
    }
    case actionTypes.SAVE_ADDRESS: {
      const { address, city, zip, country } = action.payload;
      let taxes = 1.21,
        shipping = 1.99;
      for (const key in TAXES) {
        if (country === key) {
          taxes = TAXES[key];
          shipping = SHIPPING[key];
        }
      }
      return {
        ...state,
        address,
        city,
        zip,
        country,
        shipping: shipping,
        taxes: taxes,
        userDataValid: true,
        /* step: step + 1, */
      };
    }
    case actionTypes.SAVE_PAYMENT: {
      console.log("hola");
      const { cvc, expiry, name, rules, number, pay } = action.payload;
      /* const { cvc, cardNumber, expiryDate, rules } = action.payload; */
      
      return {
        ...state,
        cvc,
        expiryDate: expiry,
        cardHolder: name,
        cardNumber: number,
        rules,
        paymentMethod: pay
      };
    }
    case actionTypes.NEXT_STEP: {
      return {
        ...state,
        step: step + 1,
      };
    }
    default:
      return state;
  }
}

function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initValues);

  const value = {
    ...state,
    saveUser: (data) =>
      dispatch({ type: actionTypes.SAVE_USER, payload: data }),
    saveAddress: (data) =>
      dispatch({ type: actionTypes.SAVE_ADDRESS, payload: data }),
    savePayment: (data) =>
      dispatch({ type: actionTypes.SAVE_PAYMENT, payload: data }),
    nextStep: () => dispatch({ type: actionTypes.NEXT_STEP }),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUsers() {
  const context = useContext(UserContext);
  if (!context) return null;
  return context;
}

export { UsersProvider, useUsers };
