import { useReducer } from "react";
import {
  getLocalStorageItems,
  setLocalStorageItems,
} from "../../utils/loadLocalStorageItems";
import {
  handleChange,
  handleRemove,
  handleSetFavorite,
  handleUpVote,
  handleAddToCart,
  handleDownVote,
} from "../Ecommerce/EcommerceHandlers";
import { handleLoadingState, handleDataFetch } from "./AppHandlers";

const initialState = {
  products: [],
  cartItems: [],
  isLoading: false,
  hasError: false,
  stateKey: [
    { state: [], key: "" },
    { state: [], key: "" },
  ],
};

const actionTypes = {
  FETCH_API: handleDataFetch,
  SET_LOADING: handleLoadingState,
  LOAD_LOCAL_STORAGE: getLocalStorageItems,
  SET_LOCAL_STORAGE: setLocalStorageItems,
  HANDLER_DOWN_VOTE: handleDownVote,
  HANDLER_UP_VOTE: handleUpVote,
  HANDLER_ADD_TO_CART: handleAddToCart,
  HANDLER_REMOVE: handleRemove,
  HANDLER_CHANGE: handleChange,
  HANDLER_SET_FAVORITE: handleSetFavorite,
};

const reduce = (prevState, action) => {
  if (prevState != null) {
    /* const mismatch = checkMismatchElements(
      Object.keys(initialState),
      Object.keys(prevState),
    );

    if (mismatch) {
      // eslint-disable-next-line
      console.log({
        message: "There is a mismatch, see the array",
        array: mismatch,
      });
    } */
  }

  return action.type({ prevState: prevState, payload: action.payload });
};

function useReducerApp() {
  const [stateApp, dispatchApp] = useReducer(reduce, initialState);
  return { stateApp: stateApp, dispatchApp: dispatchApp };
}

export { actionTypes, useReducerApp };
