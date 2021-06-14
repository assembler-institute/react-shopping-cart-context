import React, { useReducer } from "react";
import CartContext from "../../context/cartContext/cartContext";
import {
  cartReducer,
  getCartTotal,
  ADD_CART_ITEM,
  UPDATED_CART_ITEMS,
  REMOVE_CART_ITEM,
} from "../../reducers/cartReducer";

import loadLocalStorageItems from "../../utils/loadLocalStorageItems";
import useLocalStorage from "../../hooks/useLocalStorage";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

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

const initialState = {
  products: loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []),
  cartItems: loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []),
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { products, cartItems } = state;

  useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
  useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

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
      dispatch({
        type: ADD_CART_ITEM,
        payload: [...updatedCartItems],
      });
      return;
    }

    const updatedProduct = buildNewCartItem(foundProduct);
    dispatch({
      type: UPDATED_CART_ITEMS,
      payload: [...cartItems, updatedProduct],
    });
  }

  function handleChange(productId, event) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity <= item.unitsInStock) {
        return {
          ...item,
          quantity: Number(event.target.value),
        };
      }

      return item;
    });

    dispatch({
      type: UPDATED_CART_ITEMS,
      payload: [...updatedCartItems],
    });
  }

  function handleRemove(productId) {
    dispatch({ type: REMOVE_CART_ITEM, payload: productId });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        getCartTotal: getCartTotal(cartItems),
        handleAddToCart: handleAddToCart,
        handleChange: handleChange,
        handleRemove: handleRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
