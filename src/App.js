import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";

import * as api from "./api";

import useLocalStorage from "./hooks/useLocalStorage";
import loadLocalStorageItems from "./utils/loadLocalStorageItems";
import ProductsContext from "./context/ProductsContext";
import CartItemsContext from "./context/CartItemsContext";
import useLoadingStatus from "./hooks/useLoadingStatus";

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
	const [products, setProducts] = useState(() => loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []));
	const [cartItems, setCartItems] = useState(() => loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []));

	useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
	useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

	const { hasLoaded, setHasLoaded, hasError, setHasError, loadingError, setLoadingError } = useLoadingStatus();

	useEffect(() => {
		if (products.length === 0) {
			api
				.getProducts()
				.then((data) => {
					setProducts(data);
					setHasLoaded(false);
				})
				.catch((error) => {
					setHasLoaded(false);
					setHasError(true);
					setLoadingError(error.message);
				});
		}
	}, []);

	function handleDownVote(productId) {
		const updatedProducts = products.map((product) => {
			if (product.id === productId && product.votes.downVotes.currentValue < product.votes.downVotes.lowerLimit) {
				return {
					...product,
					votes: {
						...product.votes,
						downVotes: {
							...product.votes.downVotes,
							currentValue: product.votes.downVotes.currentValue + 1,
						},
					},
				};
			}

			return product;
		});

		setProducts(updatedProducts);
	}

	function handleUpVote(productId) {
		const updatedProducts = products.map((product) => {
			if (product.id === productId && product.votes.upVotes.currentValue < product.votes.upVotes.upperLimit) {
				return {
					...product,
					votes: {
						...product.votes,
						upVotes: {
							...product.votes.upVotes,
							currentValue: product.votes.upVotes.currentValue + 1,
						},
					},
				};
			}

			return product;
		});

		setProducts(updatedProducts);
	}

	function handleSetFavorite(productId) {
		const updatedProducts = products.map((product) => {
			if (product.id === productId) {
				return {
					...product,
					isFavorite: !product.isFavorite,
				};
			}

			return product;
		});

		setProducts(updatedProducts);
	}

	function handleSaveNewProduct(newProduct) {
		setProducts((prevState) => [newProduct, ...prevState]);
	}

	function handleAddCartItem(productId) {
		const prevCartItem = cartItems.find((item) => item.id === productId);
		const foundProduct = products.find((product) => product.id === productId);

		if (prevCartItem) {
			const updatedCartItems = cartItems.map((item) => {
				if (item.id !== productId) {
					return item;
				}

				if (item.quantity >= item.unitsInStock) {
					return item;
				}

				return {
					...item,
					quantity: item.quantity + 1,
				};
			});

			setCartItems(updatedCartItems);
			return;
		}

		const updatedProduct = buildNewCartItem(foundProduct);
		setCartItems((prevState) => [...prevState, updatedProduct]);
	}

	function handleEditCartItem(event, productId) {
		const updatedCartItems = cartItems.map((item) => {
			if (item.id === productId && item.quantity <= item.unitsInStock) {
				return {
					...item,
					quantity: Number(event.target.value),
				};
			}

			return item;
		});

		setCartItems(updatedCartItems);
	}

	function handleRemoveCartItem(productId) {
		const updatedCartItems = cartItems.filter((item) => item.id !== productId);

		setCartItems(updatedCartItems);
	}

	return (
		<ProductsContext.Provider
			value={{
				products,
				handleDownVote,
				handleUpVote,
				handleSetFavorite,
				handleSaveNewProduct,
			}}
		>
			<CartItemsContext.Provider
				value={{
					cartItems,
					handleAddCartItem,
					handleRemoveCartItem,
					handleEditCartItem,
				}}
			>
				<BrowserRouter>
					<Switch>
						<Route path="/new-product">
							<NewProduct />
						</Route>
						<Route path="/" exact>
							<Home fullWidth hasLoaded={hasLoaded} hasError={hasError} loadingError={loadingError} />
						</Route>
					</Switch>
				</BrowserRouter>
			</CartItemsContext.Provider>
		</ProductsContext.Provider>
	);
}

export default App;
