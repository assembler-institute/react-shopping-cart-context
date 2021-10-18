import { createContext } from "react";

const initValues = {
 /*  fullWidth: false, */
  cartItems:[],
  products:[],
  isLoading: false,
  hasError:false,
  loadingError:false,
  handleDownVote:() => {},
  handleUpVote:() => {},
  handleSetFavorite:() => {},
  handleAddToCart:() => {},
  handleRemove:() => {},
  handleChange:() => {}
};

const ProductsContext = createContext(initValues);

export default ProductsContext;
