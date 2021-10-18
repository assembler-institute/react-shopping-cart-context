import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import { NewProdContext } from "./context/NewProdContext";
import { HomeContext } from "./context/HomeContext";

import * as api from "./api";

import useLocalStorage from "./hooks/useLocalStorage";
import loadLocalStorageItems from "./utils/loadLocalStorageItems";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

const initialState = {
  loadingError: null,
  hasError: false,
  isLoading: false,
  products: loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []),
  cartItems: loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "PRODUCTS_LOADED": {
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    }
    case "PRODUCTS_ERROR": {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        loadingError: action.payload,
      };
    }
    case "CARTITEMS_LOADED": {
      return {
        ...state,
        cartItems: action.payload,
      };
    }
    default:
      return state;
  }
};

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loadingError, isLoading, hasError, cartItems, products } = state;

  useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
  useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

  useEffect(() => {
    if (products.length === 0) {
      dispatch({ type: "PRODUCTS_LOADING" });

      api
        .getProducts()
        .then((data) => {
          dispatch({ type: "PRODUCTS_LOADED", payload: data });
        })
        .catch((error) => {
          dispatch({ type: "PRODUCTS_ERROR", payload: error });
        });
    }
  }, []);

  function handleAddToCart(productId) {
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

      //setCartItems(updatedCartItems);
      dispatch({ type: "CARTITEMS_LOADED", payload: updatedCartItems });
      return;
    }

    const updatedProduct = buildNewCartItem(foundProduct);
    //setCartItems((prevState) => [...prevState, updatedProduct]);
    dispatch({
      type: "CARTITEMS_LOADED",
      payload: [...cartItems, updatedProduct],
    });
  }

  function handleChange(event, productId) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity <= item.unitsInStock) {
        return {
          ...item,
          quantity: Number(event.target.value),
        };
      }

      return item;
    });

    setCartItems(updatedCartItems);
  }

  function handleRemove(productId) {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);

    setCartItems(updatedCartItems);
  }

  function handleDownVote(productId) {
    const updatedProducts = products.map((product) => {
      if (
        product.id === productId &&
        product.votes.downVotes.currentValue <
          product.votes.downVotes.lowerLimit
      ) {
        return {
          ...product,
          votes: {
            ...product.votes,
            downVotes: {
              ...product.votes.downVotes,
              currentValue: product.votes.downVotes.currentValue + 1,
            },
          },
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  }

  function handleUpVote(productId) {
    const updatedProducts = products.map((product) => {
      if (
        product.id === productId &&
        product.votes.upVotes.currentValue < product.votes.upVotes.upperLimit
      ) {
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

    setProducts(updatedProducts);
  }

  function handleSetFavorite(productId) {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          isFavorite: !product.isFavorite,
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  }

  function saveNewProduct(newProduct) {
    setProducts((prevState) => [newProduct, ...prevState]);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-product">
          <NewProdContext.Provider
            value={{
              saveNewProduct: saveNewProduct,
            }}
          >
            <NewProduct />
          </NewProdContext.Provider>
        </Route>
        <Route path="/" exact>
          <HomeContext.Provider
            value={{
              cartItems: cartItems,
              products: products,
              isLoading: isLoading,
              hasError: hasError,
              loadingError: loadingError,
              handleDownVote: handleDownVote,
              handleUpVote: handleUpVote,
              handleSetFavorite: handleSetFavorite,
              handleAddToCart: handleAddToCart,
              handleRemove: handleRemove,
              handleChange: handleChange,
            }}
          >
            <Home fullWidth />
          </HomeContext.Provider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
