import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  handleAddToCart: () => {},
  handleChange: () => {},
  handleRemove: () => {},
  getCartTotal: () => [],
});
export default CartContext;
