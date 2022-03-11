import { createContext } from "react";

export const OverviewContext = createContext({
    handleRemove: () => { },
    handleChange: () => { },
    setCartItems: () => { },
    subTotal: "",
    cartItems: [],
    shippingCost: 0,
    taxes: 0
})