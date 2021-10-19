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



// Terminar de revisar los parametros de la función
function setLocalStorageItems({prevState, payload}){
  localStorage.setItem(payload.storageKey, JSON.stringify(payload.data));

  return {...prevState, }
}

export {getLocalStorageItems, setLocalStorageItems}