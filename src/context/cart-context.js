import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
});

export default CartContext;
