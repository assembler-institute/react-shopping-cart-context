import React, { useReducer, useContext, createContext } from "react";
import { actionTypes } from "./typesUser";

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
  cvv: "",
  acceptedTerms: false,
  paymentMethod:""
};

/* const userContext = createContext ({
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
    cvv: "",
    acceptedTerms: false,
    saveUser: ()=>{},
    saveAddress: ()=>{},
    savePayment: ()=>{},
})
 */

const UserContext = createContext(initValues);

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SAVE_USER: {
      const { name, email, countryCode, phone } = action.payload;
      return {
        ...state,
        name: name,
        email: email,
        countryCode: countryCode,
        phone: phone,
      };
    }
    case actionTypes.SAVE_ADDRESS: {
      const { address, city, zip, country } = action.payload;
      console.log("entra");
      return {
        ...state,
        address,
        city,
        zip,
        country,
      };
    }
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
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUsers() {
  const context = useContext(UserContext);
  if (!context) return null;
  return context;
}

export { UsersProvider, useUsers };
