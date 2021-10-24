import React, { createContext, useContext } from "react";
import { useReducerApp, actionTypes } from "./AppReducer";

const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const { stateApp, dispatchApp } = useReducerApp();

  // eslint-disable-next-line
  console.log(stateApp, dispatchApp);
  const value = {
    products: stateApp.products,
    cartItems: stateApp.cartItems,
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
// Y context toma las variables del reducer y hacer return -> eCommerceContext
