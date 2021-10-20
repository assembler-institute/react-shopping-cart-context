import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useProducts } from "./context/products/reducer";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";

import useLocalStorage from "./hooks/useLocalStorage";
// import loadLocalStorageItems from "./utils/loadLocalStorageItems";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

function App() {
  const { products, cartItems } = useProducts();

  useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
  useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-product">
          <NewProduct />
        </Route>
        <Route path="/" exact>
          <Home fullWidth />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
