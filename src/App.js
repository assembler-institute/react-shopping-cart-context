import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";

import * as api from "./api";

import useLocalStorage from "./hooks/useLocalStorage";
import loadLocalStorageItems from "./utils/loadLocalStorageItems";
import Confirmation from "./pages/Confirmation";
import Payment from "./pages/Payment";
import Shipping from "./pages/Shipping";
import UserInformation from "./pages/UserInformation";

import CartContextProvider from "./components/CartContextProvider";
import UserContext from "./context/userContext";
import PaymentContext from "./context/paymentContext";

import "./App.scss";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";

function App() {
  const [products, setProducts] = useState(() =>
    loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []),
  );

  useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [user, setUser] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState([]);

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

  function saveUser(userData) {
    setUser((prevState) => [...prevState, userData]);
    // eslint-disable-next-line no-console
    console.log(userData);
  }

  function savePaymentInfo(paymentData) {
    setPaymentInfo((prevState) => [...prevState, paymentData]);
    // eslint-disable-next-line no-console
    console.log(paymentData, "payment info");
  }
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Switch>
          <UserContext.Provider value={user}>
            <PaymentContext.Provider value={{ paymentInfo, savePaymentInfo }}>
              <Route path="/checkout/order-summary" exact>
                <Confirmation />
              </Route>
              <Route path="/checkout/step-3" exact>
                <Payment />
              </Route>
            </PaymentContext.Provider>
            <Route path="/checkout/step-2" exact>
              <Shipping />
            </Route>
            <Route path="/checkout/step-1" exact>
              <UserInformation saveUser={saveUser} />
            </Route>
            <Route path="/new-product">
              <NewProduct saveNewProduct={saveNewProduct} />
            </Route>
            <Route path="/" exact>
              <Home
                fullWidth
                products={products}
                isLoading={isLoading}
                hasError={hasError}
                loadingError={loadingError}
                handleDownVote={handleDownVote}
                handleUpVote={handleUpVote}
                handleSetFavorite={handleSetFavorite}
              />
            </Route>
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
