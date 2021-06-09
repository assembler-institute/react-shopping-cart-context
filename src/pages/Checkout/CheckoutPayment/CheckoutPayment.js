/* eslint-disable react/self-closing-comp */
import React, { useEffect, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";

import FormContext from "../../../context/form-context";

// import Input from "../../../components/Input";
import PaymentMethod from "../../../components/PaymentMethod";
import CardForm from "../../../components/PaymentForms/CardForm";
import EmailForm from "../../../components/PaymentForms/EmailForm";
import Button from "../../../components/Button";

import { HOME_URL, PROFILE_URL } from "../../../utils/constants";

import "../Checkout.scss";

import { formPayment } from "../form-schema";

// Image routes
import payPal from "../../../img/payment/paypal-logo.svg";
import applePay from "../../../img/payment/apple_pay-logo.svg";
import visa from "../../../img/payment/visa-logo.svg";
import masterCard from "../../../img/payment/mastercard-logo.svg";
import americanExp from "../../../img/payment/american_express-logo.svg";

const CARD_PAY = "CARD_PAY";
const PAYPAL_PAY = "PAYPAL_PAY";
const APPLE_PAY = "APPLE_PAY";

function CheckoutPayment() {
  const { data: formData, setData: updateFormData } = useContext(FormContext);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [payment, setPaymentMethod] = useState(CARD_PAY);

  const formik = useFormik({
    initialValues: {
      paymentMethod: formData.paymentMethod,
      cardName: formData.cardName,
      cardNumber: formData.cardNumber,
      cardDate: formData.cardDate,
      cardCVV: formData.cardCVV,
      cardTerms: formData.cardTerms,
      "payPal.payPalUser": formData.payPal.payPalUser,
      "payPal.payPalPassword": formData.payPal.payPalPassword,
      "applePay.applePayUser": formData.applePay.applePayUser,
      "applePay.applePayPassword": formData.applePay.applePayPassword,
    },
    validationSchema: formPayment,
    onSubmit: (values, { setSubmitting }) => {
      updateFormData(values);
      setSubmitting(true);
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  useEffect(() => {
    console.log("Changed method ", formik.values.paymentMethod);
    if (formik.values.paymentMethod === "card-method") {
      setPaymentMethod(CARD_PAY);
    } else if (formik.values.paymentMethod === "paypal-method") {
      setPaymentMethod(PAYPAL_PAY);
    } else if (formik.values.paymentMethod === "apple-method") {
      setPaymentMethod(APPLE_PAY);
    }
  }, [formik.values.paymentMethod]);

  return (
    <>
      <div className="col col-8">
        {/* TOP PART */}
        <div className="step-top">
          <div className="d-flex justify-content-between align-items-end">
            <h4 className="step-title">Payment details</h4>
            <h5 className="step-subtitle">Step 3 of 3</h5>
          </div>
          <hr />
        </div>
        {/* BOTTOM PART */}
        <div className="step-bottom d-flex flex-column">
          <p>How would you like to pay?</p>
          <div className="payment-methods d-flex justify-content-between mb-4">
            <PaymentMethod
              id="card-method"
              text="Credit/Debit Card"
              value={formik.values.paymentMethod}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <PaymentMethod
              id="paypal-method"
              src={payPal}
              value={formik.values.paymentMethod}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <PaymentMethod
              id="apple-method"
              src={applePay}
              value={formik.values.paymentMethod}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
          </div>
          <div className="accepted-methods mb-4">
            <p>We accept the following credit/debit card</p>
            <div className="accepted-methods-logos">
              <img className="card-method" src={visa} alt="visa logo" />
              <img
                className="card-method"
                src={masterCard}
                alt="mastercard logo"
              />
              <img
                className="card-method"
                src={americanExp}
                alt="american express logo"
              />
            </div>
          </div>
          <div className="form-and-card d-flex mb-4">
            {payment === CARD_PAY && <CardForm formik={formik} />}
            {payment === PAYPAL_PAY && <EmailForm formik={formik} isPaypal />}
            {payment === APPLE_PAY && <EmailForm formik={formik} />}
            <div className="card-illustration" />
          </div>
          <div className="card-terms">
            <div className="checkbox-terms">
              <p>
                I have read and accept the booking conditions, general terms and
                privacy policy.
              </p>
            </div>
            <div className="description-terms">
              <p>
                We use secure SSL transmission and encrypted storage to protect
                your personal information.
              </p>
            </div>
          </div>
        </div>

        <Link to={PROFILE_URL}>
          <Button>Profile</Button>
        </Link>
        <Button
          submitButton
          form="paymentForm"
          disabled={formik.isValidating || !formik.isValid}
        >
          {formik.isSubmitting ? "Going to summary..." : "Summary"}
        </Button>

        {hasSubmitted && <Redirect to={HOME_URL} />}
      </div>
    </>
  );
}

export default CheckoutPayment;
