/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";

import Input from "../Input";
import Button from "../Button";

import { cardPayment } from "../../pages/Checkout/form-schema";

import FormContext from "../../context/form-context";

import { HOME_URL, PROFILE_URL } from "../../utils/constants";

// Image routes
import visa from "../../img/payment/visa-logo.svg";
import masterCard from "../../img/payment/mastercard-logo.svg";
import americanExp from "../../img/payment/american_express-logo.svg";

function CardForm({ paymentMethod }) {
  const { data: formData, setData: updateFormData } = useContext(FormContext);
  const [hasSubmitted, setHasSubmitted] = useState(false);

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
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <div className="form-wrapper d-flex flex-column">
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
        <div className="form form-and-card d-flex mb-4">
          <form
            className="container-fluid d-flex flex-wrap px-0 mr-4"
            onSubmit={formik.handleSubmit}
            id="paymentForm"
          >
            <Input
              type="text"
              label="Cardholder name"
              id="cardName"
              value={formik.values.cardName}
              placeholder="Name"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.cardName}
              errorMessage={formik.errors.cardName}
            />
            <Input
              type="text"
              label="Card number"
              id="cardNumber"
              value={formik.values.cardNumber}
              placeholder="XXXX-XXXX-XXXX-XXXX"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.cardNumber}
              errorMessage={formik.errors.cardNumber}
            />
            <Input
              shortInput
              type="text"
              label="Exp. date"
              id="cardDate"
              value={formik.values.cardDate}
              placeholder="MM/YY"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.cardDate}
              errorMessage={formik.errors.cardDate}
            />
            <Input
              shortInput
              type="text"
              label="CVV"
              id="cardCVV"
              value={formik.values.cardCVV}
              placeholder="XXX"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.cardCVV}
              errorMessage={formik.errors.cardCVV}
            />
          </form>
          <div className="card-illustration" />
        </div>

        <div className="card-terms">
          <div className="checkbox-terms">
            <input
              type="checkbox"
              id="cardTerms"
              value={formik.values.cardTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="cardTerms">
              I have read and accept the booking conditions, general terms and
              privacy policy.
            </label>
          </div>
          <div className="description-terms">
            <p>
              We use secure SSL transmission and encrypted storage to protect
              your personal information.
            </p>
          </div>
        </div>
        <div className="navigation-buttons d-flex justify-content-between">
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
      </div>
    </>
  );
}

export default CardForm;
