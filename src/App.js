import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Home, NewProduct } from "pages";
import { AddressForm, DetailsForm, PaymentForm } from "components";

import { useProducts } from "context/products/reducer";
import { useCartItems } from "context/cartItems/reducer";
import { DataProvider } from "context/checkoutForm/reducer";

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
      <DataProvider>
        <Switch>
          <Route exact path="/checkout/step-1" component={DetailsForm} />
          <Route exact path="/checkout/step-2" component={AddressForm} />
          <Route exact path="/checkout/step-3" component={PaymentForm} />
          <Route path="/new-product" component={NewProduct} />
          <Route path="/" exact>
            <Home fullWidth />
          </Route>
          <Redirect from="/checkout" exact to="/checkout/step-1" />
          <Redirect to="/" />
        </Switch>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
