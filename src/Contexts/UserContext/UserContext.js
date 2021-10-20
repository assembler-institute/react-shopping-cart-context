import React, { createContext } from "react";


const userContext = createContext ({
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
    saveUser: ()=>{},
    saveAddress: ()=>{},
    savePayment: ()=>{},
})

export default userContext



