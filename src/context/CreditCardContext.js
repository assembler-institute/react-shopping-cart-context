import { createContext } from "react"

// implement type of card :D
export const CreditCardContext = createContext({
    cardType: "",
    cardHolderName: "",
    cardNumber: "**** **** **** ****",
    expireDate: "MM/YY",
    cvv: "***",
    flippedCard: false
})