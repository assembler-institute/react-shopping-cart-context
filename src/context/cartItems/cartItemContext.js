import React, { createContext } from 'react';

const initialState = {
  products: [],
  cartItems: [],
  isLoading: false,
  hasError: false,
  loadingError: null,
  handleDownVote: () => { },
  handleUpVote: () => { },
  handleSetFavorite: () => { },
  handleAddToCart: () => { },
  handleRemove: () => { },
  handleChange: () => { },
};

const cartItemsContext = createContext(initialState);

export default cartItemsContext