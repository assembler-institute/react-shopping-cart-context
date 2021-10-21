import React, { createContext, useContext, useReducer, useEffect } from "react";

import { actionTypes } from "./types";

import * as api from "api";

export const initialState = {
  products: {},
  productIds: [],
  isLoading: false,
  hasError: false,
  loadingError: null,
  handleAddToCart: () => {},
  handleChangeQuantity: () => {},
  handleRemoveItem: () => {},
  handleDownVote: () => {},
  handleUpVote: () => {},
  handleSetFavorite: () => {},
  saveNewProduct: () => {},
};

const ProductsContext = createContext(initialState);

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_FETCHING: {
      return {
        ...state,
        isFetching: true,
        hasError: false,
        error: null,
      };
    }
    case actionTypes.PRODUCTS_SUCCESS: {
      const newIds = [...state.productIds];
      const newObjs = { ...state.products };

      action.payload.forEach((e) => {
        newIds.push(e.id);
        newObjs[e.id] = e;
      });

      return {
        ...state,
        products: newObjs,
        productIds: newIds,
        isFetching: false,
      };
    }
    case actionTypes.PRODUCTS_ERROR: {
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: action.payload,
      };
    }
    case actionTypes.DOWN_VOTE: {
      const { products } = state;
      const productId = action.payload;

      return {
        ...state,
        products: {
          ...products,
          [productId]: {
            ...products[productId],
            votes: {
              ...products[productId].votes,
              downVotes: {
                ...products[productId].votes.downVotes,
                currentValue:
                  products[productId].votes.downVotes.currentValue <
                  products[productId].votes.downVotes.lowerLimit
                    ? products[productId].votes.downVotes.currentValue + 1
                    : products[productId].votes.downVotes.currentValue,
              },
            },
          },
        },
        isFetching: false,
      };
    }
    case actionTypes.UP_VOTE: {
      const { products } = state;
      const productId = action.payload;

      return {
        ...state,
        products: {
          ...products,
          [productId]: {
            ...products[productId],
            votes: {
              ...products[productId].votes,
              upVotes: {
                ...products[productId].votes.upVotes,
                currentValue:
                  products[productId].votes.upVotes.currentValue <
                  products[productId].votes.upVotes.upperLimit
                    ? products[productId].votes.upVotes.currentValue + 1
                    : products[productId].votes.upVotes.currentValue,
              },
            },
          },
        },
        isFetching: false,
      };
    }
    case actionTypes.SET_FAVORITE: {
      const { products } = state;
      const productId = action.payload;

      return {
        ...state,
        products: {
          ...products,
          [productId]: {
            ...products[productId],
            isFavorite: !products[productId].isFavorite,
          },
        },
        isFetching: false,
      };
    }
    case actionTypes.SAVE_NEW_PRODUCT: {
      const { products, productIds } = state;

      const product = action.payload;
      productIds.push(product.id);

      return {
        ...state,
        productIds: productIds,
        products: {
          ...products,
          [product.id]: product,
        },
        isFetching: false,
      };
    }
    default: {
      return state;
    }
  }
};

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { productIds } = state;

  useEffect(() => {
    if (productIds.length === 0) {
      const request = async () => {
        dispatch({ type: actionTypes.PRODUCTS_FETCHING });
        const { data, hasError, loadingError } = await api.getProducts();

        if (hasError)
          dispatch({ type: actionTypes.PRODUCTS_ERROR, payload: loadingError });
        else dispatch({ type: actionTypes.PRODUCTS_SUCCESS, payload: data });
      };

      request();
    }
  }, [dispatch]);

  const value = {
    ...state,
    handleDownVote: (productId) => dispatch({ type: actionTypes.DOWN_VOTE, payload: productId }),
    handleUpVote: (productId) => dispatch({ type: actionTypes.UP_VOTE, payload: productId }),
    handleSetFavorite: (productId) => dispatch({ type: actionTypes.SET_FAVORITE, payload: productId }),
    saveNewProduct: (newProduct) => dispatch({ type: actionTypes.SAVE_NEW_PRODUCT, payload: newProduct })
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) return null;
  return context;
}

export { ProductsProvider, useProducts };
