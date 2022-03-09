import React, { useContext } from "react"
import { Redirect } from "react-router-dom"

import { Formik } from "formik"
import { billingFormSchema } from "./formSchemas/formSchemas";
// components
import Input, { classNameInputCondition } from "../../../components/Input"
import { CheckoutContext } from "../../../context/CheckoutContext"




export function BillingForm() {
    const { billingAddress, setFormInfo, actualStep, setStep } = useContext(CheckoutContext)
    console.log(billingAddress)
    console.log("render: BillingAddress")
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
                validationSchema={billingFormSchema}

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
                        <div className="selectContainer">
                            <select
                                id="countrySelect"
                                name="country"
                                className={classNameInputCondition(touched.country, errors.country)}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={values.country}
                            >
                                <option value="" >Select country</option>
                                <option value="Spain">Spain</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Germany">Germany</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Sweden">Sweden</option>
                            </select>
                            {errors.country && touched.country &&
                                (<p className="invalid-feedback">{errors.country}</p>)
                            }
                        </div>
                        <div className="formBtnWrapper mflex mjustify-between">
                            <button
                                type="button"
                                onClick={() => setStep(actualStep - 1)}
                                className="mnoButton cancelFormBtn"
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
            {actualStep === 3 && <Redirect to="/checkout/step-3" />}
        </section>

    )
}