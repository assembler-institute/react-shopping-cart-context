import React, { useEffect, useReducer } from "react";

import FormContext from "../../../context/form-context";

const initialValueFormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postCode: "",
  country: "",
  paymentMethod: "",
  card: {
    cardName: "",
    cardNumber: "",
    cardDate: "",
    cardCVV: "",
    cardTerms: false,
  },
  payPal: {
    payPalUser: "",
    payPalPassword: "",
  },
  applePay: {
    applePayUser: "",
    applePayPassword: "",
  },
};

const UPDATE_FORM = "UPDATE_FORM";

function reducerForm(state, action) {
  switch (action.type) {
    case UPDATE_FORM: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

function FormContextProvider({ children }) {
  const [formData, dispatch] = useReducer(reducerForm, initialValueFormData);

  function updateFormData(newData) {
    dispatch({ type: UPDATE_FORM, payload: newData });
  }

  return (
    <FormContext.Provider
      value={{
        data: formData,
        setData: updateFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;
