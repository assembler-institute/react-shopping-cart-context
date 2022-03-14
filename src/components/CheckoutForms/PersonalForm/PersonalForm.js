import React, { useContext } from "react";
import { Formik } from "formik";
import { Redirect, Link } from "react-router-dom";
// schema
import PhoneInput from 'react-phone-input-2'
import { personalFormSchema } from "./personalFormSchema";

import { CheckoutContext } from "../../../context/CheckoutContext";

// components
import Input from "../../Input";
// input phone
import 'react-phone-input-2/lib/style.css'

export function PersonalForm() {
    const { personalInfo, setFormInfo, actualStep } = useContext(CheckoutContext)
    return (
        <section className="mflex mcol malign-center">
            <h1 className="formTitle">Personal information</h1>
            <Formik
                initialValues={{
                    name: personalInfo.name ? personalInfo.name : "",
                    email: personalInfo.email ? personalInfo.email : "",
                    phone: personalInfo.phone ? personalInfo.phone : "",
                    country: personalInfo.country ? personalInfo.country : ""
                }}
                validationSchema={personalFormSchema}

                onSubmit={(values) => {
                    /* send values to reducer */
                    setFormInfo("personalInfo", values)

                }}

            >
                {({
                    values,
                    errors,
                    touched,
                    setValues,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>

                        <Input
                            type="text"
                            name="name"
                            id="name"
                            label="Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasErrorMessage={touched.name}
                            errorMessage={errors.name} />
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            label="Email"
                            value={values.email}

                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasErrorMessage={touched.email}
                            errorMessage={errors.email} />

                        <PhoneInput
                            defaultCountry={values.country}
                            id="phone"
                            className="phoneInput"
                            placeholder="Introduce your phone!"
                            value={personalInfo.phone}
                            onChange={(phone, country) => (
                                setValues({
                                    ...values,
                                    phone: phone,
                                    country: country.name
                                })
                            )}
                        />
                        {errors.phone && touched.phone
                            && <p className="text-danger">
                                {errors.phone}
                            </p>}

                        <div className="formBtnWrapper">
                            <Link className="link backLink" to="/" >
                                Back home page
                            </Link>

                            <button
                                className="formButton submitForm"
                                type="submit"
                            >
                                Continue to delivery
                            </button>
                        </div>

                    </form>
                )}
            </Formik>
            {actualStep === 2 && <Redirect to="/checkout/step-2" />}
        </section >

    )
}
