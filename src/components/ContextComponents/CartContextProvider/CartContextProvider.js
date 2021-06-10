/* eslint-disable import/extensions */
import React, { useReducer } from "react";

import CartContext from "../../../context/cart-context";

import loadLocalStorageItems from "../../../utils/loadLocalStorageItems";
import useLocalStorage from "../../../hooks/useLocalStorage";
import getCartTotal from "../../../utils/getCartTotal";

// Local storage key
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";
const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";

// Dispatch case
const UPDATED_CART = "UPDATED_CART";

const initialState = {
  products: loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []),
  cartItems: loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []),
};

function buildNewCartItem(cartItem) {
  if (cartItem.quantity >= cartItem.unitsInStock) {
    return cartItem;
  }

  return {
    id: cartItem.id,
    title: cartItem.title,
    img: cartItem.img,
    price: cartItem.price,
    unitsInStock: cartItem.unitsInStock,
    createdAt: cartItem.createdAt,
    updatedAt: cartItem.updatedAt,
    quantity: cartItem.quantity + 1,
  };
}

function reducerCart(state, action) {
  switch (action.type) {
    case UPDATED_CART: {
      return {
        ...state,
        cartItems: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerCart, initialState);
  const { products, cartItems } = state;

  useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
  useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

  // Methods
  function handleAddToCart(productId) {
    const prevCartItem = cartItems.find((item) => item.id === productId);
    const foundProduct = products.find((product) => product.id === productId);

    if (prevCartItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id !== productId) {
          return item;
        }

        if (item.quantity >= item.unitsInStock) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });

      dispatch({ type: UPDATED_CART, payload: [...updatedCartItems] });
      return;
    }

    const updatedProduct = buildNewCartItem(foundProduct);
    dispatch({
      type: UPDATED_CART,
      payload: [...cartItems, updatedProduct],
    });
  }

  function handleChange(event, productId) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity <= item.unitsInStock) {
        return {
          ...item,
          quantity: Number(event.target.value),
        };
      }

      return item;
    });

    dispatch({ type: UPDATED_CART, payload: [...updatedCartItems] });
  }

  function handleRemove(productId) {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);

    dispatch({ type: UPDATED_CART, payload: [...updatedCartItems] });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        total: getCartTotal(cartItems),
        add: handleAddToCart,
        remove: handleRemove,
        change: handleChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
