/* eslint-disable react/self-closing-comp */
import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";

import FormContext from "../../../context/form-context";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { HOME_URL, PROFILE_URL } from "../../../utils/constants";

import "../Checkout.scss";

import { formPayment } from "../form-schema";

// Image routes
import visa from "../../../img/payment/visa-logo.svg";
import masterCard from "../../../img/payment/mastercard-logo.svg";
import americanExp from "../../../img/payment/american_express-logo.svg";

function CheckoutPayment() {
  const { data: formData, setData: updateFormData } = useContext(FormContext);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formikPayment = useFormik({
    initialValues: {
      paymentMethod: formData.paymentMethod,
      cardName: formData.cardName,
      cardNumber: formData.cardNumber,
      cardDate: formData.cardDate,
      cardCVV: formData.cardCVV,
      cardTerms: formData.cardTerms,
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
          <div className="payment-methods d-flex justify-content-between mb-4" />
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
            <form
              className="container-fluid d-flex flex-wrap px-0 mr-4"
              onSubmit={formikPayment.handleSubmit}
            >
              <Input
                type="text"
                label="Cardholder name"
                id="cardholder-name"
                value={formikPayment.values.cardName}
                placeholder="Name"
                handleChange={formikPayment.handleChange}
                handleBlur={formikPayment.handleBlur}
                hasErrorMessage={formikPayment.touched.cardName}
                errorMessage={formikPayment.errors.cardName}
              />
              <Input
                type="text"
                label="Card number"
                id="card-number"
                value={formikPayment.values.cardNumber}
                placeholder="XXXX-XXXX-XXXX-XXXX"
                handleChange={formikPayment.handleChange}
                handleBlur={formikPayment.handleBlur}
                hasErrorMessage={formikPayment.touched.cardNumber}
                errorMessage={formikPayment.errors.cardNumber}
              />
              <Input
                shortInput
                type="text"
                label="Exp. date"
                id="expiration-date"
                value={formikPayment.values.cardDate}
                placeholder="MM/YY"
                handleChange={formikPayment.handleChange}
                handleBlur={formikPayment.handleBlur}
                hasErrorMessage={formikPayment.touched.cardDate}
                errorMessage={formikPayment.errors.cardDate}
              />
              <Input
                shortInput
                type="text"
                label="CVV"
                id="cvv-code"
                value={formikPayment.values.cardCVV}
                placeholder="XXX"
                handleChange={formikPayment.handleChange}
                handleBlur={formikPayment.handleBlur}
                hasErrorMessage={formikPayment.touched.cardCVV}
                errorMessage={formikPayment.errors.cardCVV}
              />
            </form>
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
          disabled={formikPayment.isValidating || !formikPayment.isValid}
        >
          {formikPayment.isSubmitting ? "Going to summary..." : "Summary"}
        </Button>

        {hasSubmitted && <Redirect to={HOME_URL} />}
      </div>
    </>
  );
}

export default CheckoutPayment;
