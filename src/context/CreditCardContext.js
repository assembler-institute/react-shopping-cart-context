import { createContext } from "react"

// implement type of card :D
export const creditCardContext = createContext({
    cardHolderName: "",
    cardNumber: 0,
    expireDate: "MM/YY",
    cvv: 0
})