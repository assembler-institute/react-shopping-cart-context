/* eslint-disable no-console */
import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";

import Input from "../Input";
import Button from "../Button";

import { applePayment } from "../../pages/Checkout/form-schema";

import FormContext from "../../context/form-context";

import { BILLING_URL, SUMMARY_URL } from "../../utils/constants";

function ApplePayForm({ paymentMethod, setProcessCompletedFlags }) {
  const { data: formData, setData: updateFormData } = useContext(FormContext);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      applePayUser: formData.applePay.applePayUser,
      applePayPassword: formData.applePay.applePayPassword,
    },
    validationSchema: applePayment,
    onSubmit: (values, { setSubmitting }) => {
      updateFormData({ paymentMethod: paymentMethod, applePay: { ...values } });
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
  return (
    <>
      <div className="form-wrapper d-flex flex-column">
        <form
          className="email-form d-flex flex-column flex-wrap px-0 mr-4"
          onSubmit={formik.handleSubmit}
          id="paymentForm"
        >
          <Input
            type="text"
            label="Apple user email"
            id="applePayUser"
            placeholder="user@mail.com"
            value={formik.values.applePayUser}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.applePayUser}
            errorMessage={formik.errors.applePayUser}
          />
          <Input
            type="password"
            label="Password"
            id="applePayPassword"
            placeholder="Your password"
            value={formik.values.applePayPassword}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.applePayPassword}
            errorMessage={formik.errors.applePayPassword}
          />
        </form>
        <div className="navigation-buttons d-flex justify-content-between">
          <Link to={BILLING_URL}>
            <Button>Profile</Button>
          </Link>
          <Button
            submitButton
            form="paymentForm"
            disabled={formik.isValidating || !formik.isValid}
          >
            {formik.isSubmitting ? "Going to Summary..." : "Summary"}
          </Button>

          {hasSubmitted && <Redirect to={SUMMARY_URL} />}
        </div>
      </div>
    </>
  );
}

export default ApplePayForm;
