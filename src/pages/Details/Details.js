import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ShoppingContext from "../../context";
import Checkout from "../../hoc/withCheckout";
import detailsSchema from "./details-schema";

function Details() {
  const { updateDetails } = useContext(ShoppingContext);
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/Checkout/step-2" />;
  }
  return (
    <>
      <h1>Details</h1>
      <Formik
        initialValues={{
          userName: "",
          userEmail: "",
          userPhone: "",
        }}
        initialErrors={{ defaultIsValid: "false" }}
        validationSchema={detailsSchema}
        onSubmit={(values) => {
          updateDetails(values);
          setRedirect(true);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
          setFieldTouched,
          errors,
          values,
          touched,
          isValidating,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Write your name"
              id="userName"
              value={values.userName}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Write your name"
              hasErrorMessage={touched.userName}
              errorMessage={errors.userName}
            />
            <Input
              type="email"
              label="Write your email"
              id="userEmail"
              value={values.userEmail}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Write your email"
              hasErrorMessage={touched.userEmail}
              errorMessage={errors.userEmail}
            />
            <div className="form-group">
              <PhoneInput
                type="number"
                label="Write your phone number"
                id="userPhone"
                name="userPhone"
                value={values.userPhone}
                onChange={(phone) => {
                  setFieldValue("userPhone", phone, true);
                }}
                onBlur={() => {
                  setFieldTouched("userPhone", true);
                }}
                country="es"
                placeholder="Write your phone"
                inputProps={{
                  id: "userPhone",
                  name: "userPhone",
                  className:
                    touched.userPhone && errors.userPhone
                      ? "form-control is-invalid"
                      : "form-control",
                  // onChange: handleChange,
                  // onBlur: handleBlur,
                }}
              />
              {touched.userPhone && errors.userPhone && (
                <p className="invalid-feedback">{errors.userPhone}</p>
              )}
            </div>

            <Button submitButton disabled={isValidating || !isValid}>
              Next
            </Button>
            <div>
              <code>{`errors: ${JSON.stringify(
                errors,
              )} | touched: ${JSON.stringify(
                touched,
              )} | isValid: ${isValid} | values: ${JSON.stringify(
                values,
              )}`}</code>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Checkout(Details);
