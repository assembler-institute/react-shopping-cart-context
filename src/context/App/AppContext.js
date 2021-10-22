import { createContext } from "react";
import { dispatchApp, stateApp } from "../App/AppReducer";
import { actionTypes } from "../App/AppHandlers";

const AppContext = createContext();

//*TODO revisar los dispatchApp

export default function AppContextProvider({children}) {

  const value = {
    products: stateApp.products,
    cartItems: stateApp.cartItems,
    hasError: stateApp.hasError,
    isLoading: stateApp.isLoading,
    handleDataFetch:() => dispatchApp({type: actionTypes.FETCH_API}),
    handleLoadingState:(value) => dispatchApp({type: actionTypes.SET_LOADING, payload:value}),
    getLocalStorageItems:(storageKey) => dispatchApp({type:actionTypes.LOAD_LOCAL_STORAGE, payload: storageKey}),
    setLocalStorageItems:(storageKey, data) => dispatchApp({type: actionTypes.SET_LOCAL_STORAGE, payload: {storageKey, data}})
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const ctx = useContext(AppContext)
  if (!ctx) return null
  return ctx
}
// Y context toma las variables del reducer y hacer return -> eCommerceContext