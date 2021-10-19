import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EcommerceContextProvider from "./context/EcommerceContext";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";

import * as api from "./api";

import useLocalStorage from "./hooks/useLocalStorage";
import loadLocalStorageItems from "./utils/loadLocalStorageItems";

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

function App() {
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

  // just one useEffect
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

  return (
    <eCommerceContext.Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/new-product">
            <NewProduct />
          </Route>
          <Route path="/" exact>
            <Home
              fullWidth
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
    </eCommerceContext.Provider>
  );
}

export default App;
