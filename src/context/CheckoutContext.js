import { createContext } from "react";

export const CheckoutContext = createContext({
    cartItems: [],
    handleRemove: () => { },
    handleChange: () => { }
})