import { useReducer, useEffect, createContext } from "react";
import products from "../utils/demo-data";
import loadLocalStorageItems from "../utils/loadLocalStorageItems";
import useLocalStorage from "../hooks/useLocalStorage";

import * as api from "../api";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

const actionTypes = {
	PRODUCT_DOWNVOTE: Symbol(),
	PRODUCT_UPVOTE: Symbol(),
	PRODUCT_SET_FAVORITE: Symbol(),
	PRODUCT_SAVE_NEW_PRODUCT: Symbol(),
	CARTITEM_ADD: Symbol(),
	CARTITEM_DELETE: Symbol(),
	CARTITEM_EDIT: Symbol(),
	LOADING_SUCCESS: Symbol(),
	LOADING_ERROR: Symbol(),
};

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

function handleDownVote(products, productId) {
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

	return updatedProducts;
}

function handleUpVote(products, productId) {
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

	return updatedProducts;
}

function handleSetFavorite(products, productId) {
	const updatedProducts = products.map((product) => {
		if (product.id === productId) {
			return {
				...product,
				isFavorite: !product.isFavorite,
			};
		}

		return product;
	});

	return updatedProducts;
}

function handleSaveNewProduct(products, newProduct) {
	return [newProduct, ...products];
}

function handleAddCartItem(products, cartItems, productId) {
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

		return updatedCartItems;
	}

	const updatedProduct = buildNewCartItem(foundProduct);

	return [...cartItems, updatedProduct];
}

function handleEditCartItem(cartItems, productId, quantity) {
	const updatedCartItems = cartItems.map((item) => {
		if (item.id === productId && item.quantity <= item.unitsInStock) {
			return {
				...item,
				quantity,
			};
		}

		return item;
	});

	return updatedCartItems;
}

function handleRemoveCartItem(cartItems, productId) {
	const updatedCartItems = cartItems.filter((item) => item.id !== productId);

	return updatedCartItems;
}

const initialState = {
	products: loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []),
	cartItems: loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []),
	loading: {
		hasLoaded: false,
		hasError: false,
		loadingError: null,
	},
};

function reducer(state, action) {
	const { type, payload } = action;
	const { products, cartItems } = state;

	switch (type) {
		case actionTypes.PRODUCT_DOWNVOTE:
			return {
				...state,
				products: handleDownVote(products, payload.id),
			};
		case actionTypes.PRODUCT_UPVOTE:
			return {
				...state,
				products: handleUpVote(products, payload.id),
			};
		case actionTypes.PRODUCT_SET_FAVORITE:
			return {
				...state,
				products: handleSetFavorite(products, payload.id),
			};
		case actionTypes.PRODUCT_SAVE_NEW_PRODUCT:
			return {
				...state,
				products: handleSaveNewProduct(products, payload.product),
			};
		case actionTypes.CARTITEM_ADD:
			return {
				...state,
				cartItems: handleAddCartItem(products, cartItems, payload.id),
			};
		case actionTypes.CARTITEM_DELETE:
			return {
				...state,
				cartItems: handleRemoveCartItem(cartItems, payload.id),
			};
		case actionTypes.CARTITEM_EDIT:
			return {
				...state,
				cartItems: handleEditCartItem(cartItems, payload.id, payload.quantity),
			};
		case actionTypes.LOADING_SUCCESS:
			return {
				...state,
				loading: {
					...state.loading,
					hasLoaded: true,
				},
				products: payload?.data || state.products,
			};
		case actionTypes.LOADING_ERROR:
			return {
				...state,
				loading: {
					hasLoaded: true,
					hasError: true,
					loadingError: payload.error.errorMessage,
				},
			};
		default:
			throw new Error();
	}
}

const AppContext = createContext();

function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { products, cartItems, loading } = state;

	useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
	useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

	useEffect(() => {
		if (products.length === 0) {
			api
				.getProducts()
				.then((data) => {
					dispatch({ type: actionTypes.LOADING_SUCCESS, payload: { data } });
				})
				.catch((error) => {
					dispatch({ type: actionTypes.LOADING_ERROR, payload: { error } });
				});
		} else {
			dispatch({ type: actionTypes.LOADING_SUCCESS });
		}
	}, []);

	return (
		<AppContext.Provider
			value={{
				products,
				cartItems,
				loading,
				handleDownVote: (id) => {
					dispatch({ type: actionTypes.PRODUCT_DOWNVOTE, payload: { id } });
				},
				handleUpVote: (id) => {
					dispatch({ type: actionTypes.PRODUCT_UPVOTE, payload: { id } });
				},
				handleSetFavorite: (id) => {
					dispatch({ type: actionTypes.PRODUCT_SET_FAVORITE, payload: { id } });
				},
				handleAddCartItem: (id) => {
					dispatch({ type: actionTypes.CARTITEM_ADD, payload: { id } });
				},
				handleRemoveCartItem: (id) => {
					dispatch({ type: actionTypes.CARTITEM_DELETE, payload: { id } });
				},
				handleEditCartItem: (id, quantity) => {
					dispatch({ type: actionTypes.CARTITEM_EDIT, payload: { id, quantity } });
				},
				handleSaveNewProduct: (product) => {
					dispatch({ type: actionTypes.PRODUCT_SAVE_NEW_PRODUCT, payload: { product } });
				},
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export { AppProvider, AppContext };
