import products from "./demo-data";

export function setApiProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

function getLocalStorageItems({ prevState, payload: storageKey }) {
  const data = localStorage.getItem(storageKey);
  const newState = prevState;
  if (data) {
    newState[storageKey] = JSON.parse(data);
    return newState;
  }
  return newState;
}

function setLocalStorageItems({ prevState, payload }) {
  localStorage.setItem(payload.storageKey, JSON.stringify(payload.data));
  return prevState;
}

/* function updateLocalStorage(state) {
  useEffect(() => {
    if (state.length > 0) {
      setLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, item);
    }
  }, [state]);
}
 */
export { getLocalStorageItems, setLocalStorageItems };
