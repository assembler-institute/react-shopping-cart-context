import products from "./demo-data";

export function setApiProducts() {
  // eslint-disable-next-line
  localStorage.setItem("products", JSON.stringify(products));
}

function getLocalStorageItems({ prevState, payload: storageKey }) {
  // eslint-disable-next-line
  const data = localStorage.getItem(storageKey);

  const newState = prevState;

  // eslint-disable-next-line
  // const dataParsed=JSON.parse(data);

  if (data) {
    newState[storageKey] = JSON.parse(data);
    return newState;
  }

  return newState;
}

function setLocalStorageItems({ prevState, payload }) {
  // eslint-disable-next-line
  console.log(payload.data, "for the key", payload.storageKey);
  localStorage.setItem(payload.storageKey, JSON.stringify(payload.data));
  return prevState;
}

export { getLocalStorageItems, setLocalStorageItems };
