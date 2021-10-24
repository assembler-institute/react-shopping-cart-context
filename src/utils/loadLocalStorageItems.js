// function loadLocalStorageItems(storageKey, defaultValue) {

function getLocalStorageItems({ prevState, payload: storageKey }) {
  // eslint-disable-next-line
  console.log("voy a cargar los prodcutos");
  const data = localStorage.getItem(storageKey);
  // eslint-disable-next-line
  console.log(data, "data obtenida de localStorage");
  // const dataParsed=JSON.parse(data);
  const newState = JSON.parse(`{"${storageKey}":"${data}"}`);

  if (data) {
    try {
      return { ...prevState, ...newState };
    } catch (error) {
      return prevState;
    }
  } else {
    return prevState;
  }
}

function setLocalStorageItems({ prevState, payload: { storageKey, data } }) {
  // eslint-disable-next-line
  console.log("im the storageKey", storageKey);
  localStorage.setItem(storageKey, JSON.stringify(data));
  return prevState;
}

export { getLocalStorageItems, setLocalStorageItems };
