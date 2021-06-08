// const cartItems = JSON.parse(localStorage.getItem("react-sc-state-cart-items"));

export const initialState = {
  //   cartItems: cartItems,
  account: {
    userName: "",
    emailAdress: "",
    phoneNumber: "",
    userInfo: false,
  },
  billing: {
    address: "",
    city: "",
    postCode: "",
    country: "",
    billingInfo: false,
  },
  payment: {
    paymentType: "",
    cardholderName: "",
    cardNumber: "",
    cardExpiryDate: "",
    cvvCode: "",
    conditions: false,
    paymentInfo: false,
  },
};

export const ACTIONS = {
  ADD_ACCOUNT: "add-account",
  ADD_BILLING: "add-billing",
  ADD_PAYMENT: "add-payment",
};

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
