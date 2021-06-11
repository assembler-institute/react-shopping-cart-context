import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { Redirect, Link } from "react-router-dom";
import Cards from "react-credit-cards";

import "./PaymentDetails.scss";

import withLayout from "../../../hoc/withLayout";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import PaymentDetailsSchema from "./PaymentDetailsSchema";

import checkoutContext from "../../../context/checkoutData";

const isCheckout = true;

function PaymentDetails() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { setCheckoutData, state } = useContext(checkoutContext);

  const formik = useFormik({
    initialValues: {
      paymentMethod: state.paymentMethod,
      cardName: state.cardName,
      cardNumber: state.tempData.protectedCardNumber,
      cardExpiryDate: state.cardExpiryDate,
      cvc: state.cvc,
      termsConditions: state.termsConditions,
    },
    validationSchema: PaymentDetailsSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setCheckoutData({
        paymentMethod: values.paymentMethod,
        cardName: values.cardName,
        cardNumber: values.cardNumber,
        cardExpiryDate: values.cardExpiryDate,
        cvc: values.cvc,
        termsConditions: values.termsConditions,
        navBar: 87.5,
        disabledOrderSummary: false,
      });

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      {state.disabledPaymentDetails && <Redirect to="/" />}
      <div className="row mt-5">
        <div className="col col-12">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <h4 className="mb-4">How would you like to pay?</h4>
            </div>
            <div className="row pb-5">
              <div className="col col-4 border rounded">
                <Input
                  type="radio"
                  label="Credit/Debit card"
                  id="paymentMethod"
                  value="Credit/Debit card"
                  placeholder="Credit/Debit card"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  hasErrorMessage={formik.touched.paymentMethod}
                  errorMessage={formik.errors.paymentMethod}
                  className="form-check-input"
                />
                <div className="row">
                  <div className="col col-4 pay-method visa" />
                  <div className="col col-4 pay-method mastercard" />
                  <div className="col col-4 pay-method amex" />
                </div>
              </div>
              <div className="col col-4 border rounded justify-content-center">
                <Input
                  type="radio"
                  label="Paypal"
                  id="paymentMethod"
                  value="Paypal"
                  placeholder="Paypal"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  hasErrorMessage={formik.touched.paymentMethod}
                  errorMessage={formik.errors.paymentMethod}
                  className="form-check-input"
                />
                <div className="col col-12 pay-method paypal" />
              </div>
              <div className="col col-4 border rounded">
                <Input
                  type="radio"
                  label="Apple pay"
                  id="paymentMethod"
                  value="Apple Pay"
                  placeholder="Apple pay"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  hasErrorMessage={formik.touched.paymentMethod}
                  errorMessage={formik.errors.paymentMethod}
                  className="form-check-input"
                />
                <div className="row">
                  <div className="col col-6 pay-method applepay" />
                  <div className="col col-6 pay-method gpay" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-6">
                <Input
                  type="text"
                  label="Card name*"
                  id="cardName"
                  value={formik.values.cardName}
                  placeholder="Card name"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  hasErrorMessage={formik.touched.cardName}
                  errorMessage={formik.errors.cardName}
                />
                <Input
                  type="password"
                  label="Card number*"
                  id="cardNumber"
                  value={formik.values.cardNumber}
                  placeholder="Card number"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  hasErrorMessage={formik.touched.cardNumber}
                  errorMessage={formik.errors.cardNumber}
                />
                <div className="card-inputs row col-12 text-center">
                  <div className="col col-6">
                    <Input
                      type="text"
                      label="Card expiry date*"
                      id="cardExpiryDate"
                      value={formik.values.cardExpiryDate}
                      placeholder="MM/YY"
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      hasErrorMessage={formik.touched.cardExpiryDate}
                      errorMessage={formik.errors.cardExpiryDate}
                    />
                  </div>
                  <div className="col col-6">
                    <Input
                      type="password"
                      label="Card CVC*"
                      id="cvc"
                      value={formik.values.cvc}
                      placeholder="CVC"
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      hasErrorMessage={formik.touched.cvc}
                      errorMessage={formik.errors.cvc}
                    />
                  </div>
                </div>
              </div>
              <div className="col col-6">
                <Cards
                  cvc={state.tempData.cvc ? state.tempData.cvc : state.cvc}
                  expiry={
                    state.tempData.cardExpiryDate
                      ? state.tempData.cardExpiryDate
                      : state.cardExpiryDate
                  }
                  focused={state.cardFocus}
                  name={
                    state.tempData.cardName
                      ? state.tempData.cardName
                      : state.cardName
                  }
                  number={
                    state.tempData.cardNumber
                      ? state.tempData.cardNumber
                      : state.cardNumber
                  }
                />
              </div>
            </div>
            <div className="row">
              <Input
                type="checkbox"
                id="termsConditions"
                label=""
                value={formik.values.termsConditions}
                placeholder="termsConditions"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.termsConditions}
                errorMessage={formik.errors.termsConditions}
              />
              <p>
                I have read and accept the <u>booking conditions</u>,{" "}
                <u>general terms</u> and
                <u> privacy policy</u>.
              </p>
            </div>
            <div className="row">
              <div className="col col-6">
                <Link className="w-100" to="/checkout/step-2">
                  <Button block>Back</Button>
                </Link>
              </div>
              <div className="col col-6">
                <Button
                  submitButton
                  block
                  disabled={formik.isValidating || !formik.isValid}
                >
                  {formik.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </div>
          </form>
          {hasSubmitted && <Redirect to="/checkout/order-summary" />}
        </div>
      </div>
    </>
  );
}

export default withLayout(PaymentDetails, isCheckout);
