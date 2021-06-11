import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./style.scss";
import "react-credit-cards/lib/styles.scss";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import BillingAddress from "./pages/CheckoutPages/BillingAddress";
import OrderSummary from "./pages/CheckoutPages/OrderSummary";
import PaymentDetails from "./pages/CheckoutPages/PaymentDetails";
import PersonalDetails from "./pages/CheckoutPages/PersonalDetails";

import * as api from "./api";

import useLocalStorage from "./hooks/useLocalStorage";
import loadLocalStorageItems from "./utils/loadLocalStorageItems";

import checkoutContext from "./context/checkoutData";

const SETISCHECKOUT = "SETISCHECKOUT";
const RESETISCHECKOUT = "RESETISCHECKOUT";
const LOADCHECKOUTDATA = "LOADCHECKOUTDATA";
const TEMPSTATEDATA = "TEMPSTATEDATA";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";
const CHECKOUT_DATA_LOCAL_STORAGE_KEY = "react-sc-state-checkout-data";

const initialCheckoutContext = {
  isCheckoutDisabled: true,
  userName: "",
  userPassword: "",
  name: "",
  lastName: "",
  email: "",
  phonePrefix: "",
  phoneNumber: "",
  address: "",
  city: "",
  ZC: "",
  country: "",
  paymentMethod: "",
  cardName: "",
  cardNumber: "",
  cardExpiryDate: "",
  cvc: "",
  termsConditions: false,
  setPersonalDetails: () => {},
  tempData: {},
  navBar: 12.5,
  disabledPersonalDetails: true,
  disabledBillingAddress: true,
  disabledPaymentDetails: true,
  disabledOrderSummary: true,
};

function reducer(state, action) {
  switch (action.type) {
    case SETISCHECKOUT: {
      return {
        ...state,
        isCheckoutDisabled: true,
        disabledPersonalDetails: true,
      };
    }
    case RESETISCHECKOUT: {
      return {
        ...state,
        isCheckoutDisabled: false,
        disabledPersonalDetails: false,
      };
    }
    case LOADCHECKOUTDATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case TEMPSTATEDATA: {
      return {
        ...state,
        tempData: {
          ...state.tempData,
          ...action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
}

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
  const [state, dispatch] = useReducer(reducer, initialCheckoutContext);
  const { isCheckoutDisabled } = state;

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

  function setLocalStorage(data, KEY_LOCAL_STORAGE) {
    const prevData = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
    const updatedData = { ...prevData, ...data };
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(updatedData));
  }

  function setIsCheckout() {
    dispatch({ type: SETISCHECKOUT });
  }
  function resetIsCheckout() {
    dispatch({ type: RESETISCHECKOUT });
  }

  function setCheckoutData(data) {
    dispatch({ type: LOADCHECKOUTDATA, payload: data });
    setLocalStorage(data, CHECKOUT_DATA_LOCAL_STORAGE_KEY);
  }

  function tempData(data) {
    dispatch({ type: TEMPSTATEDATA, payload: data });
  }

  useEffect(() => {
    const checkoutData = loadLocalStorageItems(
      CHECKOUT_DATA_LOCAL_STORAGE_KEY,
      [],
    );
    dispatch({ type: LOADCHECKOUTDATA, payload: checkoutData });
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

    if (cartItems.length === 0) {
      setIsCheckout();
    } else {
      resetIsCheckout();
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

    if (cartItems) {
      resetIsCheckout();
    }
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

    if (cartItems.length === 1) {
      setIsCheckout();
    }
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

  function focusCreditCard(e) {
    setCheckoutData({ cardFocus: e.target.name });
  }

  return (
    <checkoutContext.Provider
      value={{
        isCheckoutDisabled: isCheckoutDisabled,
        setCheckoutData: setCheckoutData,
        tempData: tempData,
        focusCreditCard: focusCreditCard,
        state: state,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/checkout/step-1">
            <PersonalDetails cartItems={cartItems} />
          </Route>
          <Route path="/checkout/step-2">
            <BillingAddress cartItems={cartItems} />
          </Route>
          <Route path="/checkout/step-3">
            <PaymentDetails />
          </Route>
          <Route path="/checkout/order-summary">
            <OrderSummary cartItems={cartItems} />
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
          <Route path="*">
            {/* Change to 404 not foun */}
            <NewProduct saveNewProduct={saveNewProduct} />
          </Route>
        </Switch>
      </BrowserRouter>
    </checkoutContext.Provider>
  );
}

export default App;
