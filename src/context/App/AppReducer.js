import { useReducer } from "react";
import {
  getLocalStorageItems,
  setLocalStorageItems,
} from "../../utils/loadLocalStorageItems";
import { handleLoadingState, handleDataFetch } from "./AppHandlers";

const initialState = {
  products: [],
  cartItems: [],
  isLoading: false,
  hasError: false,
};

const actionTypes = {
  FETCH_API: handleDataFetch,
  SET_LOADING: handleLoadingState,
  LOAD_LOCAL_STORAGE: getLocalStorageItems,
  SET_LOCAL_STORAGE: setLocalStorageItems,
};

const reduce = (prevState, action) => {
  const handler = () => Object.keys(actionTypes).find(action.type);

  if (prevState != null) {
    /* const mismatch = checkMismatchElements(
      Object.keys(initialState),
      Object.keys(prevState),
    );

    if (mismatch) {
      // eslint-disable-next-line
      console.error({
        message: "There is a mismatch, see the array",
        array: mismatch,
      });
      return prevState;
    } */

    if (!handler) {
      return prevState;
    }
    // This handler execute the logic and returns the new state
  }
  return handler({ prevState: prevState, payload: action.payload });
};

function useReducerApp() {
  const [stateApp, dispatchApp] = useReducer(reduce, initialState);
  // eslint-disable-next-line
  console.log(stateApp);
  return { stateApp: stateApp, dispatchApp: dispatchApp };
}

export { actionTypes, useReducerApp };

/// Aquí va el reducer donde initialState son las variables de state
/// Y donde los type actions son los handlers de state
