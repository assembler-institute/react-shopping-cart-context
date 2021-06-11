import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useFormik } from "formik";
// { useState, useEffect, useContext }
import "./FormShopping.scss";

import ShoppingContext from "../../context/ShoppingContext";

import shippingDetailsFormSchema from "./shippingDetailsFormSchema";

import InputShopping from "../InputShopping";
import ButtonShopping from "../ButtonShopping";
import SelectShopping from "../SelectShopping";

function ShippingDetailsForm() {
  const { shippingDetails, submitStep2 } = useContext(ShoppingContext);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      address: shippingDetails.address,
      city: shippingDetails.city,
      zipCode: shippingDetails.zipCode,
      country: shippingDetails.country,
    },
    validationSchema: shippingDetailsFormSchema,
    onSubmit: (values, { setSubmitting }) => {
      submitStep2(values);
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
        <span>Step 2 of 3</span>
      </div>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <InputShopping
          type="text"
          label="Address:"
          id="address"
          value={formik.values.address}
          placeholder="address..."
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.address}
          errorMessage={formik.errors.address}
        />
        <InputShopping
          type="text"
          label="City: "
          id="city"
          value={formik.values.city}
          placeholder="city..."
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.city}
          errorMessage={formik.errors.city}
        />
        <InputShopping
          type="text"
          label="Code post: "
          id="zipCode"
          value={formik.values.zipCode}
          placeholder="post..."
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.zipCode}
          errorMessage={formik.errors.zipCode}
        />
        <SelectShopping
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.phoneNumber}
          errorMessage={formik.errors.phoneNumber}
        />
        <div className="btn__container">
          <Link to="/checkout/step-1">
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
      {hasSubmitted && <Redirect to="/checkout/step-3" />}
    </section>
  );
}

export default ShippingDetailsForm;
