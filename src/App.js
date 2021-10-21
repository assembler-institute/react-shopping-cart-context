import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useProducts } from "./components/Context/reducer";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import UserInfo from "./pages/UserInfo";

import * as api from "./api";

import useLocalStorage from "./hooks/useLocalStorage";
import BillingAddressPage from "./pages/BillingAddressPage/BillingAddressPage";
import PaymentDetailsPage from "./pages/PaymentDetailsPage/PaymentDetailsPage";
import { UsersProvider } from "./components/Context/UserContext";

/* import ProductsContext from "./components/Context/ProductsContext"; */

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

function App() {
  //const [user, setUser] = useState([]);

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
          <NewProduct />
        </Route>
        <UsersProvider>
          <Route path="/checkout/step-1">
            <UserInfo />
          </Route>
          <Route path="/checkout/step-2">
            <BillingAddressPage />
          </Route>
          <Route path="/checkout/step-3">
            <PaymentDetailsPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </UsersProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
