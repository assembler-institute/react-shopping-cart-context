import { getProducts } from "../api/getProducts";

export async function setApiProducts() {
  const data = await getProducts();
  localStorage.setItem("products", JSON.stringify(data));
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

export { getLocalStorageItems, setLocalStorageItems };
