import { createContext } from "react";

const CartItemsContext = createContext({
	cartItems: [],
	handleAddCartItem: () => {},
	handleEditCartItem: () => {},
	handleRemoveCartItem: () => {},
});

export default CartItemsContext;
