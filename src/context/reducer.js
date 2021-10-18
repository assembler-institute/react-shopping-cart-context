const initialState = {
  handleChange: () => {},
  handleRemove: () => {},
  handleAddToCart: () => {},
  handleSetFavorite: () => {},
  handleUpVote: () => {},
  handleDownVote: () => {},
  loadingError: {
    cartItems: null,
    products: null,
  },
  hasError: {
    cartItems: false,
    products: false,
  },
  isLoading: {
    cartItems: false,
    products: false,
  },
  products: [],
  cartItems: [],
};

reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_LOADING": {
      return {
        ...state,
        isLoading: { products: true },
        hasError: { products: false },
        loadingError: { products: false },
      };
    }
    case "PRODUCTS_LOADED": {
      const productsList = [...state.products];
      action.payload.results.map((el) => [el, ...productsList]);
      return {
        ...state,
        products: productsList,
        isLoading: { products: false },
        hasError: { products: false },
        loadingError: { products: false },
      };
    }
    case "PRODUCTS_ERROR": {
      return {
        ...state,
        isLoading: { products: false },
        hasError: { products: true },
        loadingError: { ...state.loadingError, products: action.payload },
      };
    }
    case "CARTITEMS_LOADING": {
      return {
        ...state,
        isLoading: { cartItems: true },
        hasError: { cartItems: false },
        loadingError: { cartItems: false },
      };
    }
    case "CARTITEMS_LOADED": {
      const cartItemsList = [...state.cartItems];
      action.payload.results.map((el) => [...cartItemsList, el]);
      return {
        ...state,
        cartItems: cartItemsList,
        isLoading: { cartItems: false },
        hasError: { cartItems: false },
        loadingError: { cartItems: false },
      };
    }
    case "CARTITEMS_ERROR": {
      return {
        ...state,
        isLoading: { cartItems: false },
        hasError: { cartItems: true },
        loadingError: { ...state.loadingError, cartItems: action.payload },
      };
    }
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, initialState);
