import { createContext } from "react";

export const CheckoutContext = createContext({
    setFormInfo: () => { },
    setStep: () => { },
    setCheckoutDone: () => { },
    personalInfo: {},
    billingAddress: {},
    payment: {
        cardNumber: 0
    },
    actualStep: 1
})