import * as Yup from "yup"

export const paymentFormSchema = Yup.object().shape({
    method: Yup.string()
        .required("First, introduce a method"),
    creditCard: Yup.string()
        .when("method", {
            is: "credit",
            then: schema => schema.required("Introduce your card"),
        }),
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