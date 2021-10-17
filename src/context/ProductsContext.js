import { useState, createContext } from "react";
import loadLocalStorageItems from "../utils/loadLocalStorageItems";

const ProductsContext = createContext({
	products: [],
	handleDownVote: () => {},
	handleUpVote: () => {},
	handleSetFavorite: () => {},
	handleSaveNewProduct: () => {},
});

export default ProductsContext;
