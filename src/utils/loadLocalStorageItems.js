//function loadLocalStorageItems(storageKey, defaultValue) {

function getLocalStorageItems({prevState, payload:storageKey}) {
    const data = localStorage.getItem(storageKey);

    //const dataParsed=JSON.parse(data);
    const newState=JSON.parse(`{"${storageKey}":"${data}"}`);

  if (data) {
    try {
      return {...prevState, ...newState};
    } catch (error) {
      return prevState;
    }
  } else {
    return prevState;
  }
}

function setLocalStorageItems({prevState, payload:{storageKey, data}}){
  localStorage.setItem(storageKey, JSON.stringify(data));
  return prevState
}

export {getLocalStorageItems, setLocalStorageItems}