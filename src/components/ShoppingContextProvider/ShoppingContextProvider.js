import React, { useReducer } from "react";

import ShoppingContext from "../../context/ShoppingContext";

const shoppingInitialState = {
  personalDetails: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  shippingDetails: {
    address: "",
    city: "",
    zipCode: "",
    country: "",
  },
  paymentDetails: {
    paymentMethod: "",
    cardHolderName: "",
    cardNumber: "",
    cardExpirationDate: "",
    cardCVVCode: "",
    consentCheckbox: "",
  },
};

function shoppingReducer(state, action) {
  switch (action.type) {
    case "submitStep1": {
      return {
        ...state,
        personalDetails: action.newDetails,
      };
    }
    case "submitStep2": {
      return {
        ...state,
        shippingingDetails: action.newShipping,
      };
    }
    case "submitStep3": {
      return {
        ...state,
        paymentDetails: action.newPayment,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

function ShoppingContextProvider({ children }) {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  function submitStep1(valuesObject) {
    dispatch({
      type: "submitStep1",
      newDetails: valuesObject,
    });
  }

  function submitStep2(valuesObject) {
    dispatch({
      type: "submitStep2",
      newShipping: valuesObject,
    });
  }

  function submitStep3(valuesObject) {
    dispatch({
      type: "submitStep3",
      newPayment: valuesObject,
    });
  }

  // const [address, setAdress] = useState("");
  // const [city, setCity] = useState("");
  // const [zipCode, setZipCode] = useState("");
  // const [country, setCountry] = useState("");

  // const [paymentMethod, setPaymentMethod] = useState("");
  // const [cardHolderName, setCardHolderName] = useState("");
  // const [cardNumber, setCardNumber] = useState("");
  // const [cardExpirationDate, setCardExpirationDate] = useState("");
  // const [cardCVVCode, setcardCVVCode] = useState("");
  // const [consentCheckbox, setconsentCheckbox] = useState("");
  return (
    <ShoppingContext.Provider
      value={{
        personalDetails: state.personalDetails,
        submitStep1: submitStep1,
        shippingingDetails: state.shippingDetails,
        submitStep2: submitStep2,
        paymentDetails: state.paymentDetails,
        submitStep3: submitStep3,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export default ShoppingContextProvider;
