import { useReducer } from "react"
import {getLocalStorageItems, setLocalStorageItems} from "../utils/loadLocalStorageItems";
import {
  handleLoadingState,
  handleSetFavorite,
  handleUpVote,
  handleDownVote,
  handleAddToCart,
  handleRemove,
  handleChange,
  handleDataFetch
} from "../store/EcommerceHandlers";


const initialState = {
  products: [],
  cartItems: [],
  isLoading: false,
  hasError: false
}

const actionTypes = {
  HANDLER_DOWN_VOTE: handleDownVote,
  HANDLER_UP_VOTE: handleUpVote,
  HANDLER_SET_FAVORITE: handleSetFavorite,
  HANDLER_ADD_TO_CART: handleAddToCart,
  HANDLER_REMOVE: handleRemove,
  HANDLER_CHANGE: handleChange,
  LOAD_LOCAL_STORAGE: getLocalStorageItems,
  SET_LOCAL_STORAGE: setLocalStorageItems,
  FETCH_API: handleDataFetch,
  SET_LOADING: handleLoadingState
}

const reduce = (prevState, action) => {

  const handler = Object.keys(actionTypes).find(action.type)
  if (!handler) return prevState;
  // This handler execute the logic and returns the new state
  handler({prevState:prevState, payload: action.payload})
}


const reducer = useReducer(reduce, initialState)
export default reducer

const{state, dispatch} = reducer;

export {dispatch, state, actionTypes}

/// Aquí va el reducer donde initialState son las variables de state
/// Y donde los type actions son los handlers de state