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

const checkMismatchElements=(correctArray, randomArray)=>{
  let misMatchElements;

  if (correctArray.length>=randomArray.length){
    misMatchElements = correctArray.filter(item => !randomArray.find(item2 => item === item2) );
  // console.log({message:"elements missing in randomArray", array:misMatchElements})
  }
  else{
    misMatchElements = randomArray.filter(item => !correctArray.find(item2 => item === item2) );
  // console.log({message:"extra elements in randomArray", array:misMatchElements})
  }
  return misMatchElements.length>0 ? misMatchElements : null;
}


const reduce = (prevState, action) => {

  const mismatch=checkMismatchElements(Object.keys(initialState),Object.keys(prevState));

  if (mismatch){
    console.error({message:"There is a mismatch, see the array", array:mismatch})
    return
  }

  const handler = Object.keys(actionTypes).find(action.type)
  if (!handler) return prevState;
  // This handler execute the logic and returns the new state

  handler({prevState: prevState, payload: action.payload})
}

const reducer = useReducer(reduce, initialState)
export default reducer

const[state, dispatch] = reducer;

export {dispatch, state, actionTypes}

/// Aquí va el reducer donde initialState son las variables de state
/// Y donde los type actions son los handlers de state