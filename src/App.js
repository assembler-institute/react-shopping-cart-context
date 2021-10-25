import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import {
  CheckoutDelivery,
  CheckoutInfo,
  CheckoutPayment,
  Home,
  NewProduct,
  CheckoutCompleted,
} from "components/pages";

import { useCartItems, useProducts } from "context";

import useLocalStorage from "hooks/useLocalStorage";

// import loadLocalStorageItems from "utils/loadLocalStorageItems";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

function App() {
  const { products } = useProducts();
  const { cartItems } = useCartItems();

  useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
  useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/checkout/step-1" component={CheckoutInfo} />
        <Route exact path="/checkout/step-2" component={CheckoutDelivery} />
        <Route exact path="/checkout/step-3" component={CheckoutPayment} />
        <Route exact path="/checkout/complete" component={CheckoutCompleted} />
        <Route path="/new-product" component={NewProduct} />
        <Route path="/" exact>
          <Home fullWidth />
        </Route>
        <Redirect from="/checkout" exact to="/checkout/step-1" />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
