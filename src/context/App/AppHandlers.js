import { setApiProducts } from "../../utils/loadLocalStorageItems";

export async function handleDataFetch({ prevState }) {
  try {
    setApiProducts();
    return {
      ...prevState,
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
