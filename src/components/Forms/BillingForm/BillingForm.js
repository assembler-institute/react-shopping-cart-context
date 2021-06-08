import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import formHeader from "../../../hoc/formHeader";

import Input from "../../Input";
import Button from "../../Button";

import billingSchema from "./billing-schema";

function BillingForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      clientAdress: "",
      clientCity: "",
      clientZip: "",
      clientCountry: "",
      //   locationInfo: "",
    },
    validationSchema: billingSchema,
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
          label="Address*"
          id="clientAdress"
          value={formik.values.clientAdress}
          placeholder="Insert your adress"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientAdress}
          errorMessage={formik.errors.clientAdress}
        />
        <Input
          type="text"
          label="City*"
          id="clientCity"
          value={formik.values.clientCity}
          placeholder="Insert yout city"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientCity}
          errorMessage={formik.errors.clientCity}
        />
        <Input
          type="text"
          label="Zip/post code*"
          id="clientZip"
          value={formik.values.clientZip}
          placeholder="insert your zip/post code number"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientZip}
          errorMessage={formik.errors.clientZip}
        />
        <Input
          type="text"
          label="Country/region*"
          id="clientCountry"
          value={formik.values.clientCountry}
          placeholder="insert your country/region"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientCountry}
          errorMessage={formik.errors.clientCountry}
        />
        <Button
          submitButton
          block
          disabled={formik.isValidating || !formik.isValid}
        >
          {formik.isSubmitting ? "Submitting..." : "Go to Payment"}
        </Button>
      </form>
      {hasSubmitted && <Redirect to="/checkout/step-3" />}
    </>
  );
}

export default formHeader(BillingForm);
