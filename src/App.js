import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getProducts } from "./services/shoppingCart";
import { useProducts } from "./context/products/reducer";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";

import * as api from "./api";

import useLocalStorage from "./hooks/useLocalStorage";
import loadLocalStorageItems from "./utils/loadLocalStorageItems";

// import { initialState, reducer, actionTypes } from './context/products'
// import { initialState as initialState2, reducer as reducer2, actionTypes as actionTypes2 } from './context/cartItems'

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
  // const {
  //   value,
  //   handleAddToCart,
  //   handleChange,
  //   handleRemove,
  //   handleDownVote,
  //   handleUpVote,
  //   handleSetFavorite,
  //   saveNewProduct
  // } = useProducts();

  // const [state, dispatch] = useReducer(reducer, initialState);
  const {
    // products,
    // productIds,
    cartItems,
    isLoading,
    hasError,
    loadingError,
    // handleAddToCart,
    handleChange,
    handleRemove,
    // handleDownVote,
    // handleUpVote,
    // handleSetFavorite,
    saveNewProduct
  } = useProducts();

  // useEffect(() => {
  //   if (products.length === 0) {
  //     const request = async () => {
  //       dispatch({ type: actionTypes.PRODUCTS_FETCHING });
  //       const { data, hasError, error } = await api.getProducts();

  //       if (hasError) dispatch({ type: actionTypes.PRODUCTS_ERROR, payload: error });
  //       else dispatch({ type: actionTypes.PRODUCTS_SUCCESS, payload: data });
  //     };

  //     request();
  //   }
  // }, [dispatch]);

  // useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
  // useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

  // function handleAddToCart(productId) {
  //   const prevCartItem = cartItems.find((item) => item.id === productId);
  //   const foundProduct = products.find((product) => product.id === productId);

  //   if (prevCartItem) {
  //     const updatedCartItems = cartItems.map((item) => {
  //       if (item.id !== productId) {
  //         return item;
  //       }

  //       if (item.quantity >= item.unitsInStock) {
  //         return item;
  //       }

  //       return {
  //         ...item,
  //         quantity: item.quantity + 1,
  //       };
  //     });

  //     setCartItems(updatedCartItems);
  //     return;
  //   }

  //   const updatedProduct = buildNewCartItem(foundProduct);
  //   setCartItems((prevState) => [...prevState, updatedProduct]);
  // }

  // function handleChange(event, productId) {
  //   const updatedCartItems = cartItems.map((item) => {
  //     if (item.id === productId && item.quantity <= item.unitsInStock) {
  //       return {
  //         ...item,
  //         quantity: Number(event.target.value),
  //       };
  //     }

  //     return item;
  //   });

  //   setCartItems(updatedCartItems);
  // }

  // function handleRemove(productId) {
  //   const updatedCartItems = cartItems.filter((item) => item.id !== productId);

  //   setCartItems(updatedCartItems);
  // }

  // function handleDownVote(productId) {
  //   const updatedProducts = products.map((product) => {
  //     if (
  //       product.id === productId &&
  //       product.votes.downVotes.currentValue <
  //       product.votes.downVotes.lowerLimit
  //     ) {
  //       return {
  //         ...product,
  //         votes: {
  //           ...product.votes,
  //           downVotes: {
  //             ...product.votes.downVotes,
  //             currentValue: product.votes.downVotes.currentValue + 1,
  //           },
  //         },
  //       };
  //     }

  //     return product;
  //   });

  //   setProducts(updatedProducts);
  // }

  // function handleUpVote(productId) {
  //   const updatedProducts = products.map((product) => {
  //     if (
  //       product.id === productId &&
  //       product.votes.upVotes.currentValue < product.votes.upVotes.upperLimit
  //     ) {
  //       return {
  //         ...product,
  //         votes: {
  //           ...product.votes,
  //           upVotes: {
  //             ...product.votes.upVotes,
  //             currentValue: product.votes.upVotes.currentValue + 1,
  //           },
  //         },
  //       };
  //     }

  //     return product;
  //   });

  //   setProducts(updatedProducts);
  // }

  // function handleSetFavorite(productId) {
  //   const updatedProducts = products.map((product) => {
  //     if (product.id === productId) {
  //       return {
  //         ...product,
  //         isFavorite: !product.isFavorite,
  //       };
  //     }

  //     return product;
  //   });

  //   setProducts(updatedProducts);
  // }

  // function saveNewProduct(newProduct) {
  //   const request = async () => {
  //     dispatch({ type: actionTypes.ADD_PRODUCT_FETCHING });
  //     const { data, hasError, error } = await api.postProduct(newProduct);

  //     if (hasError) dispatch({ type: actionTypes.ADD_PRODUCT_ERROR, payload: error });
  //     else dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, payload: data });
  //   };

  //   request();
  // }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-product">
          <NewProduct saveNewProduct={saveNewProduct} />
        </Route>
        <Route path="/" exact>
          <Home
            fullWidth
            cartItems={cartItems}
            // products={products}
            isLoading={isLoading}
            hasError={hasError}
            loadingError={loadingError}
            // handleDownVote={handleDownVote}
            // handleUpVote={handleUpVote}
            // handleSetFavorite={handleSetFavorite}
            // handleAddToCart={handleAddToCart}
            handleRemove={handleRemove}
            handleChange={handleChange}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
