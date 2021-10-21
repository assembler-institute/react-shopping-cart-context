import React, { createContext, useContext, useReducer } from 'react';

import { actionTypes } from "./types";

import { useProducts } from "context";

export const initialState = {
  cartItems: {},
  cartItemIds: [],
  isLoading: false,
  hasError: false,
  loadingError: null,
  handleAddToCart: () => { },
  handleChangeQuantity: () => { },
  handleRemoveItem: () => { },
};

const CartItemsContext = createContext(initialState);

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const { cartItems, cartItemIds } = state
      const { products, cartItemId } = action.payload;

      const prevCartItem = cartItemIds.find((itemId) => itemId === cartItemId);

      // @joan => hi ha dos returns

      if (prevCartItem) {
        return {
          ...state,
          cartItems: {
            ...cartItems,
            [cartItemId]: {
              ...cartItems[cartItemId],
              quantity: (cartItems[cartItemId].quantity < cartItems[cartItemId].unitsInStock)
                ? cartItems[cartItemId].quantity + 1
                : cartItems[cartItemId].quantity
            }
          },
          isFetching: false
        };
      }

      return {
        ...state,
        cartItemIds: [
          ...cartItemIds,
          cartItemId
        ],
        cartItems: {
          ...cartItems,
          [cartItemId]: {
            ...products[cartItemId],
            quantity: 1
          }
        },
        isFetching: false
      };
    }
    case actionTypes.CHANGE_QUANTITY: {
      const { cartItems } = state
      const { event, cartItemId } = action.payload;

      return {
        ...state,
        cartItems: {
          ...cartItems,
          [cartItemId]: {
            ...cartItems[cartItemId],
            quantity: (cartItems[cartItemId].id === cartItemId && cartItems[cartItemId].quantity <= cartItems[cartItemId].unitsInStock)
              ? Number(event.target.value)
              : cartItems[cartItemId].quantity
          },
        },
        isFetching: false
      };
    }
    case actionTypes.REMOVE_ITEM: {
      const { cartItems, cartItemIds } = state
      const cartItemId = action.payload;

      const updatedCartItemIds = cartItemIds.filter((itemId) => itemId !== cartItemId);

      delete cartItems[cartItemId]

      return {
        ...state,
        cartItemIds: updatedCartItemIds,
        cartItems: cartItems,
        isFetching: false
      };
    }
    default: {
      return state;
    }
  }
}

function CartItemsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProducts();

  const value = {
    ...state,
    handleAddToCart: (cartItemId) => dispatch({ type: actionTypes.ADD_TO_CART, payload: { products, cartItemId } }),
    handleChangeQuantity: (event, cartItemId) => dispatch({ type: actionTypes.CHANGE_QUANTITY, payload: { event, cartItemId } }),
    handleRemoveItem: (cartItemId) => dispatch({ type: actionTypes.REMOVE_ITEM, payload: cartItemId }),
  };

  return (
    <CartItemsContext.Provider value={value}>{children}</CartItemsContext.Provider>
  );
}

function useCartItems() {
  const context = useContext(CartItemsContext);
  if (!context) return null;
  return context;
}

export { CartItemsProvider, useCartItems };
