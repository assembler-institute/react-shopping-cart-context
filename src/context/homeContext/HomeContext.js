import { createContext } from "react";

const initValues = {
  fullWidth: null,
  cartItems: [],
  products: [],
  isLoading: false,
  hasError: false,
  loadingError: null,
  handleDownVote: () => {},
  handleUpVote: () => {},
  handleSetFavorite: () => {},
  handleAddToCart: () => {},
  handleRemove: () => {},
  handleChange: () => {},
};

const HomeContext = createContext(initValues);
export default HomeContext;
