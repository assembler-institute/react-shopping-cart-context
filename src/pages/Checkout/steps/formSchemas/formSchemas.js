import * as Yup from "yup"

// import { phoneRegex } from "../../../../helper/regex";

export const personalFormSchema = Yup.object().shape({
    name: Yup.string()
        .min("3", "Your name is too short!")
        .max("30", "Your name is too long!")
        .required("Please, introduce your name"),
    email: Yup.string()
        .email()
        .required("Please, introduce your email address"),
    phone: Yup.string()
        .required("Please, introduce your phone number"),
    country: Yup.string()
        .required("Please, select country!")

})

export const billingFormSchema = Yup.object().shape({
    address: Yup.string()
        .min("3", "Your address is too short!")
        .max("40", "Your address is too long!")
        .required("Please, introduce your address"),
    city: Yup.string()
        .min("3", "Your city is too short!")
        .max("20", "Your city is too long!")
        .required("Please, introduce your city"),
    postalCode: Yup.number()
        .min(4, "Your postal code is invalid")
        .required("Please, write your postal code"),
    country: Yup.string()
        .required("Please, introudce your country or region")

})
export const paymentFormSchema = Yup.object().shape({
    method: Yup.string()
        .required("First, introduce a method"),
    creditCard: Yup.string()
        .when("method", {
            is: "credit",
            then: schema => schema.required("Introduce your card"),
        })

    ,
    cardHolderName: Yup.string()
        .min("5", "Your card name it's too short!")
        .required("Introduce the name of your credit card"),
    cardNumber: Yup.string()
        .matches(/^[0-9\s]*$/, "Introduce your card NUMBER!")
        .min("19", "Introduce the 16 characters")
        .max("19", "You have to enter max 16 characters")
        .required("Introduce your card number to continue"),
    expireDate: Yup.string()
        .matches(/^(0[1-9]|1[0-2])\/[2][2-9]$/, "Expire date should be between year 22-29")
        .min("5", "Your expire date it's incorrect")
        .required("Introduce your expire date to continue"),
    cvv: Yup.string()
        .matches(/^[0-9\s]*$/, "You have to introduce numbers")
        .min("3", "You have to introduce 3 numbers")
        .required("Introduce your cvv to continue"),
    conditions: Yup.boolean()

        .oneOf([true], "You have to accept the terms and conditions")
        .required()
})
