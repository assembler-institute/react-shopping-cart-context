import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useProducts } from "./components/Context/reducer";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import UserInfo from "./pages/UserInfo";

import * as api from "./api";

import useLocalStorage from "./hooks/useLocalStorage";
import loadLocalStorageItems from "./utils/loadLocalStorageItems";
import UserContext from "./Contexts/UserContext";

/* import ProductsContext from "./components/Context/ProductsContext"; */

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

function App() {
  /* const [products, setProducts] = useState(() =>
    loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []),
  );
  const [cartItems, setCartItems] = useState(() =>
    loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []),
  ); */
  const [user, setUser] = useState([]);

  const {
    localStorageProducts,
    fetchProducts,
    products,
    setIsLoading,
    setHasError,
    setLoadingError,
    setProducts,
    setCartItems,
    cartItems,
    ...props
  } = useProducts();

  useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
  useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

  useEffect(() => {
    if (products.length === 0) {
      setIsLoading(true);

      api
        .getProducts()
        .then((data) => {
          fetchProducts(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
          setHasError(true);
          setLoadingError(error.message);
        });
    }
  }, []);
  
  function saveUser(userData) {
    setUser((prevState) => [...prevState, userData]);
  }

  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/new-product">
          <NewProduct/>
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <UserContext.Provider value={user, saveUser}>
        <Route path="/user-info" exact>
          <UserInfo />
        </Route>
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
