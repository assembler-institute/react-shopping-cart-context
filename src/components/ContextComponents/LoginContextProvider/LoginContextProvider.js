import React, { useReducer } from "react";

import LoginContext from "../../../context/login-context";

import useLocalStorage from "../../../hooks/useLocalStorage";

import loadLocalStorageItems from "../../../utils/loadLocalStorageItems";

// Local storage key
const LOGIN_LOCAL_STORAGE_KEY = "react-sc-state-login";

// Dispatch case
const UPDATE_LOGIN = "UPDATED_LOGIN";

const initialState = loadLocalStorageItems(LOGIN_LOCAL_STORAGE_KEY, {
  loginName: "",
  loginPassword: "",
  isLogged: false,
});

function reducerLogin(state, action) {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

function CartContextProvider({ children }) {
  const [loginData, dispatch] = useReducer(reducerLogin, initialState);
  const { loginName, loginPassword, isLogged } = loginData;

  useLocalStorage(
    { loginName, loginPassword, isLogged },
    LOGIN_LOCAL_STORAGE_KEY,
  );

  // Method
  function updateLoginData(newData) {
    dispatch({ type: UPDATE_LOGIN, payload: newData });
  }

  return (
    <LoginContext.Provider
      value={{
        data: loginData,
        setData: updateLoginData,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default CartContextProvider;
