import { createContext } from "react";

const ShoppingContext = createContext({
  path: 1,
  nextPath: () => {},
  prevPath: () => {},
  details: {},
  updateDetails: () => {},
});

export default ShoppingContext;
