import { createContext } from "react";

export const CheckoutContext = createContext({
    setFormInfo: () => { },
    setStep: () => { },
    personalInfo: {},
    billingAddress: {},
    payment: {},
    actualStep: 1
})