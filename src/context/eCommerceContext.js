import { createContext } from "react";
import { dispatch, state } from "../store/EcommerceReducer";
import { actionTypes } from "../store/EcommerceReducer";

const eCommerceContext = createContext();

export default function EcommerceContextProvider({children}) {

  const value = {
    handleDownVote: (id) => dispatch({type: actionTypes.HANDLER_DOWN_VOTE, payload: id}),
    handleUpVote: (id) => dispatch({type: actionTypes.HANDLER_UP_VOTE, payload: id}),
    handleSetFavorite: (id) => dispatch({type: actionTypes.HANDLER_SET_FAVORITE, payload: id}),
    handleAddToCart: (id) => dispatch({type: actionTypes.HANDLER_ADD_TO_CART, payload: id}),
    handleRemove: (id) => dispatch({type: actionTypes.HANDLER_REMOVE, payload: id}),
    handleChange: (id) => dispatch({type: actionTypes.HANDLER_CHANGE, payload: id})
  }

  return (
    <eCommerceContext.Provider value={value}>
      {children}
    </eCommerceContext.Provider>
  )
}

export function useEcommerce() {
  const ctx = useContext(eCommerceContext)
  if (!ctx) return null
  return ctx
}
// Y context toma las variables del reducer y hacer return -> eCommerceContext 