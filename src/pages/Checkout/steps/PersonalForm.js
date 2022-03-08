import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { CheckoutContext } from "../../../context/CheckoutContext";

// components
import Input from "../../../components/Input";


const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const personalFormSchema = Yup.object().shape({
    name: Yup.string()
        .min("3", "Your name is too short!")
        .max("30", "Your name is too long!")
        .required("Please, introduce your name"),
    email: Yup.string()
        .email()
        .required("Please, introduce your email address"),
    phone: Yup.string()
        .matches(phoneRegex, "Phone number not valid")
        .required("Please, introduce your phone number"),

})

export function PersonalForm() {
    const history = useHistory()
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

                        <div className="formBtnWrapper mflex mjustify-between">
                            <button type="button" className="formButton cancelForm">Go back home page</button>
                            <button className="formButton submitForm" type="submit" disabled={isSubmitting || isValidating} >Continue to delivery</button>
                        </div>

                    </form>
                )}
            </Formik>
            {actualStep === 2 && history.push("/checkout/step-2")}
        </section>

    )
}
