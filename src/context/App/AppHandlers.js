import { getProducts } from "../../api/getProducts";

export function handleDataFetch({ prevState }) {
  // eslint-disable-next-line
  console.log("fetching data");
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

export function handleLoadingState({ prevState, value }) {
  return { ...prevState, isLoading: value };
}
