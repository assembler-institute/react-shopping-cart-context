import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EcommerceContext from "./context/EcommerceContext";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";

import { actionTypes, dispatch, state } from "./store/EcommerceReducer";

const PRODUCTS_LOCAL_STORAGE_KEY = "products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "cartItems";

function App() {
  const {cartItems, products} = state
  // First render 
  useEffect(() => {
    
    dispatch({
      type:actionTypes.LOAD_LOCAL_STORAGE,
      payload:CART_ITEMS_LOCAL_STORAGE_KEY
    })
    // Get products local storage -> [...products] || []
    dispatch({
      type:actionTypes.LOAD_LOCAL_STORAGE,
      payload:PRODUCTS_LOCAL_STORAGE_KEY
    })

    // Get products from API
    if (products.length === 0) {
      // Set loading true
      dispatch({type: actionTypes.SET_LOADING, payload: true})
      // Get products -> hasError
      dispatch({type: actionTypes.FETCH_API})
      // Set loading false
      dispatch({type: actionTypes.SET_LOADING, payload: false})
    }
  }, []);

  useEffect(() => {
    dispatch({type: actionTypes.SET_LOCAL_STORAGE, payload: {
      key: PRODUCTS_LOCAL_STORAGE_KEY,
      data: cartItems
    }})
  }, [products])

  useEffect(() => {
    dispatch({type: actionTypes.SET_LOCAL_STORAGE, payload: {
      key: CART_ITEMS_LOCAL_STORAGE_KEY,
      data: cartItems
    }})
  }, [cartItems])


  return (
    <EcommerceContext.Provider>
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
    </EcommerceContext.Provider>
  );
}

export default App;
