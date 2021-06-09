import React, { useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import { useFormik } from "formik";
import formHeader from "../../../hoc/formHeader";
import { StateContext } from "../../../context/state-context";
import { ACTIONS } from "../../../context/state-reducer";

import Input from "../../Input";
import Button from "../../Button";

import accountSchema from "./account-form-schema";

function AccountForm() {
  const value = useContext(StateContext);
  const { dispatch, account } = value;
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      clientName: account.userName,
      clientEmail: account.emailAdress,
      clientPhone: account.phoneNumber,
    },
    validationSchema: accountSchema,
    onSubmit: () => {
      dispatch({
        type: ACTIONS.ADD_ACCOUNT,
        payload: {
          name: formik.values.clientName,
          email: formik.values.clientEmail,
          phone: formik.values.clientPhone,
        },
      });
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          label="Your name*"
          id="clientName"
          value={formik.values.clientName}
          placeholder="Insert your full-name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientName}
          errorMessage={formik.errors.clientName}
        />
        <Input
          type="email"
          label="Email Adress*"
          id="clientEmail"
          value={formik.values.clientEmail}
          placeholder="Insert your e-mail"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientEmail}
          errorMessage={formik.errors.clientEmail}
        />
        <Input
          type="text"
          label="Mobile phone number*(falta el prefijo fijo)"
          id="clientPhone"
          value={formik.values.clientPhone}
          placeholder="Insert your phone number"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientPhone}
          errorMessage={formik.errors.clientPhone}
        />
        <div className="d-flex justify-content-between">
          <Link className="btn btn-primary px-5" to="/">
            Back Home
          </Link>
          <Button
            submitButton
            disabled={formik.isValidating || !formik.isValid}
          >
            {formik.isSubmitting ? "Submitting..." : "Go to Billing"}
          </Button>
        </div>
      </form>
      {hasSubmitted && <Redirect to="/checkout/step-2" />}
    </>
  );
}

export default formHeader(AccountForm);
