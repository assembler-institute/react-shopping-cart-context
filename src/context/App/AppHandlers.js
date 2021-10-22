import { getProducts } from "../../api/getProducts";

export function handleDataFetch({ prevState }) {
  getProducts()
    .then((data) => {
      // Set products state
      return {
        ...prevState,
        products: data,
        hasError: null,
      };
    })
    .catch((error) => {
      return {
        ...prevState,
        hasError: error,
      };
    });
}

export function handleLoadingState({ prevState, payload: value }) {
  return { ...prevState, isLoading: value };
}
