import { createContext } from "react";

const DetailsContext = createContext({
  name: "",
  email: "",
  tel: "",
});

export default DetailsContext;
