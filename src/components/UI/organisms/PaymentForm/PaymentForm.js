import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { PaymentCardForm } from "components/UI/molecules";

const PaymentForm = () => {
  let history = useHistory();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          history.push("/checkout/completed");
        }, 250);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        values,
        touched,
        isValidating,
        isValid,
      }) => (
        <form onSubmit={handleSubmit} className="col">
          <PaymentCardForm />
          <button
            className="btn btn-primary btn-block mt-2 mb-2"
            type="submit"
          >
            PAY
          </button>
        </form>
      )}
    </Formik>
  );
};

export default PaymentForm;
