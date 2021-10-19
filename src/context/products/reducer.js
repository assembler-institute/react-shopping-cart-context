import React, { createContext, useContext, useReducer, useEffect } from 'react';

import useLocalStorage from "../../hooks/useLocalStorage";
// import loadLocalStorageItems from "./utils/loadLocalStorageItems";

import { actionTypes } from "./types";

import * as api from "../../api";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

export const initialState = {
  products: {},
  productIds: [],
  cartItems: {},
  cartItemIds: [],
  isLoading: false,
  hasError: false,
  loadingError: null,
  handleAddToCart: () => { },
  handleChange: () => { },
  handleRemove: () => { },
  handleDownVote: () => { },
  handleUpVote: () => { },
  handleSetFavorite: () => { },
  saveNewProduct: () => { },
};

const ProductsContext = createContext(initialState);

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_FETCHING:
    case actionTypes.PRODUCTS_FETCHING: {
      return {
        ...state,
        isFetching: true,
        hasError: false,
        error: null
      };
    }
    case actionTypes.ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        isFetching: false
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
        isFetching: false
      };
    }
    case actionTypes.ADD_PRODUCT_ERROR:
    case actionTypes.PRODUCTS_ERROR: {
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: action.payload
      };
    }
    case actionTypes.ADD_TO_CART: {
      const { products, cartItems, cartItemIds } = state
      const cartItemId = action.payload;

      const prevCartItem = cartItemIds.find((itemId) => itemId === cartItemId);

      // @joan => hi ha dos returns
      if (prevCartItem) {
        return {
          ...state,
          cartItems: {
            ...cartItems,
            [cartItemId]: {
              ...cartItems[cartItemId],
              quantity: (cartItems[cartItemId].quantity < cartItems[cartItemId].unitsInStock)
                ? cartItems[cartItemId].quantity + 1
                : cartItems[cartItemId].quantity
            }
          },
          isFetching: false
        };
      }

      return {
        ...state,
        cartItemIds: [
          ...cartItemIds,
          cartItemId
        ],
        cartItems: {
          ...cartItems,
          [cartItemId]: {
            ...products[cartItemId],
            quantity: 1
          }
        },
        isFetching: false
      };

    }
    case actionTypes.CHANGE: {
      // const updatedCartItems = cartItems.map((item) => {
      //     if (item.id === productId && item.quantity <= item.unitsInStock) {
      //       return {
      //         ...item,
      //         quantity: Number(event.target.value),
      //       };
      //     }

      //     return item;
      //   });

      //   setCartItems(updatedCartItems);


      return {
        ...state,
        products: action.payload,
        isFetching: false
      };
    }
    case actionTypes.REMOVE: {
      const { cartItems, cartItemIds } = state
      const cartItemId = action.payload;

      console.log(cartItemId);

      const updatedCartItemIds = cartItemIds.find((itemId) => itemId !== cartItemId);
      const updatedCartItems = cartItemIds.map((itemId) => {
        if (itemId !== cartItemId) {
          const product = cartItems[cartItemId]
          console.log(product)
          return product
        }
      });

      console.log(updatedCartItems)

      console.log(updatedCartItemIds)

      // action.payload.forEach((cartItemId) => {
      //   updatedCartItemIds.filter(cartItemId);
      //   updatedCartItems[e.id] = e;
      // });

      //   const updatedCartItems = cartItems.filter((item) => item.id !== productId);

      //   setCartItems(updatedCartItems);

      return {
        ...state,
        cartItemIds: updatedCartItemIds,
        cartItems: cartItems,
        isFetching: false
      };
    }
    case actionTypes.DOWN_VOTE: {
      const { products } = state
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
                currentValue: (products[productId].votes.downVotes.currentValue < products[productId].votes.downVotes.lowerLimit)
                  ? products[productId].votes.downVotes.currentValue + 1
                  : products[productId].votes.downVotes.currentValue
              }
            }
          },
        },
        isFetching: false,
      };
    }
    case actionTypes.UP_VOTE: {
      const { products } = state
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
                currentValue: (products[productId].votes.upVotes.currentValue < products[productId].votes.upVotes.upperLimit)
                  ? products[productId].votes.upVotes.currentValue + 1
                  : products[productId].votes.upVotes.currentValue
              }
            }
          },
        },
        isFetching: false,
      };
    }
    case actionTypes.SET_FAVORITE: {
      const { products } = state
      const productId = action.payload;

      return {
        ...state,
        products: {
          ...products,
          [productId]: {
            ...products[productId],
            isFavorite: !products[productId].isFavorite
          },
        },
        isFetching: false,
      }
    }
    case actionTypes.SAVE_NEW_PRODUCT: {
      return {
        ...state,
        products: action.payload,
        isFetching: false
      };
    }
    default: {
      return state;
    }
  }
}

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, productIds, cartItems, isLoading, hasError, loadingError } = state;

  useEffect(() => {
    if (productIds.length === 0) {
      const request = async () => {
        dispatch({ type: actionTypes.PRODUCTS_FETCHING });
        const { data, hasError, loadingError } = await api.getProducts();

        if (hasError) dispatch({ type: actionTypes.PRODUCTS_ERROR, payload: loadingError });
        else dispatch({ type: actionTypes.PRODUCTS_SUCCESS, payload: data });
      };

      request();
    }
  }, [dispatch]);

  useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
  useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

  // function handleAddToCart(productId) {
  //   const prevCartItem = cartItems.find((item) => item.id === productId);
  //   const foundProduct = products.find((product) => product.id === productId);

  //   if (prevCartItem) {
  //     const updatedCartItems = cartItems.map((item) => {
  //       if (item.id !== productId) {
  //         return item;
  //       }

  //       if (item.quantity >= item.unitsInStock) {
  //         return item;
  //       }

  //       return {
  //         ...item,
  //         quantity: item.quantity + 1,
  //       };
  //     });

  //     setCartItems(updatedCartItems);
  //     return;
  //   }

  //   const updatedProduct = buildNewCartItem(foundProduct);
  //   setCartItems((prevState) => [...prevState, updatedProduct]);
  // }

  // function handleChange(event, productId) {
  //   const updatedCartItems = cartItems.map((item) => {
  //     if (item.id === productId && item.quantity <= item.unitsInStock) {
  //       return {
  //         ...item,
  //         quantity: Number(event.target.value),
  //       };
  //     }

  //     return item;
  //   });

  //   setCartItems(updatedCartItems);
  // }

  // function handleRemove(productId) {
  //   const updatedCartItems = cartItems.filter((item) => item.id !== productId);

  //   setCartItems(updatedCartItems);
  // }

  // function handleDownVote(productId) {
  //   const updatedProducts = products.map((product) => {
  //     if (
  //       product.id === productId &&
  //       product.votes.downVotes.currentValue <
  //       product.votes.downVotes.lowerLimit
  //     ) {
  //       return {
  //         ...product,
  //         votes: {
  //           ...product.votes,
  //           downVotes: {
  //             ...product.votes.downVotes,
  //             currentValue: product.votes.downVotes.currentValue + 1,
  //           },
  //         },
  //       };
  //     }

  //     return product;
  //   });

  //   setProducts(updatedProducts);
  // }

  // function handleUpVote(productId) {
  //   const updatedProducts = products.map((product) => {
  //     if (
  //       product.id === productId &&
  //       product.votes.upVotes.currentValue < product.votes.upVotes.upperLimit
  //     ) {
  //       return {
  //         ...product,
  //         votes: {
  //           ...product.votes,
  //           upVotes: {
  //             ...product.votes.upVotes,
  //             currentValue: product.votes.upVotes.currentValue + 1,
  //           },
  //         },
  //       };
  //     }

  //     return product;
  //   });

  //   setProducts(updatedProducts);
  // }

  // function handleSetFavorite(productId) {
  //   const updatedProducts = products.map((product) => {
  //     if (product.id === productId) {
  //       return {
  //         ...product,
  //         isFavorite: !product.isFavorite,
  //       };
  //     }

  //     return product;
  //   });

  //   setProducts(updatedProducts);
  // }

  // function saveNewProduct(newProduct) {
  //   const request = async () => {
  //     dispatch({ type: actionTypes.ADD_PRODUCT_FETCHING });
  //     const { data, hasError, error } = await api.postProduct(newProduct);

  //     if (hasError) dispatch({ type: actionTypes.ADD_PRODUCT_ERROR, payload: error });
  //     else dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, payload: data });
  //   };

  //   request();
  // }

  const value = {
    ...state,
    handleAddToCart: (productId) => dispatch({ type: actionTypes.ADD_TO_CART, payload: productId }),
    handleChange: (productId) => dispatch({ type: actionTypes.CHANGE, payload: productId }),
    handleRemove: (productId) => dispatch({ type: actionTypes.REMOVE, payload: productId }),
    handleDownVote: (productId) => dispatch({ type: actionTypes.DOWN_VOTE, payload: productId }),
    handleUpVote: (productId) => dispatch({ type: actionTypes.UP_VOTE, payload: productId }),
    handleSetFavorite: (productId) => dispatch({ type: actionTypes.SET_FAVORITE, payload: productId }),
    saveNewProduct: (newProduct) => dispatch({ type: actionTypes.SAVE_NEW_PRODUCT, payload: newProduct })
  };

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) return null;
  return context;
}

export { ProductsProvider, useProducts };
