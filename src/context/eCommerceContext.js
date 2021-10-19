import { createContext } from "react";

const eCommerce = {
  products: [{}],
  cartItems: [{}],
  updateProducts: () => {},
};

const eCommerceContext = createContext(eCommerce);

export default eCommerceContext;

// Y context toma las variables del reducer y hacer return -> eCommerceContext 