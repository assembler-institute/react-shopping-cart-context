import { getProducts } from "../api/getProducts";
// import products from "./demo-data";

export async function setApiProducts() {
  const data = await getProducts();
  localStorage.setItem("products", JSON.stringify(data));
  // localStorage.setItem("products", JSON.stringify(products));
}

function getLocalStorageItems({ prevState, payload: storageKey }) {
  const data = localStorage.getItem(storageKey);
  const newState = prevState;
  // eslint-disable-next-line
  console.log("hey get local", data);
  if (data) {
    newState[storageKey] = JSON.parse(data);
    // eslint-disable-next-line
    console.log("hey get local new state", newState);
    return newState;
  }
  return newState;
}

function setLocalStorageItems({ prevState, payload }) {
  localStorage.setItem(payload.storageKey, JSON.stringify(payload.data));
  return prevState;
}

export { getLocalStorageItems, setLocalStorageItems };
