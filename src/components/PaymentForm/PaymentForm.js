import React from 'react';

import { Formik } from 'formik';
import { useHistory } from "react-router-dom";
import withLayout from "../../hoc/withLayout";

import Input from "../Input";
import Button from "../Button";

import CheckOutCart from '../CheckOutCart';
import NavList from '../NavList';
import PaymentInputs from '../PaymentInputs';

const PaymentForm = () => {
  let history = useHistory();

  return (
    <div className="row">
      <div className="d-flex flex-column">
        <NavList />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: '',
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
      </div>
      <CheckOutCart className="col col-4" />
    </div>
  );
};

export default withLayout(PaymentForm);
