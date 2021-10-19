import { object } from "prop-types";
import { useReducer } from "react"
import { handleSetFavorite, handleUpVote, handleDownVote, handleAddToCart, handleRemove, handleChange } from "./EcommerceHandlers";


const initialState = {
  products: [{}],
  cartItems: [{}],
  updateProducts: () => {},
}

const actionTypes = {
  HANDLER_DOWN_VOTE: handleDownVote,
  HANDLER_UP_VOTE: handleUpVote,
  HANDLER_SET_FAVORITE: handleSetFavorite,
  HANDLER_ADD_TO_CART: handleAddToCart,
  HANDLER_REMOVE: handleRemove,
  HANDLER_CHANGE: handleChange
}

const reduce = (prevState, action) => {
  const handler = Object.keys(actionTypes).find(action.type)
  if (!handler) return prevState;
  // This handler execute the logic and returns the new state
  handler(prevState, action.payload)
}


const reducer = useReducer(reduce, initialState)
const dispatch = reducer()[1]
const state = reducer()[0] 

export {dispatch, state, actionTypes}
export default reducer
/// Aquí va el reducer donde initialState son las variables de state
/// Y donde los type actions son los handlers de state