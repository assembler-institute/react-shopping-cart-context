import { createContext } from "react";

const FormContext = createContext({
  data: null,
  setData: () => {},
});

export default FormContext;
