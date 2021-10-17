const startingValues = {
  handleChange: () => {},
  handleRemove: () => {},
  handleAddToCart: () => {},
  handleSetFavorite: () => {},
  handleUpVote: () => {},
  handleDownVote: () => {},
  loadingError: null,
  hasError: false,
  isLoading: false,
  products: [],
  cartItems: [],
};

export const HomeContext = React.createContext(startingValues);
