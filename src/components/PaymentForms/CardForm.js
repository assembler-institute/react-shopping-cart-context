/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";

import Input from "../Input";
import Button from "../Button";
import CardSvg from "../CardSvg";

import { cardPayment } from "../../pages/Checkout/form-schema";

import FormContext from "../../context/form-context";

import { BILLING_URL, SUMMARY_URL } from "../../utils/constants";

// Image routes
import visa from "../../img/payment/visa-logo.svg";
import masterCard from "../../img/payment/mastercard-logo.svg";
import americanExp from "../../img/payment/american_express-logo.svg";
import cvvIcon from "../../img/payment/cvv-icon.svg";

function CardForm({ paymentMethod, setProcessCompletedFlags }) {
  const { data: formData, setData: updateFormData } = useContext(FormContext);

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isFront, setIsFront] = useState(true);

  const formik = useFormik({
    initialValues: {
      cardName: formData.card.cardName,
      cardNumber: formData.card.cardNumber,
      cardDate: formData.card.cardDate,
      cardCVV: formData.card.cardCVV,
      cardTerms: formData.card.cardTerms,
    },
    validationSchema: cardPayment,
    onSubmit: (values, { setSubmitting }) => {
      updateFormData({ paymentMethod: paymentMethod, card: { ...values } });
      setSubmitting(true);
      setTimeout(() => {
        setProcessCompletedFlags(({ ...prev }) => ({
          ...prev,
          payment: true,
        }));
        setHasSubmitted(true);
      }, 500);
    },
  });

  function handleFocus(event) {
    if (event.target.id === "cardCVV") {
      setIsFront(false);
    } else {
      setIsFront(true);
    }
  }

  return (
    <>
      <div className="form-wrapper d-flex flex-column">
        <div className="accepted-methods mb-4">
          <p className="accepted-methods mb-2">
            We accept the following credit/debit card
          </p>
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
        <div className="form form-and-card d-flex justify-content-between  mb-4">
          <form
            className="container-fluid d-flex flex-wrap px-0 mr-4 ml-0"
            onSubmit={formik.handleSubmit}
            id="paymentForm"
          >
            <Input
              type="text"
              label="Cardholder name"
              id="cardName"
              placeholder="Name"
              maxLength="40"
              value={formik.values.cardName}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onFocus={handleFocus}
              hasErrorMessage={formik.touched.cardName}
              errorMessage={formik.errors.cardName}
            />
            <Input
              type="text"
              label="Card number"
              id="cardNumber"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              value={formik.values.cardNumber}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onFocus={handleFocus}
              hasErrorMessage={formik.touched.cardNumber}
              errorMessage={formik.errors.cardNumber}
            />
            <Input
              shortInput
              type="text"
              label="Exp. date"
              id="cardDate"
              placeholder="MM/YY"
              maxLength="5"
              value={formik.values.cardDate}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onFocus={handleFocus}
              hasErrorMessage={formik.touched.cardDate}
              errorMessage={formik.errors.cardDate}
            />
            <Input
              shortInput
              type="password"
              label="CVV"
              id="cardCVV"
              placeholder="XXX"
              maxLength="3"
              value={formik.values.cardCVV}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onFocus={handleFocus}
              hasErrorMessage={formik.touched.cardCVV}
              errorMessage={formik.errors.cardCVV}
            />
            <img src={cvvIcon} alt="CVV icon" />
          </form>
          <CardSvg
            isFront={isFront}
            cardName={formik.values.cardName}
            cardNumber={formik.values.cardNumber}
            cardDate={formik.values.cardDate}
            cardCVV={formik.values.cardCVV}
          />
        </div>
        <div className="card-terms d-flex">
          <div className="checkbox-terms">
            <input
              type="checkbox"
              id="cardTerms"
              value={formik.values.cardTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="description-terms">
            <label htmlFor="cardTerms">
              I have read and accept the booking conditions, general terms and
              privacy policy. <br />
              We use secure SSL transmission and encrypted storage to protect
              your personal information.
            </label>
          </div>
        </div>
        <div className="navigation-buttons d-flex justify-content-between">
          <Link to={BILLING_URL}>
            <Button>Billing</Button>
          </Link>
          <Button
            submitButton
            form="paymentForm"
            disabled={
              formik.isValidating ||
              (!formik.isValid && !formik.values.cardTerms)
            }
          >
            {formik.isSubmitting ? "Going to Summary..." : "Summary"}
          </Button>

          {hasSubmitted && <Redirect to={SUMMARY_URL} />}
        </div>
      </div>
    </>
  );
}

export default CardForm;
