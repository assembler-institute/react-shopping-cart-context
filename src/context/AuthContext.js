import { createContext } from "react";
import loadLocalStorageItems from "../utils/loadLocalStorageItems";

const USERS_LOCAL_STORAGE_KEY = "react-sc-state-users";
const CURRENT_USER_LOCAL_STORAGE_KEY = "react-sc-state-current-user";

const AuthContext = createContext({
  users: loadLocalStorageItems(USERS_LOCAL_STORAGE_KEY, []),
  currentUser: loadLocalStorageItems(CURRENT_USER_LOCAL_STORAGE_KEY, ""),
  login: () => {},
  logout: () => {},
  register: () => {},
});

export default AuthContext;
