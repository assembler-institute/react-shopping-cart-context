import React, { useReducer, useContext, createContext } from "react";
import { act } from "react-dom/test-utils";
import NewProduct from "../../pages/NewProduct";
import loadLocalStorageItems from "../../utils/loadLocalStorageItems";
import { actionTypes } from "./types";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

const initValues = {
  cartItems: loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []),
  products: loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []),
  isLoading: false,
  hasError: false,
  loadingError: false,
};

const ProductsContext = createContext(initValues);

function buildNewCartItem(cartItem) {
  if (cartItem.quantity >= cartItem.unitsInStock) {
    return cartItem;
  }

  return {
    id: cartItem.id,
    title: cartItem.title,
    img: cartItem.img,
    price: cartItem.price,
    unitsInStock: cartItem.unitsInStock,
    createdAt: cartItem.createdAt,
    updatedAt: cartItem.updatedAt,
    quantity: cartItem.quantity + 1,
  };
}

function reducer(state, action) {
  const { products, cartItems } = state;

  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS: {
      const data = action.payload;
      return { ...state, products: data };
    }
    case actionTypes.IS_LOADING: {
      const value = action.payload;
      return { ...state, isLoading: value };
    }
    case actionTypes.HAS_ERROR: {
      const value = action.payload;
      return { ...state, hasError: value };
    }
    case actionTypes.DOWN_VOTE: {
      const productId = action.payload;

      const updatedProducts = products.map((product) => {
        if (
          product.id === productId &&
          product.votes.downVotes.currentValue <
            product.votes.downVotes.lowerLimit
        ) {
          product.votes.downVotes.currentValue++;
        }
        return product;
      });

      return { ...state, products: updatedProducts };
    }
    case actionTypes.UP_VOTE: {
      const productId = action.payload;

      const updatedProducts = products.map((product) => {
        if (
          product.id === productId &&
          product.votes.upVotes.currentValue < product.votes.upVotes.upperLimit
        ) {
          //product.votes.upVotes.currentValue++;

          return {
            ...product,
            votes: {
              ...product.votes,
              upVotes: {
                ...product.votes.upVotes,
                currentValue: product.votes.upVotes.currentValue + 1,
              },
            },
          };
        }
        return product;
      });

      return { ...state, products: updatedProducts };
    }
    case actionTypes.SET_FAVORITE: {
      const productId = action.payload;

      const updatedProducts = products.map((product) => {
        if (product.id === productId) {
          product.isFavorite = !product.isFavorite;
        }
        return product;
        /* if (product.id === productId) {
          console.log(product.isFavorite);
          return {
            ...product,
            isFavorite: !product.isFavorite,
          };
        }

        return product; */
      });

      return { ...state, products: updatedProducts };
    }
    case actionTypes.ADD_TO_CART: {
      const productId = action.payload;

      const prevCartItem = cartItems.find((item) => item.id === productId);
      const foundProduct = products.find((product) => product.id === productId);

      if (prevCartItem) {
        const updatedCartItems = cartItems.map((item) => {
          if (item.id !== productId) {
            return item;
          }

          if (item.quantity >= item.unitsInStock) {
            return item;
          }

          return {
            ...item,
            quantity: item.quantity + 1,
          };
        });

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }

      const updatedProduct = buildNewCartItem(foundProduct);

      return {
        ...state,
        cartItems: [...cartItems, updatedProduct],
      };
      //setCartItems((prevState) => [...prevState, updatedProduct]);
    }
    case actionTypes.REMOVE: {
      const productId = action.payload;
      console.log("product " + productId);
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== productId,
      );

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case actionTypes.CHANGE: {
      const { event, productId } = action.payload;
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === productId && item.quantity <= item.unitsInStock) {
          //item.quantity = Number(event.target.value);
          return {
            ...item,
            quantity: Number(event.target.value),
          };
        }

        return item;
      });

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case actionTypes.SET_PRODUCTS: {
      //setProducts((prevState) => [newProduct, ...prevState]);
      const newProduct = action.payload;
      console.log(newProduct);
      return {
        ...state,
        products: [...products, newProduct],
      };
    }
  }
}

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initValues);

  const value = {
    ...state,
    localStorageProducts: () => dispatch({ type: actionTypes.LOCAL_STORAGE }),
    fetchProducts: (data) =>
      dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: data }),
    setIsLoading: (value) =>
      dispatch({ type: actionTypes.IS_LOADING, payload: value }),
    setHasError: (value) =>
      dispatch({ type: actionTypes.HAS_ERROR, payload: value }),
    setLoadingError: (value) =>
      dispatch({ type: actionTypes.LOADING_ERROR, payload: value }),
    setFavorite: (productId) =>
      dispatch({ type: actionTypes.SET_FAVORITE, payload: productId }),
    setUpVotes: (productId) =>
      dispatch({ type: actionTypes.UP_VOTE, payload: productId }),
    setDownVotes: (productId) =>
      dispatch({ type: actionTypes.DOWN_VOTE, payload: productId }),
    addToCart: (productId) =>
      dispatch({ type: actionTypes.ADD_TO_CART, payload: productId }),
    remove: (productId) =>
      dispatch({ type: actionTypes.REMOVE, payload: productId }),
    change: (event, productId) =>
      dispatch({
        type: actionTypes.CHANGE,
        payload: { event: event, productId: productId },
      }),
    setProducts: (newProduct) =>
      dispatch({ type: actionTypes.SET_PRODUCTS, payload: newProduct }),
    setCartItems: () => dispatch({ type: actionTypes.SET_CART_ITEMS }),
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
