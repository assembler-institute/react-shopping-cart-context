import React, { useReducer } from "react";

import AuthContext from "../../context/AuthContext";

import loadLocalStorageItems from "../../utils/loadLocalStorageItems";
import useLocalStorage from "../../hooks/useLocalStorage";

const USERS_LOCAL_STORAGE_KEY = "react-sc-state-users";
const CURRENT_USER_LOCAL_STORAGE_KEY = "react-sc-state-current-user";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";

const authInitialState = {
  users: loadLocalStorageItems(USERS_LOCAL_STORAGE_KEY, []),
  currentUser: loadLocalStorageItems(CURRENT_USER_LOCAL_STORAGE_KEY, ""),
};

function authReducer(state, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        currentUser: "",
      };
    }
    case REGISTER: {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}

function AuthContextProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  useLocalStorage(authState.users, USERS_LOCAL_STORAGE_KEY);
  useLocalStorage(authState.currentUser, CURRENT_USER_LOCAL_STORAGE_KEY);

  function login(username) {
    dispatch({
      type: LOGIN,
      payload: username,
    });
  }

  function logout() {
    dispatch({
      type: LOGOUT,
    });
  }

  function register(username, password) {
    dispatch({
      type: REGISTER,
      payload: { username: username, password: password },
    });
  }

  return (
    <AuthContext.Provider
      value={{
        auth: authState,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
