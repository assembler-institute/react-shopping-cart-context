import React, { useContext } from "react";
import { useFormik } from "formik";

import UserSchema from "./User-schema"
import userContext from "../../Contexts/UserContext"
import Input from "../Input";
import  Button from "../Button";


function UserForm(){
    const { name, email, phone, saveUser } = useContext(userContext);

    const formik = useFormik({
        initialValues: {
            name: name,
            email: email,
            phone: phone,
        },
        validationSchema: UserSchema,
        handleSubmit: (values, { setSubmitting }) => {
            updateFormData(values);
            setSubmitting(true);
            setTimeout(() => {
            saveUser(({ ...prev }) => ({
                ...prev,
                completed: true,
            }));
            setHasSubmitted(true);
            console.log(user)
            }, 500);
        },
        
    })
    
    return(
        <div className="col">
            <div>
                <h2>User Information</h2>
            </div>
            <hr/>
            <div>
            <form onSubmit={formik.handleSubmit} id="userForm">
                <Input
                    type="text"
                    label="Name"
                    id="name"
                    value={formik.values.name}
                    placeholder="Your name"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.name}
                    errorMessage={formik.errors.name}
                    
                />
                <Input
                    type="text"
                    label="Email"
                    id="email"
                    value={formik.values.email}
                    placeholder="Your email address"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.email}
                    errorMessage={formik.errors.email}
                    
                />

                <span>Phone number</span>
                <div>
                <select
                className="countryCode"
                onChange={(value) => formik.setFieldValue("countryCode", value.value)}>
                    <option value="+34">Spain</option>
                    <option value="+39">Italy</option>
                    <option value="+49">Germany</option>
                    <option value="+33">France</option>
                </select>
                <label htmlFor="phone">
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Your phone number"
                    className="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                </label>
                </div>
                <Button
                    submitButton
                    block
                    disabled={formik.isValidating || !formik.isValid}
                >
                {formik.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
            </form>
            </div>
        </div>
    )
}

export default UserForm