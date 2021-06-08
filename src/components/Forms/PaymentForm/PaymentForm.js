import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import formHeader from "../../../hoc/formHeader";

import Input from "../../Input";
import Button from "../../Button";

import paymentSchema from "./payment-schema";

import Applepay from "../../../img/Apple-pay.svg";
import Paypal from "../../../img/paypal.svg";

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
        <div className="d-flex justify-content-between">
          <label
            htmlFor="creditCardPay"
            className="d-flex align-items-center border rounded p-2 "
          >
            <input
              type="radio"
              name="picked"
              id="creditCardPay"
              className="mr-2"
            />
            Credit/Debit Card
          </label>
          <label
            htmlFor="paypal"
            className="d-flex align-items-center border rounded p-2 w-25"
          >
            <input type="radio" name="picked" id="paypal" className="mr-2" />
            <img src={Paypal} alt="Paypal" style={{ width: "100%" }} />
          </label>
          <label
            htmlFor="applepay"
            className="d-flex align-items-center border rounded p-2 w-25"
          >
            <input type="radio" name="picked" id="applepay" className="mr-2" />
            <img src={Applepay} alt="Apple pay" style={{ width: "100%" }} />
          </label>
        </div>
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
