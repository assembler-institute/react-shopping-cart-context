import React, { createContext, useContext } from "react";
import { useReducerApp, actionTypes } from "./AppReducer";

const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const { stateApp, dispatchApp } = useReducerApp();

  const value = {
    products: stateApp.products,
    cartItems: stateApp.cartItems,
    stateKey: [
      { state: stateApp.products, key: "products" },
      { state: stateApp.cartItems, key: "cartItems" },
    ],
    hasError: stateApp.hasError,
    isLoading: stateApp.isLoading,

    handleDataFetch: () => dispatchApp({ type: actionTypes.FETCH_API }),
    handleLoadingState: (valueBoolean) =>
      dispatchApp({ type: actionTypes.SET_LOADING, payload: valueBoolean }),
    getLocalStorageItems: (storageKey) =>
      dispatchApp({
        type: actionTypes.LOAD_LOCAL_STORAGE,
        payload: storageKey,
      }),
    setLocalStorageItems: (storageKey, data) =>
      dispatchApp({
        type: actionTypes.SET_LOCAL_STORAGE,
        payload: { storageKey, data },
      }),

    handleDownVote: (id) =>
      dispatchApp({ type: actionTypes.HANDLER_DOWN_VOTE, payload: id }),
    handleUpVote: (id) =>
      dispatchApp({ type: actionTypes.HANDLER_UP_VOTE, payload: id }),
    handleSetFavorite: (id) =>
      dispatchApp({ type: actionTypes.HANDLER_SET_FAVORITE, payload: id }),
    handleAddToCart: (id) =>
      dispatchApp({ type: actionTypes.HANDLER_ADD_TO_CART, payload: id }),
    handleRemove: (id) =>
      dispatchApp({ type: actionTypes.HANDLER_REMOVE, payload: id }),
    handleChange: (id, event) =>
      dispatchApp({ type: actionTypes.HANDLER_CHANGE, payload: { id, event } }),
  };
  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) return null;
  return ctx;
}
