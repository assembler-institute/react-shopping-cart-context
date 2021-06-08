import { createContext } from "react";

const ShoppingContext = createContext({
  path: 1,
  nextPath: () => {},
  prevPath: () => {},
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
