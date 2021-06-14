export const UPDATED_CART_ITEMS = "UPDATED_CART_ITEMS";
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

export function cartReducer(state, action) {
  switch (action.type) {
    case UPDATED_CART_ITEMS:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
