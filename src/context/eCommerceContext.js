import { createContext } from "react";
import { dispatch, state } from "../store/EcommerceReducer";

const eCommerceContext = createContext();

export default function EcommerceContextProvider({children}) {
  return (
    <eCommerceContext.Provider value={state, dispatch}>
      {children}
    </eCommerceContext.Provider>
  )
}

// Y context toma las variables del reducer y hacer return -> eCommerceContext 