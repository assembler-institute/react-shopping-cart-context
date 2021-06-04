import { createContext } from "react";

const ShoppingContext = createContext({
  path: 1,
  nextPath: () => {},
});

export default ShoppingContext;
