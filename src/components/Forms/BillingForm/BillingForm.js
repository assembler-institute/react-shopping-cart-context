import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";
import formHeader from "../../../hoc/formHeader";

import Input from "../../Input";
import Button from "../../Button";

import clientSchema from "../client-schema";

function addClientDetails(client) {
  return {
    id: uuid(),
    ...client,
    quantity: 0,
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: {
      upVotes: {
        upperLimit: 10,
        currentValue: 0,
      },
      downVotes: {
        lowerLimit: 10,
        currentValue: 0,
      },
    },
    author: {
      id: uuid(),
      ...client.author,
    },
  };
}

function BillingForm({ saveNewClient }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      personalInfo: "",
      clientAdress: "",
      clientCity: "",
      clientZip: "",
      clientCountry: "",
      locationInfo: "",
      clientCardholderName: "",
      clientCardNumber: "",
      clientCardExpiryDate: "",
      clientCardCvvCode: "",
      clientConsent: "",
      billingInfo: "",
    },
    validationSchema: clientSchema,
    onSubmit: (values, { setSubmitting }) => {
      const newClient = addClientDetails(values);
      saveNewClient(newClient);
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
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {hasSubmitted && <Redirect to="/" />}
    </>
  );
}

export default formHeader(BillingForm);
