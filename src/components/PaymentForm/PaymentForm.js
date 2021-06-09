import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { useFormik } from "formik";

import Input from "../Input";
import Button from "../Button";
import Radio from "../Radio";
import paymentSchema from "./payment-schema";

import {
  PaypalIcon,
  ApplePayIcon,
  VisaCardIcon,
  MasterCardIcon,
  AmexCardIcon,
  CardImage,
} from "../SVGIcons";

import "./PaymentForm.scss";

function PaymentForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      payMethod: "",
      cardHolderName: "",
      cardNumber: "",
      expiryDate: "",
      cvvCode: "",
      termCheck: false,
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
    <div className="PaymentForm">
      <form onSubmit={formik.handleSubmit}>
        <p>
          <strong>How would you like to pay?</strong>
        </p>
        <div className="d-flex justify-content-between">
          <div className="PaymentForm__method form-check form-check-inline bg-light p-3">
            <Radio
              className="form-check-input"
              type="radio"
              name="payMethod"
              id="inlineRadio1"
              label="Credit/Debit Card"
              value="Credit Card"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.payMethod}
              errorMessage={formik.errors.payMethod}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          </div>
          <div className="PaymentForm__method form-check form-check-inline bg-light pt-2 pl-3">
            <Radio
              className="form-check-input"
              type="radio"
              name="payMethod"
              id="inlineRadio2"
              label={<PaypalIcon />}
              value="Paypal"
              onChange={(e) => formik.handleChange(e)}
              onBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.payMethod}
              errorMessage={formik.errors.payMethod}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            {/* <label className="form-check-label" htmlFor="inlineRadio2">
              <PaypalIcon />
            </label> */}
          </div>

          <div className="PaymentForm__method form-check form-check-inline bg-light pt-2 pl-3">
            <Radio
              className="form-check-input"
              type="radio"
              name="payMethod"
              id="inlineRadio3"
              label={<ApplePayIcon />}
              value="Apple Pay"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.payMethod}
              errorMessage={formik.errors.payMethod}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            {/* <label className="form-check-label" htmlFor="inlineRadio3">
              <ApplePayIcon />
            </label> */}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-secondary">
            We accept the following debit/credit cards
          </p>
          <div className="d-flex">
            <div className="PaymentForm__cardIcon bg-light pr-1 pl-1 mr-1">
              <VisaCardIcon />
            </div>
            <div className="PaymentForm__cardIcon align-self-center bg-light pr-1 pl-1 mr-1">
              <MasterCardIcon />
            </div>
            <div className="PaymentForm__cardIcon align-self-center bg-light pr-1 pl-1">
              <AmexCardIcon />
            </div>
          </div>
          <div>
            <div className="PaymentForm__creditCard d-flex flex-row">
              <div className="col mt-2 mr-2 pl-0">
                <div>
                  <Input
                    type="text"
                    name="cardHolderName"
                    placeholder="Cardholder Name"
                    id="cardHolderName"
                    label="Cardholder Name"
                    value={formik.values.cardHolderName}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.cardHolderName}
                    errorMessage={formik.errors.cardHolderName}
                  />
                  <Input
                    type="tel"
                    name="cardNumber"
                    id="cardNumber"
                    label="Card Number"
                    placeholder="Card Number"
                    value={formik.values.cardNumber}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.cardNumber}
                    errorMessage={formik.errors.cardNumber}
                  />
                </div>
                <div className="d-flex flex-row">
                  <div className="mr-3">
                    <Input
                      type="tel"
                      name="expiryDate"
                      id="expiryDate"
                      label="Expiry"
                      placeholder="MM/YY"
                      value={formik.values.expiryDate}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      hasErrorMessage={formik.touched.expiryDate}
                      errorMessage={formik.errors.expiryDate}
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="cvvCode"
                      id="cvvCode"
                      label="CVV"
                      placeholder="cvc/cvv"
                      value={formik.values.cvvCode}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      hasErrorMessage={formik.touched.cvvCode}
                      errorMessage={formik.errors.cvvCode}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <CardImage />
              </div>
            </div>
            <div className="Payment__checkbox form-check form-check-inline p-3">
              <Radio
                className="form-check-input mb-0"
                type="checkbox"
                name="termCheck"
                id="termCheck"
                label="I have read and I accept the conditions"
                value={formik.values.termCheck}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.termCheck}
                errorMessage={formik.errors.termCheck}
                checked={formik.values.termCheck}
              />
            </div>
          </div>
        </div>
        <Button
          submitButton
          block
          disabled={formik.isValidating || !formik.isValid}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {hasSubmitted && <Redirect to="/checkout/order-summary" />}
    </div>
  );
}

export default PaymentForm;
