import { createContext } from "react";

export const CheckoutContext = createContext({
    setFormInfo: () => { },
    setStep: () => { },
    personalInfo: {},
    billingAddress: {},
    payment: {
        cardNumber: 0
    },
    actualStep: 1
})