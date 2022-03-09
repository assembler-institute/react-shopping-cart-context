import React, { useContext } from "react";
import { Formik } from "formik";

import { Redirect, Link } from "react-router-dom";
// schema
import { personalFormSchema } from "./formSchemas/formSchemas";

import { CheckoutContext } from "../../../context/CheckoutContext";

// components
import Input from "../../../components/Input";

export function PersonalForm() {
    const { personalInfo, setFormInfo, actualStep } = useContext(CheckoutContext)
    console.log("render: PersonalForm")
    return (
        <section className="mflex mcol malign-center">
            <h1 className="formTitle">Personal information</h1>
            <Formik
                initialValues={{
                    name: personalInfo.name ? personalInfo.name : "",
                    email: personalInfo.email ? personalInfo.email : "",
                    phone: personalInfo.phone ? personalInfo.phone : "",
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
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isValidating,
                    isSubmitting
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
                        <select className="flagSelect">
                            <option value="Spain">+34</option>
                            <option value="Andorra">+376</option>
                            <option value="Germany">+49</option>
                            <option value="United Kingdom">+44</option>
                            <option value="Sweden">+46</option>
                        </select>
                        <Input
                            type="number"
                            name="phone"
                            id="phone"
                            label="Phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasErrorMessage={touched.phone}
                            errorMessage={errors.phone}
                        />

                        <div className="formBtnWrapper">
                            <Link className="link backLink" to="/" >
                                Back home page
                            </Link>

                            <button
                                className="formButton submitForm"
                                type="submit"
                                disabled={isSubmitting || isValidating}
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
