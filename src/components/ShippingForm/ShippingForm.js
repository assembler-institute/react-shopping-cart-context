import React, { useState } from "react";

import { useFormik } from "formik";
import { Redirect } from "react-router-dom";

import ShippingSchema from "./shipping-schema";
import Input from "../Input";
import Button from "../Button";

function ShippingForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      addressOne: "",
      addressTwo: "",
      zipCode: "",
      country: "",
      state: "",
      city: "",
    },
    validationSchema: ShippingSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          label="Address 1"
          id="addressOne"
          value={formik.values.addressOne}
          placeholder="Input address"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.addressOne}
          errorMessage={formik.errors.addressOne}
        />
        <Input
          type="text"
          label="Address 2"
          id="addressTwo"
          value={formik.values.addressTwo}
          placeholder="Input second address"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.addressTwo}
          errorMessage={formik.errors.addressTwo}
        />
        <Input
          type="number"
          label="Zip code"
          id="zipCode"
          value={formik.values.zipCode}
          placeholder="Enter zipcode"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.zipCode}
          errorMessage={formik.errors.zipCode}
        />
        <Input
          type="text"
          label="Country"
          id="country"
          value={formik.values.country}
          placeholder="Enter coutry"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.country}
          errorMessage={formik.errors.country}
        />
        <Input
          type="text"
          label="State"
          id="state"
          value={formik.values.state}
          placeholder="Enter state"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.state}
          errorMessage={formik.errors.state}
        />
        <Input
          type="text"
          label="City"
          id="city"
          value={formik.values.city}
          placeholder="Enter city"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.city}
          errorMessage={formik.errors.city}
        />
        <Button
          submitButton
          block
          disabled={formik.isValidating || !formik.isValid}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {hasSubmitted && <Redirect to="/checkout/step-3" />}
    </>
  );
}

export default ShippingForm;
