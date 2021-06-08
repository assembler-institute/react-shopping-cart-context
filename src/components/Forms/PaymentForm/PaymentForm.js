import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import formHeader from "../../../hoc/formHeader";

import Input from "../../Input";
import Button from "../../Button";

import paymentSchema from "./payment-schema";

function PaymentForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      clientCardholderName: "",
      clientCardNumber: "",
      clientCardExpiryDate: "",
      clientCardCvvCode: "",
      clientConsent: "",
      // billingInfo: "",
    },
    validationSchema: paymentSchema,
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
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="creditCardPay" className="border">
          Hello
          <Input type="radio" name="picked" id="creditCardPay" />
        </label>
        {/* <Input type="radio" label="Credit/Debit Card" id="creditCardPay" />
        <Input type="radio" label="Paypal" id="creditCardPay" />
        <Input type="radio" label="Pay" id="creditCardPay" /> */}
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
          {formik.isSubmitting ? "Submitting..." : "Review your order"}
        </Button>
      </form>
      {hasSubmitted && <Redirect to="/checkout/summary-order" />}
    </>
  );
}

export default formHeader(PaymentForm);
