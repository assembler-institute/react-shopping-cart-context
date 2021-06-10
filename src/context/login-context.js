import { createContext } from "react";

const LoginContext = createContext({
  data: null,
  setData: () => {},
});

export default LoginContext;
