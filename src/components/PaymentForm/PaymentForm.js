import React from "react";
import { Formik } from "formik";
import { useHistory, Redirect } from "react-router-dom";

import { withCheckout, withLayout } from "hoc";
import { Button, PaymentInputs } from "components";
import { useProducts } from "context/products/reducer";

const PaymentForm = () => {
  let history = useHistory();
  const { cartItemIds } = useProducts();
  if (cartItemIds.length > 0) {
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
            console.log(values);

            setSubmitting(false);
            history.push("/checkout/step-2");
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
          <form onSubmit={handleSubmit}>
            <PaymentInputs />
            <Button submitButton block disabled={isValidating || !isValid}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default withLayout(withCheckout(PaymentForm));
