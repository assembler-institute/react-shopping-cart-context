import { useReducer } from "react";
import {
  handleUpVote,
  handleDownVote,
  handleAddToCart,
  handleRemove,
  handleChange,
  handleSetFavorite,
} from "./EcommerceHandlers";

const initialState = {
  products: [],
  cartItems: [],
  isLoading: false,
  hasError: false,
};

const actionTypes = {
  HANDLER_DOWN_VOTE: handleDownVote,
  HANDLER_UP_VOTE: handleUpVote,
  HANDLER_ADD_TO_CART: handleAddToCart,
  HANDLER_REMOVE: handleRemove,
  HANDLER_CHANGE: handleChange,
  HANDLER_SET_FAVORITE: handleSetFavorite,
};

const checkMismatchElements = (correctArray, randomArray) => {
  let misMatchElements;

  if (correctArray.length >= randomArray.length) {
    misMatchElements = correctArray.filter(
      (item) => !randomArray.find((item2) => item === item2),
    );
    // console.log({message:"elements missing in randomArray", array:misMatchElements})
  } else {
    misMatchElements = randomArray.filter(
      (item) => !correctArray.find((item2) => item === item2),
    );
    // console.log({message:"extra elements in randomArray", array:misMatchElements})
  }
  return misMatchElements.length > 0 ? misMatchElements : null;
};

const reduce = (prevState, action) => {
  const mismatch = checkMismatchElements(
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
  }

  const handler = () => Object.keys(actionTypes).find(action.type);
  if (!handler) return prevState;
  // This handler execute the logic and returns the new state

  return handler({
    prevState: prevState,
    payload: action.payload,
  });
};

function useReducerECommerce() {
  const [state, dispatch] = useReducer(reduce, initialState);
  return { state, dispatch };
}

export { actionTypes, useReducerECommerce };

/// Aquí va el reducer donde initialState son las variables de state
/// Y donde los type actions son los handlers de state
