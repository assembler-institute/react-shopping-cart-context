import products from "./demo-data";

export function setApiProducts() {
  // eslint-disable-next-line
  localStorage.setItem('products', JSON.stringify(products));
}

function getLocalStorageItems({ prevState, payload: storageKey }) {
  // eslint-disable-next-line
  const data = localStorage.getItem(storageKey);

  // eslint-disable-next-line
  // const dataParsed=JSON.parse(data);
  
  if (data) {
    prevState[storageKey] = JSON.parse(data)
    return prevState;
  } else {
    return prevState;
  }
 
}

function setLocalStorageItems({ prevState, payload: { storageKey, data } }) {
  // eslint-disable-next-line
  console.log(data)
  localStorage.setItem(storageKey, JSON.stringify(data));
  return prevState;
}

export { getLocalStorageItems, setLocalStorageItems };
