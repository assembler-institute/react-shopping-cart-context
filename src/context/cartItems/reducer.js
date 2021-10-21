import React, { createContext, useContext, useReducer, useEffect } from "react";

import { actionTypes } from "./types";

import * as api from "../../api/index";
import loadLocalStorageItems from "utils/loadLocalStorageItems";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

export const initialState = {
  products: {},
  productIds: [],
  cartItems: {},
  cartItemIds: [],
  isLoading: false,
  hasError: false,
  loadingError: null,
  handleAddToCart: () => {},
  handleChangeQuantity: () => {},
  handleRemoveItem: () => {},
};

const CartItemsContext = createContext(initialState);

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_FETCHING: {
      return {
        ...state,
        isFetching: true,
        hasError: false,
        error: null,
      };
    }
    case actionTypes.PRODUCTS_SUCCESS: {
      const newIds = [...state.productIds];
      const newObjs = { ...state.products };

      action.payload.forEach((e) => {
        newIds.push(e.id);
        newObjs[e.id] = e;
      });

      return {
        ...state,
        products: newObjs,
        productIds: newIds,
        isFetching: false,
      };
    }
    case actionTypes.PRODUCTS_ERROR: {
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: action.payload,
      };
    }
    case actionTypes.ADD_TO_CART: {
      const { products, cartItems, cartItemIds } = state;
      const cartItemId = action.payload;

      const prevCartItem = cartItemIds.find((itemId) => itemId === cartItemId);

      // @joan => hi ha dos returns
      if (prevCartItem) {
        return {
          ...state,
          cartItems: {
            ...cartItems,
            [cartItemId]: {
              ...cartItems[cartItemId],
              quantity:
                cartItems[cartItemId].quantity <
                cartItems[cartItemId].unitsInStock
                  ? cartItems[cartItemId].quantity + 1
                  : cartItems[cartItemId].quantity,
            },
          },
          isFetching: false,
        };
      }

      return {
        ...state,
        cartItemIds: [...cartItemIds, cartItemId],
        cartItems: {
          ...cartItems,
          [cartItemId]: {
            ...products[cartItemId],
            quantity: 1,
          },
        },
        isFetching: false,
      };
    }
    case actionTypes.CHANGE_QUANTITY: {
      const { cartItems } = state;
      const { event, productId } = action.payload;

      return {
        ...state,
        cartItems: {
          ...cartItems,
          [productId]: {
            ...cartItems[productId],
            quantity:
              cartItems[productId].id === productId &&
              cartItems[productId].quantity <= cartItems[productId].unitsInStock
                ? Number(event.target.value)
                : cartItems[productId].quantity,
          },
        },
        isFetching: false,
      };
    }
    case actionTypes.REMOVE_ITEM: {
      const { cartItems, cartItemIds } = state;
      const cartItemId = action.payload;

      const updatedCartItemIds = cartItemIds.filter(
        (itemId) => itemId !== cartItemId,
      );

      delete cartItems[cartItemId];

      return {
        ...state,
        cartItemIds: updatedCartItemIds,
        cartItems: cartItems,
        isFetching: false,
      };
    }
    default: {
      return state;
    }
  }
};

function CartItemsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { productIds } = state;

  useEffect(() => {
    if (productIds.length === 0) {
      const request = async () => {
        dispatch({ type: actionTypes.PRODUCTS_FETCHING });
        const { data, hasError, loadingError } = await api.getProducts();

        if (hasError)
          dispatch({ type: actionTypes.PRODUCTS_ERROR, payload: loadingError });
        else dispatch({ type: actionTypes.PRODUCTS_SUCCESS, payload: data });
      };

      request();
    }
  }, [dispatch]);

  const value = {
    ...state,
    handleAddToCart: (productId) =>
      dispatch({ type: actionTypes.ADD_TO_CART, payload: productId }),
    handleChangeQuantity: (event, productId) =>
      dispatch({
        type: actionTypes.CHANGE_QUANTITY,
        payload: { event, productId },
      }),
    handleRemoveItem: (productId) =>
      dispatch({ type: actionTypes.REMOVE_ITEM, payload: productId }),
  };

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
}

function useCartItems() {
  const context = useContext(CartItemsContext);
  if (!context) return null;
  return context;
}

export { CartItemsProvider, useCartItems };
