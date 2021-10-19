//function loadLocalStorageItems(storageKey, defaultValue) {

  function getLocalStorageItems({prevState, payload:storageKey}) {
    const data = localStorage.getItem(storageKey);

    //const dataParsed=JSON.parse(data);
    const newState=JSON.parse(`{"${storageKey}":"${data}"}`);

  if (data) {
    try {
      return {...prevState, ...newState };
    } catch (error) {
      return prevState;
    }
  } else {
    return prevState;
  }
}




function setLocalStorageItems({prevState, payload:storageKey}){

  localStorage.setItem(storageKey, JSON.stringify(prevState));


return
}



export {getLocalStorageItems, setLocalStorageItems}