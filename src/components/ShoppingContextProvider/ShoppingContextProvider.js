import React, { useReducer, useEffect } from "react";

import ShoppingContext from "../../context/ShoppingContext";

// function getLocalStorageCheckoutData() {
//   const prevState = localStorage.getItem("checkoutData");
//   if (!prevState) {
//     return {
//       personalDetails: {
//         name: "",
//         email: "",
//         phoneNumber: "",
//         countryPrefix: "",
//       },
//       shippingDetails: {
//         address: "",
//         city: "",
//         zipCode: "",
//         country: "",
//       },
//       paymentDetails: {
//         paymentMethod: "",
//         cardHolderName: "",
//         cardNumber: "",
//         cardExpirationDate: "",
//         cardCVVCode: "",
//         consentCheckbox: false,
//       },
//     };
//   }

//   try {
//     return JSON.parse(prevState);
//   } catch (error) {
//     return null;
//   }
// }

const shoppingInitialState = {
  personalDetails: {
    name: "",
    email: "",
    phoneNumber: "",
    countryPrefix: "",
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
    consentCheckbox: false,
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
        shippingDetails: action.newShipping,
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
  // const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const [state, dispatch] = useReducer(
    shoppingReducer,
    shoppingInitialState,
    () => {
      const localData = localStorage.getItem("react-context");
      return localData ? JSON.parse(localData) : [];
    },
  );
  // const { personalDetails, shippingDetails, paymentDetails } = state;
  // console.log(personalDetails);

  function submitStep1(valuesObject) {
    dispatch({
      type: "submitStep1",
      newDetails: valuesObject,
    });
    // console.log("Im going to update localStorage");
    // localStorage.setItem(
    //   "checkoutData",
    //   JSON.stringify(personalDetails, shippingDetails, paymentDetails),
    // );
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

  // function saveLocalStorage() {
  //   useLocalStorage(shoppingReducer, CONTEXT_LOCAL_STORAGE_KEY);
  //   console.log(shoppingReducer);
  // }

  useEffect(() => {
    localStorage.setItem("react-context", JSON.stringify(state));
  }, [state]);

  return (
    <ShoppingContext.Provider
      value={{
        personalDetails: state.personalDetails,
        submitStep1: submitStep1,
        shippingDetails: state.shippingDetails,
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
