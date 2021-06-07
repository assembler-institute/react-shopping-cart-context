import { createContext } from "react";

const ShoppingContext = createContext({
  path: 1,
  nextPath: () => {},
  prevPath: () => {},
});

export default ShoppingContext;
