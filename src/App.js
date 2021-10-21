import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useProducts } from "./context/products/reducer";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import NewProduct from "./pages/NewProduct";
import AddressForm from "./components/AddressForm";
import DetailsForm from "./components/DetailsForm";
import PaymentForm from "./components/PaymentForm";

//import { Checkout, Home, NewProduct, AddressForm, DetailsForm, PaymentForm } from "./pages/index";

import useLocalStorage from "./hooks/useLocalStorage";
import { DataProvider } from "./context/checkoutFormContext/reducer";

// import loadLocalStorageItems from "./utils/loadLocalStorageItems";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

function App() {
  const { products, cartItems } = useProducts();

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
