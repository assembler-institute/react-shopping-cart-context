import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  add: () => {},
  remove: () => {},
  change: () => {},
});

export default CartContext;
