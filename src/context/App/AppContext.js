import { createContext } from "react";
import { dispatch, state } from "../App/AppReducer";
import { actionTypes } from "../App/AppHandlers";

const AppContext = createContext();

//*TODO revisar los dispatch

export default function AppContextProvider({children}) {

  const value = {
    products:state.products,
    cartItems:state.cartItems,
    hasError:state.hasError,
    isLoading:state.isLoading,
    handleDataFetch:()=>dispatch({type: actionTypes.FETCH_API}),
    handleLoadingState:(value)=>dispatch({type: actionTypes.SET_LOADING, payload:value}),
    getLocalStorageItems:(storageKey)=> dispatch({type:actionTypes.LOAD_LOCAL_STORAGE, payload: storageKey}),
    setLocalStorageItems:(storageKey, data)=>dispatch({type: actionTypes.SET_LOCAL_STORAGE, payload: {storageKey, data}})
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