import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAppContext } from "./context/App/AppContext";
import EcommerceContextProvider from "./context/Ecoomerce/eCommerceContext";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";

const PRODUCTS_LOCAL_STORAGE_KEY = "products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "cartItems";

function App() {

  const {cartItems,
    products,
    handleDataFetch,
    handleLoadingState,
    getLocalStorageItems,
    setLocalStorageItems
  } = useAppContext();

  // First render
  useEffect(() => {

    getLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY);
    // Get products local storage -> [...products] || []
    getLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY)

    // Get products from API
    if (products.length === 0) {
      // Set loading true
      handleLoadingState(true);
      // Get products -> hasError
      handleDataFetch();
      // Set loading false
      handleLoadingState(false);
    }
  }, []);

  useEffect(() => {
    setLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, products)
  }, [products])

  useEffect(() => {
    setLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, cartItems)
  }, [cartItems])


  return (
    <EcommerceContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/new-product">
            <NewProduct />
          </Route>
          <Route path="/" exact>
            <Home fullWidth/>
          </Route>
        </Switch>
      </BrowserRouter>
    </EcommerceContextProvider>
  );
}

export default App;
