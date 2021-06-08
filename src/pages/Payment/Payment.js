import React, { useContext } from "react";
import { Formik } from "formik";
import Checkout from "../../hoc/withCheckout";
import paymentSchema from "./payment-schema";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ShoppingContext from "../../context";

function Payment() {
  const { updatePayment } = useContext(ShoppingContext);
  return (
    <>
      <h1>Payment</h1>
      <Formik
        initialValues={{
          paymentMethod: "",
          cardholderName: "",
          cardNumber: "",
          cardExpiryDate: "",
          cvvCode: "",
        }}
        validationSchema={paymentSchema}
        onSubmit={(values) => {
          updatePayment(values);
          console.log(values.paymentMethod);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          values,
          touched,
          isValidating,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <div id="my-radio-group">Choose the payment method</div>

            <div role="group" aria-labelledby="my-radio-group">
              <Input
                type="radio"
                // label="Credit Card"
                name="paymentMethod"
                label="Credit Card"
                id="creditCard"
                value="creditCard"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.paymentMethod}
                errorMessage={errors.paymentMethod}
              />
              <Input
                type="radio"
                name="paymentMethod"
                label="Pay Pal"
                id="payPal"
                value="payPal"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.paymentMethod}
                errorMessage={errors.paymentMethod}
              />
              <Input
                type="radio"
                name="paymentMethod"
                label="Apple Pay"
                id="applePay"
                value="applePay"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.paymentMethod}
                errorMessage={errors.paymentMethod}
              />
            </div>
            <Input
              type="text"
              label="Write the cardholder name"
              id="cardholderName"
              value={values.cardholderName}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Write the cardholder name"
              hasErrorMessage={touched.cardholderName}
              errorMessage={errors.cardholderName}
            />
            <Input
              type="text"
              label="Write the credit card number"
              id="cardNumber"
              value={values.cardNumber}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="XXXX XXXX XXXX XXXX"
              hasErrorMessage={touched.cardNumber}
              errorMessage={errors.cardNumber}
            />
            <Input
              type="text"
              label="Card expiry date"
              id="cardExpiryDate"
              value={values.cardExpiryDate}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="MM/YY "
              hasErrorMessage={touched.cardExpiryDate}
              errorMessage={errors.cardExpiryDate}
            />
            <Input
              type="text"
              label="CVV Code"
              id="cvvCode"
              value={values.cvvCode}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="XYZ"
              hasErrorMessage={touched.cvvCode}
              errorMessage={errors.cvvCode}
            />
            <Button submitButton block disabled={isValidating || !isValid}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Checkout(Payment);
