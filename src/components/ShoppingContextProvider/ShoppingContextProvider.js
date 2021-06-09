import React, { useReducer } from "react";

import ShoppingContext from "../../context/ShoppingContext";

const shoppingInitialState = {
  details: {
    name: "",
    email: "",
  },
};

function shoppingReducer(state, action) {
  switch (action.type) {
    case "submitStep1": {
      return {
        ...state,
        details: action.newdetails,
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
  // Destructuring context
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  function submitStep1(valuesObject) {
    dispatch({
      type: "submitStep1",
      newdetails: valuesObject,
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
        // name: state.name,
        // email: state.email,
        details: state.details,
        phoneNumber: "",
        submitStep1: submitStep1,
        address: "",
        city: "",
        zipCode: "",
        country: "",
        submitStep2: () => {},
        paymentMethod: "",
        cardHolderName: "",
        cardNumber: "",
        cardExpirationDate: "",
        cardCVVCode: "",
        consentCheckbox: "",
        submitStep3: () => {},
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export default ShoppingContextProvider;
