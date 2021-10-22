import { useEffect } from "react";

function useLocalStorage(data, storageKey) {
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }, [data]);
}

async function writeLocalStorage(data, storageKey) {
  console.log(data)
  localStorage.setItem(storageKey, JSON.stringify(data));
}

export default useLocalStorage;
