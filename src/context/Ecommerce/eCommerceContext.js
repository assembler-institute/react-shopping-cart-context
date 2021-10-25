import React, { createContext, useContext } from "react";
import { useReducerECommerce, actionTypes } from "./EcommerceReducer";
import { useReducerApp } from "../App/AppReducer";

const eCommerceContext = createContext();

export default function EcommerceContextProvider({ children }) {
  const { state, dispatch } = useReducerECommerce();
  const { stateApp } = useReducerApp();

  const value = {
    products: stateApp.products,
    cartItems: stateApp.cartItems,
    hasError: state.hasError,
    isLoading: state.isLoading,
    handleDownVote: (id) =>
      dispatch({ type: actionTypes.HANDLER_DOWN_VOTE, payload: id }),
    handleUpVote: (id) =>
      dispatch({ type: actionTypes.HANDLER_UP_VOTE, payload: id }),
    handleSetFavorite: (id) =>
      dispatch({ type: actionTypes.HANDLER_SET_FAVORITE, payload: id }),
    handleAddToCart: (id) =>
      dispatch({ type: actionTypes.HANDLER_ADD_TO_CART, payload: id }),
    handleRemove: (id) =>
      dispatch({ type: actionTypes.HANDLER_REMOVE, payload: id }),
    handleChange: (id, event) =>
      dispatch({ type: actionTypes.HANDLER_CHANGE, payload: { id, event } }),
  };

  return (
    <eCommerceContext.Provider value={value}>
      {children}
    </eCommerceContext.Provider>
  );
}

export function useEcommerce() {
  const ctx = useContext(eCommerceContext);
  if (!ctx) return null;
  return ctx;
}
// Y context toma las variables del reducer y hacer return -> eCommerceContext
