import { createContext } from "react";

export const OverviewContext = createContext({
    cartItems: [],
    handleRemove: () => { },
    handleChange: () => { }
})