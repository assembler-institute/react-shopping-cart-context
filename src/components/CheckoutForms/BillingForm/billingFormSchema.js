import * as Yup from "yup"

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