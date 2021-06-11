import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";

import * as api from "./api";

import useLocalStorage from "./hooks/useLocalStorage";
import loadLocalStorageItems from "./utils/loadLocalStorageItems";
import Adress from "./pages/Adress";
import Payment from "./pages/Payment";
import Confirm from "./pages/Confirm";
import Details from "./pages/Details";
import ShoppingContext from "./context";

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

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";
const UPLOAD_LOCALSTORAGE = "UPLOAD_LOCALSTORAGE";
const PROGRES_TO_ZERO = "PROGRES_TO_ZERO";
const PROGRES = "PROGRES";
const UPDATEDETAILS = "UPDATEDETAILS";
const UPDATEADRESS = "UPDATEADRESS";
const UPDATEPAYMENT = "UPDATEPAYMENT";

// const RESET = "RESET";
function reducer(state, action) {
  switch (action.type) {
    case PROGRES: {
      localStorage.setItem(
        "context",
        JSON.stringify({
          ...state,
          progresBar: state.progresBar + 1,
        }),
      );
      return {
        ...state,
        progresBar: state.progresBar + 1,
      };
    }

    case PROGRES_TO_ZERO: {
      return {
        ...state,
        progresBar: state.progresBar - 2,
      };
    }

    case UPDATEDETAILS: {
      localStorage.setItem(
        "context",
        JSON.stringify({
          ...state,
          details: action.newdetails,
        }),
      );
      return {
        ...state,
        details: action.newdetails,
      };
    }
    case UPDATEADRESS: {
      localStorage.setItem(
        "context",
        JSON.stringify({
          ...state,
          adressData: action.newAdress,
        }),
      );
      return {
        ...state,
        adressData: action.newAdress,
      };
    }
    case UPDATEPAYMENT: {
      localStorage.setItem(
        "context",
        JSON.stringify({
          ...state,
          paymentData: action.newPayment,
        }),
      );
      return {
        ...state,
        paymentData: action.newPayment,
      };
    }
    case UPLOAD_LOCALSTORAGE: {
      return {
        progresBar: state.progresBar,
        ...loadLocalStorageItems("context", state),
      };
    }

    default: {
      return state;
    }
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, {
    progresBar: 1,
  });
  const [products, setProducts] = useState(() =>
    loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []),
  );
  const [cartItems, setCartItems] = useState(() =>
    loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []),
  );

  useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
  useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  // const [path, setPath] = useState(1);
  useEffect(() => {
    if (products.length === 0) {
      setIsLoading(true);

      api
        .getProducts()
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setHasError(true);
          setLoadingError(error.message);
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

      setCartItems(updatedCartItems);
      return;
    }

    const updatedProduct = buildNewCartItem(foundProduct);
    setCartItems((prevState) => [...prevState, updatedProduct]);
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

  function nextProgress() {
    dispatch({ type: PROGRES });
  }

  function ProgressToZero() {
    dispatch({ type: PROGRES_TO_ZERO });
  }

  function updateDetails(newDetails) {
    dispatch({
      type: UPDATEDETAILS,
      newdetails: newDetails,
    });
  }
  function updateAdress(newAdress) {
    dispatch({
      type: UPDATEADRESS,
      newAdress: newAdress,
    });
  }
  function updatePayment(newPayment) {
    dispatch({
      type: UPDATEPAYMENT,
      newPayment: newPayment,
    });
  }
  function uploadLocatStorage() {
    dispatch({ type: UPLOAD_LOCALSTORAGE });
  }

  useEffect(() => {
    uploadLocatStorage();
    console.log(state);
  }, []);
  return (
    <ShoppingContext.Provider
      value={{
        progresBar: state.progresBar,
        details: state.details,
        adressData: state.adressData,
        paymentData: state.paymentData,
        cartItems: cartItems,
        nextProgress: nextProgress,
        ProgressToZero: ProgressToZero,
        updateDetails: updateDetails,
        updateAdress: updateAdress,
        updatePayment: updatePayment,
        handleChange: handleChange,
        handleRemove: handleRemove,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/Checkout/step-1">
            <Details />
          </Route>
          <Route path="/Checkout/step-2">
            <Adress />
          </Route>
          <Route path="/Checkout/step-3">
            <Payment />
          </Route>
          <Route path="/Checkout/order-summary">
            <Confirm />
          </Route>
          <Route path="/new-product">
            <NewProduct saveNewProduct={saveNewProduct} />
          </Route>
          <Route path="/" exact>
            <Home
              fullWidth
              cartItems={cartItems}
              products={products}
              isLoading={isLoading}
              hasError={hasError}
              loadingError={loadingError}
              handleDownVote={handleDownVote}
              handleUpVote={handleUpVote}
              handleSetFavorite={handleSetFavorite}
              handleAddToCart={handleAddToCart}
              handleRemove={handleRemove}
              handleChange={handleChange}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </ShoppingContext.Provider>
  );
}

export default App;
