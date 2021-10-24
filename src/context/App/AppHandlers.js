import { getProducts } from "../../api/getProducts";

export async function handleDataFetch({ prevState }) {
  // eslint-disable-next-line
  console.log("fetching data", prevState);
  try {
    const products = await getProducts()
    return {
      ...prevState,
      products: products,
      hasError: false,
    };
  } catch (error) {
    return {
      ...prevState,
      hasError: error,
    };
  }

}

export function handleLoadingState({ prevState, payload: valueBoolean }) {
  return { ...prevState, isLoading: valueBoolean };
}
