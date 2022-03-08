import { createContext } from "react";

export const CheckoutContext = createContext({
    handleSteps: () => { },
    userInfo: {}
})