
import { getProducts } from "../../api/getProducts";

export function handleSetFavorite({prevState, payload:productId}) {
  const updatedProducts = prevState.products.map((product) => {
    if (product.id === productId) {
      return {
        ...product,
        isFavorite: !product.isFavorite,
      };
    }

    return product;
  });


  return {...prevState, products:updatedProducts};
}

export function handleDataFetch({prevState}) {
  api
  .getProducts()
  .then((data) => {
    // Set products state
    return {
      ...prevState,
      products: data,
      hasError: null
    }
  })
  .catch((error) => {
    return {
      ...prevState,
      hasError: error
    }
  });
}

export function handleLoadingState({prevState, payload}) {
  return {...prevState, isLoading: payload}
}


