import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

import UserSchema from "./User-schema";
import "./userFormStyle.scss";
import Input from "../Input";
import Button from "../Button";
import { useUsers } from "../Context/UserContext";
import { Redirect } from "react-router";
import Breadcrumbs from "../Breadcrumbs";

function UserForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { name, email, phone, countryCode, saveUser } = useUsers();

  const formik = useFormik({
    initialValues: {
      name: name,
      email: email,
      phone: phone,
      countryCode: countryCode,
    },
    validationSchema: UserSchema,
    onSubmit: (values, { setSubmitting }) => {
      saveUser(values);
      setSubmitting(true);

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <div className="col">
        <Breadcrumbs active="info"/>
       {/*  <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              Information
            </li>
          </ol>
        </nav> */}

        <div className="d-flex justify-content-between">
          <div>
            <b>User Information</b>
          </div>
          <div>Step 1 of 4</div>
        </div>
        <hr />
        <div>
          <form onSubmit={formik.handleSubmit} id="userForm">
            <Input
              type="text"
              label="Name"
              id="name"
              name="name"
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
              name="email"
              value={formik.values.email}
              placeholder="Your email address"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.email}
              errorMessage={formik.errors.email}
            />

            <label htmlFor="phone">Phone number</label>
            <div className="row align-items-center">
              <select
                name="countryCode"
                id="countryCode"
                onChange={formik.handleChange}
              >
                <option value="+34">Spain</option>
                <option value="+39">Italy</option>
                <option value="+49">Germany</option>
                <option value="+33">France</option>
              </select>
              <Input
                id="phone"
                name="phone"
                label=""
                type="text"
                placeholder="Your phone number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.phone}
                errorMessage={formik.errors.phone}
              />
            </div>
            <Button
              submitButton
              /* block */
              disabled={formik.isValidating || !formik.isValid}
            >
              {formik.isSubmitting
                ? "Submitting..."
                : "Continue to Billing Address"}
            </Button>
          </form>

          {hasSubmitted && <Redirect to="/checkout/step-2" />}
        </div>
      </div>
    </>
  );
}

export default UserForm;
