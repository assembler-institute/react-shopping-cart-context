import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";

import withLayout from "../../../hoc/withLayout";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import PaymentDatailsSchema from "./PaymentDatailsSchema";

import checkoutContext from "../../../context/checkoutData";

const isCheckout = true;

function PaymentDetails() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { setCheckoutData, state } = useContext(checkoutContext);

  const formik = useFormik({
    initialValues: {
      paymentMethod: state.paymentMethod,
      cardName: state.cardName,
      cardNumber: state.cardNumber,
      cardExpiryDate: state.cardExpiryDate,
      cardCVV: state.cardCVV,
      termsConditions: state.termsConditions,
    },
    validationSchema: PaymentDatailsSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setCheckoutData({
        paymentMethod: values.paymentMethod,
        cardName: values.cardName,
        cardNumber: values.cardNumber,
        cardExpiryDate: values.cardExpiryDate,
        cardCVV: values.cardCVV,
        termsConditions: values.termsConditions,
      });
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <div className="row">
      <div className="col col-8">
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            label="Card name*"
            id="cardName"
            value={formik.values.cardName}
            placeholder="Card name"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.cardName}
            errorMessage={formik.errors.cardName}
          />
          <Input
            type="text"
            label="Card number*"
            id="cardNumber"
            value={formik.values.cardNumber}
            placeholder="Card number"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.cardNumber}
            errorMessage={formik.errors.cardNumber}
          />
          <div className="card-inputs">
            <Input
              type="date"
              label="Card expiry date*"
              id="cardExpiryDate"
              value={formik.values.cardExpiryDate}
              placeholder="Expiry date"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.cardExpiryDate}
              errorMessage={formik.errors.cardExpiryDate}
              pattern="[0-9]{2}-[0-9]{2}"
            />
            <Input
              type="text"
              label="Card CVV*"
              id="cardCVV"
              value={formik.values.cardCVV}
              placeholder="CVV"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.cardCVV}
              errorMessage={formik.errors.cardCVV}
            />
          </div>
          <Button
            submitButton
            block
            disabled={formik.isValidating || !formik.isValid}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
        {hasSubmitted && <Redirect to="/checkout/order-summary" />}
      </div>

      <div className="col col-4">Card layout</div>
    </div>
  );
}

export default withLayout(PaymentDetails, isCheckout);
