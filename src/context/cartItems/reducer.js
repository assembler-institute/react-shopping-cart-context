import React, { createContext } from 'react';

import { actionTypes } from "./types";

export const initialState = {
  products: [],
  cartItems: [],
  isLoading: false,
  hasError: false,
  loadingError: null,
  handleDownVote: () => { },
  handleUpVote: () => { },
  handleSetFavorite: () => { },
  handleAddToCart: () => { },
  handleRemove: () => { },
  handleChange: () => { },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART_FETCHING:
    case actionTypes.REMOVE_TO_CART_FETCHING: {
      return {
        ...state,
        isFetching: true,
        hasError: false,
        error: null
      };
    }
    case actionTypes.ADD_TO_CART_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        isFetching: false
      };
    }
    case actionTypes.REMOVE_TO_CART_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        isFetching: false
      };
    }
    case actionTypes.ADD_TO_CART_ERROR:
    case actionTypes.REMOVE_TO_CART_ERROR: {
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const cartItemsContext = createContext(initialState);
