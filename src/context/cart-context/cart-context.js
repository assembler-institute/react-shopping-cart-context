import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  total: () => [],
  add: () => {},
  remove: () => {},
  change: () => {},
});

export default CartContext;
