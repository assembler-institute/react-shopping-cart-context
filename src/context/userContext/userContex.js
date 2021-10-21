import React, { createContext, useContext, useReducer } from "react";

export const actionTypes = {
  SUBMIT_ONE_PAGE: "SUBMIT_ONE_PAGE",
  SUBMIT_SECOND_PAGE: "SUBMIT_ONE_PAGE",
  SUBMIT_THIRD_PAGE: "SUBMIT_ONE_PAGE",
};


const initialState = {

  name: "",
  email: "",
  countryCode: "+34",
  phone: "",

  address: "",
  city: "",
  zip: "",
  country: "Cat",

  cardHolder: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  acceptedTerms: false,
}
const userContext = createContext(initialState);
function checkoutReducer(state, action) {
  switch (action.type) {
    case actionTypes.SUBMIT_ONE_PAGE: {
      const { name, email, phone, countryCode } = action.payload
      return {
        ...state,
        name: name,
        email:email,
        phone:phone,
        countryCode:countryCode
      };
    }
    case actionTypes.SUBMIT_SECOND_PAGE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case actionTypes.SUBMIT_THIRD_PAGE: {
      return {
        ...state,
        ...action.payload,
        completed: true,
      }
    }
    default: {
      return state;
    }
  }
}

function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  const value = {
    submitStepOne: (data) => dispatch({
      type: actionTypes.SUBMIT_ONE_PAGE,
      payload: data
    })
  }

  return (
    <userContext.Provider
      value={value}
    >
      {children}
    </userContext.Provider>
  );
}

function useUser() {
  const context = useContext(userContext);
  if (!context) return null;
  return context;
}
export { UserContextProvider, useUser };
