import { createContext } from "react";

const eCommerce = {
  products: [{}],
  cartItems: [{}],
  updateProducts: () => {},
};

const eCommerceContext = createContext(eCommerce);

export default eCommerceContext;
