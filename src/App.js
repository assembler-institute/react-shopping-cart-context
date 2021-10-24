import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAppContext } from "./context/App/AppContext";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import { setApiProducts } from "./utils/loadLocalStorageItems";

const PRODUCTS_LOCAL_STORAGE_KEY = "products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "cartItems";

function App() {
  const {
    cartItems,
    products,
    // handleDataFetch,
    handleLoadingState,
    getLocalStorageItems,
    setLocalStorageItems,
  } = useAppContext();

  // First render
  useEffect(() => {
    handleLoadingState(true);
    setApiProducts();
    handleLoadingState(false);

    // Get products local storage -> [...products] || []
    getLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY);
    getLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY);
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      // eslint-disable-next-line
      console.log(products, "im in the update section for prod");
      setLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, products);
    }
  }, [products]);

  useEffect(() => {
    if (cartItems.length > 0) {
      // eslint-disable-next-line
      console.log(cartItems, "im in the update section for cart Items");
      setLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, cartItems);
    }
  }, [cartItems]);

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
