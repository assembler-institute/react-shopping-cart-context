import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import clsx from "clsx";
import { useFormik } from "formik";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "../../components/Button";
import UiInput from "../../components/UiInput";
import UiInputDate from "../../components/UiInputDate";
import UiCustomRadio from "../../components/UiCustomRadio";

import paymentSchema from "./Payment-schema";

import withCheckoutLayout from "../../hoc/withCheckoutLayout";

import paypalImage from "../../img/icons/payment/Paypal.png";
import applePayImage from "../../img/icons/payment/Apple.png";
import visaImage from "../../img/icons/payment/Visa.png";
import mastercardImage from "../../img/icons/payment/MasterCard.png";
import amexImage from "../../img/icons/payment/AmericanExpress.png";
import CVV from "../../img/icons/payment/CVV.svg";

function Payment() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      paymentValue: "card",
      carholderName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvv: "",
      cardAgreement: false,
    },
    validationSchema: paymentSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  const paymentOptions = [
    {
      value: "card",
      formText: "Credit/Debit Card",
      formImage: false,
      disabled: false,
    },
    {
      value: "paypal",
      formText: false,
      formImage: paypalImage,
      disabled: true,
    },
    {
      value: "applePay",
      formText: false,
      formImage: applePayImage,
      disabled: true,
    },
  ];

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="row">
            <h3>Payment Details</h3>
            <hr />
            <div className="row">
              <h5>How would you like to pay?</h5>
            </div>
            <div className="row gy-2">
              <RadioGroup
                id="paymentValue"
                aria-label="payment method"
                name="paymentValue"
                value={formik.values.paymentValue}
                onChange={formik.handleChange}
                row
              >
                {paymentOptions.map((payment) => {
                  return (
                    <UiCustomRadio
                      chosenValue={formik.values.paymentValue}
                      value={payment.value}
                      formText={payment.formText}
                      formImage={payment.formImage}
                      disabled={payment.disabled}
                      key={payment.value}
                    />
                  );
                })}
              </RadioGroup>
            </div>
            <div className="row gy-2">
              <div className="col-12">
                We accept the following debit/credit cards
              </div>
              <div className="col-12">
                <img className="radio-border-box" src={visaImage} alt="" />
                <img
                  className="radio-border-box"
                  src={mastercardImage}
                  alt=""
                />
                <img className="radio-border-box" src={amexImage} alt="" />
              </div>
            </div>
            <div className="row gy-4">
              <div className="col-6">
                <UiInput
                  id="carholderName"
                  label="Cardholder name"
                  name="carholderName"
                  className="mb-3"
                  value={formik.values.carholderName}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  hasErrorMessage={formik.touched.carholderName}
                  errorMessage={formik.errors.carholderName}
                  required
                />
                <UiInput
                  id="cardNumber"
                  label="Card number"
                  name="cardNumber"
                  className="mb-3"
                  value={formik.values.cardNumber}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  hasErrorMessage={formik.touched.cardNumber}
                  errorMessage={formik.errors.cardNumber}
                  type="number"
                  required
                />
                <div className="row">
                  <div className="col-5">
                    <UiInputDate
                      id="cardExpiry"
                      label="Card expiry date"
                      name="cardExpiry"
                      className="mb-3"
                      value={formik.values.cardExpiry}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      hasErrorMessage={formik.touched.cardExpiry}
                      errorMessage={formik.errors.cardExpiry}
                      required
                    />
                  </div>
                  <div className="col-5">
                    <UiInput
                      id="cardCvv"
                      label="CVV Code"
                      name="cardCvv"
                      className="mb-3"
                      value={formik.values.cardCvv}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      hasErrorMessage={formik.touched.cardCvv}
                      errorMessage={formik.errors.cardCvv}
                      type="number"
                      required
                    />
                  </div>
                  <div className="col-2">
                    <img src={CVV} alt="" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          inputProps={{ "aria-label": "primary checkbox" }}
                          name="cardAgreement"
                          value={formik.values.cardAgreement}
                          id="cardAgreement"
                        />
                      }
                      className={clsx({
                        "is-invalid":
                          formik.touched.cardAgreement &&
                          formik.errors.cardAgreement,
                      })}
                      label="I have read and I accept the conditions, general terms and
                    privacy policy."
                    />
                    {formik.touched.cardAgreement && (
                      <p className="invalid-feedback">
                        I have read and I accept the conditions, general terms
                        and privacy policy.
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-6">Aquí va la tarjeta</div>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 mt-4 d-flex justify-content-center">
              <Button submitButton block>
                {formik.isSubmitting ? "Submitting..." : "Next page"}
              </Button>
            </div>
          </div>
          {hasSubmitted && <Redirect to="/" />}
        </div>
      </form>
    </>
  );
}

export default withCheckoutLayout(Payment);
