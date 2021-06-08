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
          label="Your Cardholder name*"
          id="clientCardholderName"
          value={formik.values.clientCardholderName}
          placeholder="Insert cardHolder full-name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientCardholderName}
          errorMessage={formik.errors.clientCardholderName}
        />
        <Input
          type="text"
          label="Card expiry date*"
          id="clientCardExpiryDate"
          value={formik.values.clientCardExpiryDate}
          placeholder="Insert card expiry date*"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientCardExpiryDate}
          errorMessage={formik.errors.clientCardExpiryDate}
        />
        <Input
          type="text"
          label="Card number*"
          id="clientCardNumber"
          value={formik.values.clientCardNumber}
          placeholder="Insert card number full-name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientCardNumber}
          errorMessage={formik.errors.clientCardNumber}
        />
        <Input
          type="text"
          label="Card CVV code*"
          id="clientCardCvvCode"
          value={formik.values.clientCardCvvCode}
          placeholder="Insert card CVV code"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientCardCvvCode}
          errorMessage={formik.errors.clientCardCvvCode}
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
