import { createContext } from "react";
import reducer from "../store/EcommerceReducer";

const eCommerce = {
  products: [{}],
  cartItems: [{}],
  updateProducts: () => {},
};

const eCommerceContext = createContext(eCommerce);

export default function EcommerceContextProvider({children}) {
  return (
    <eCommerceContext.Provider value={reducer}>
      {children}
    </eCommerceContext.Provider>
  )
}

// Y context toma las variables del reducer y hacer return -> eCommerceContext 