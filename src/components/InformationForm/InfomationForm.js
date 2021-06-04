import React, { useState } from "react";

import { useFormik } from "formik";
import { Redirect } from "react-router-dom";

import InformationSchema from "./information-schema";
import Input from "../Input";
import Button from "../Button";

function InformationForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      addressOne: "",
      addressTwo: "",
      zipCode: "",
      country: "",
      state: "",
      city: "",
    },
    validationSchema: InformationSchema,
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
          label="Name"
          id="firstName"
          value={formik.values.name}
          placeholder="First name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.name}
          errorMessage={formik.errors.name}
        />
        <Input
          type="text"
          label="Name"
          id="LastName"
          value={formik.values.name}
          placeholder="Last name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.name}
          errorMessage={formik.errors.name}
        />
        <Input
          type="tel"
          label="Phone Number"
          id="phone"
          value={formik.values.phone}
          placeholder="Phone Number"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.phone}
          errorMessage={formik.errors.phone}
        />
        <Input
          type="email"
          label="Email"
          id="email"
          value={formik.values.email}
          placeholder="Email"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <Input
          type="text"
          label="Address 1"
          id="addressOne"
          value={formik.values.email}
          placeholder="Input address"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <Input
          type="text"
          label="Address 2"
          id="addressTwo"
          value={formik.values.email}
          placeholder="Input second address"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <Input
          type="number"
          label="Zip code"
          id="zipCode"
          value={formik.values.email}
          placeholder="Enter zipcode"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <Input
          type="text"
          label="Country"
          id="country"
          value={formik.values.email}
          placeholder="Enter coutry"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <Input
          type="text"
          label="State"
          id="state"
          value={formik.values.email}
          placeholder="Enter state"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <Input
          type="text"
          label="City"
          id="city"
          value={formik.values.email}
          placeholder="Enter city"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <Button
          submitButton
          block
          disabled={formik.isValidating || !formik.isValid}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {hasSubmitted && <Redirect to="/" />}
    </>
  );
}

export default InformationForm;
