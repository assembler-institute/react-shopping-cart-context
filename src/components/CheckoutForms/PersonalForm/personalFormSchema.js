import * as Yup from "yup"

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