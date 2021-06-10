import { createContext } from "react";

const ShoppingContext = createContext({
  progresBar: 1,
  nextProgress: () => {},
  setLocatStorage: () => {},
  details: {},
  updateDetails: () => {},
  cartItems: [],
  adressData: {},
  updateAdress: () => {},
  paymentData: {},
  updatePayment: () => {},
  handleChange: () => {},
  handleRemove: () => {},
});

export default ShoppingContext;
