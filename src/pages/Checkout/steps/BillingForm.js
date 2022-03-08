import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"

import { Formik } from "formik"
import * as Yup from "yup"

// components
import Input from "../../../components/Input"
import { CheckoutContext } from "../../../context/CheckoutContext"

const personalFormSchema = Yup.object().shape({
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
        .min("5", "Your country name is too short!")
        .max("50", "Your country name is too long!")
        .required("Please, introudce your country or region")

})

export function BillingForm() {
    const { billingAddress, setFormInfo, actualStep, setStep } = useContext(CheckoutContext)
    const history = useHistory()
    useEffect(() => {
        // Checks if the user refresh the page
        // btw, search other form
        if (actualStep === 1) {
            history.push("/checkout/step-1")
        }
    }, [])
    console.log("render: BillingAddress")
    console.log(actualStep)
    return (
        <section className="mflex mcol malign-center">
            <h1 className="formTitle">Billing address</h1>
            <Formik
                initialValues={{
                    address: billingAddress.address ? billingAddress.address : "",
                    city: billingAddress.city ? billingAddress.city : "",
                    postalCode: billingAddress.postalCode ? billingAddress.postalCode : "",
                    country: billingAddress.country ? billingAddress.country : ""

                }}
                validationSchema={personalFormSchema}

                onSubmit={(values) => {
                    /* send values to reducer */
                    setFormInfo("billingAddress", values)

                }}

            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isValidating,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>

                        <Input
                            type="text"
                            name="address"
                            id="address"
                            label="Address"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasErrorMessage={touched.address}
                            errorMessage={errors.address} />
                        <Input
                            type="text"
                            name="city"
                            id="city"
                            label="City"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasErrorMessage={touched.city}
                            errorMessage={errors.city} />
                        <Input
                            type="number"
                            name="postalCode"
                            id="postalCode"
                            label="Postal Code"
                            value={values.postalCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasErrorMessage={touched.postalCode}
                            errorMessage={errors.postalCode}
                        />
                        <Input
                            type="text"
                            name="country"
                            id="country"
                            label="Country"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasErrorMessage={touched.country}
                            errorMessage={errors.country} />

                        <div className="formBtnWrapper mflex mjustify-between">
                            <button
                                type="button"
                                onClick={() => setStep(actualStep - 1)}
                                className="formButton cancelForm"
                            >
                                Back to account
                            </button>
                            <button
                                className="formButton submitForm"
                                type="submit"
                                disabled={isSubmitting || isValidating}
                            >
                                Payment
                            </button>
                        </div>

                    </form>
                )}
            </Formik>
            {actualStep === 3 && history.push("/checkout/step-3")}
        </section>

    )
}