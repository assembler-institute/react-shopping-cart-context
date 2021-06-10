import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useFormik } from "formik";
// { useState, useEffect, useContext }
import "./FormShopping.scss";

import ShoppingContext from "../../context/ShoppingContext";

import personalDetailsFormSchema from "./personalDetailsFormSchema";

import InputShopping from "../InputShopping";
import ButtonShopping from "../ButtonShopping";
import Select2Shopping from "../Select2Shopping";

function PersonalDetailsForm() {
  const { personalDetails, submitStep1 } = useContext(ShoppingContext);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: personalDetails.name,
      email: personalDetails.email,
      phoneNumber: personalDetails.phoneNumber,
      countryPrefix: personalDetails.countryPrefix,
    },
    validationSchema: personalDetailsFormSchema,
    onSubmit: (values, { setSubmitting }) => {
      submitStep1(values);
      setSubmitting(true);

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <section className="form__container">
      <div className="headerPage">
        <h2>Billing address</h2>
        <span>Step 1 of 3</span>
      </div>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <InputShopping
          type="text"
          label="Your Name:"
          id="name"
          value={formik.values.name}
          placeholder="name..."
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.name}
          errorMessage={formik.errors.name}
        />
        <InputShopping
          type="email"
          label="Email address"
          id="email"
          value={formik.values.email}
          placeholder="email..."
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <Select2Shopping
          type="text"
          label="Phone number:"
          id="phoneNumber"
          value={formik.values.phoneNumber}
          placeholder="phone number..."
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.phoneNumber}
          errorMessage={formik.errors.phoneNumber}
        />
        <div className="btn__container">
          <Link to="/">
            <ButtonShopping type="button">back</ButtonShopping>
          </Link>
          <ButtonShopping
            // type="button"
            submitButton
            // block
            disabled={formik.isValidating || !formik.isValid}
          >
            {formik.isSubmitting ? "Submitting..." : "next"}
          </ButtonShopping>
        </div>
      </form>
      {hasSubmitted && <Redirect to="/checkout/step-2" />}
    </section>
  );
}

export default PersonalDetailsForm;
