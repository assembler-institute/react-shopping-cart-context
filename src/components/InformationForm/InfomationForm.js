import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { useFormik } from "formik";

import Input from "../Input";
import Button from "../Button";

import InformationSchema from "./information-schema";

function InformationForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
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
          label="First Name"
          id="firstName"
          value={formik.values.firstName}
          placeholder="First name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.firstName}
          errorMessage={formik.errors.firstName}
        />
        <Input
          type="text"
          label="Last Name"
          id="lastName"
          value={formik.values.lastName}
          placeholder="Last Name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.lastName}
          errorMessage={formik.errors.lastName}
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
          type="text"
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
          placeholder="Enter country"
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

      {hasSubmitted && <Redirect to="/" />}
    </>
  );
}

export default InformationForm;
