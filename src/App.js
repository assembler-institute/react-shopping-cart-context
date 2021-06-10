import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import Checkout from "./pages/Checkout";

import * as api from "./api";

import useLocalStorage from "./hooks/useLocalStorage";
import loadLocalStorageItems from "./utils/loadLocalStorageItems";

import CartContextProvider from "./components/ContextComponents/CartContextProvider";
import LoginContextProvider from "./components/ContextComponents/LoginContextProvider";

// Checkout constants
import {
  PROFILE,
  BILLING,
  PAYMENT,
  SUMMARY,
  PROFILE_URL,
  BILLING_URL,
  PAYMENT_URL,
  SUMMARY_URL,
  HOME_URL,
  NEWPROD_URL,
} from "./utils/constants";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";

function App() {
  const [products, setProducts] = useState(() =>
    loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []),
  );

  useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

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

  return (
    <LoginContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path={PROFILE_URL}>
              <Checkout fullWidth processStep={PROFILE} />
            </Route>
            <Route path={BILLING_URL}>
              <Checkout fullWidth processStep={BILLING} />
            </Route>
            <Route path={PAYMENT_URL}>
              <Checkout fullWidth processStep={PAYMENT} />
            </Route>
            <Route path={SUMMARY_URL}>
              <Checkout fullWidth processStep={SUMMARY} />
            </Route>
            <Route path={NEWPROD_URL}>
              <NewProduct saveNewProduct={saveNewProduct} />
            </Route>
            <Route path={HOME_URL} exact>
              <Home
                fullWidth
                products={products}
                isLoading={isLoading}
                hasError={hasError}
                loadingError={loadingError}
                handleDownVote={handleDownVote}
                handleUpVote={handleUpVote}
                handleSetFavorite={handleSetFavorite}
                showNewProductForm
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </LoginContextProvider>
  );
}

export default App;
