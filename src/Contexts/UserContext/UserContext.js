import React, { createContext } from "react";

const initUserValues = {
    completed: false,
    name: "",
    email: "",
    countryCode: "+34",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "Spain",
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    acceptedTerms: false,
}

const userContext = createContext(initUserValues)

export default userContext

