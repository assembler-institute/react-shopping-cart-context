import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

import "./FormShopping.scss";

import InputShopping from "../InputShopping";

import productSchema from "./product-schema";

function FormShopping({ props, ...routeProps }) {
  const [Url, setUrl] = useState(null);
  useEffect(() => {
    const activeUrl = routeProps.match.path;
    const activeUrlstring = activeUrl.substring(15, 16);
    const activeUrlId = parseInt(activeUrlstring, 16);
    setUrl(activeUrl);
    console.log(activeUrlId);
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: productSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });
  if (Url === 1) {
    return (
      <>
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
          <div className="container">
            <button type="button" className="btnForm">
              Back
            </button>
            <button
              type="button"
              className="btnForm"
              submitButton
              block
              disabled={formik.isValidating || !formik.isValid}
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        {hasSubmitted && <Redirect to="/" />}
      </>
    );
  }
}

export default FormShopping;
