import React, { useContext } from "react";
import { Formik } from "formik";
import Checkout from "../../hoc/withCheckout";
import detailsSchema from "./details-schema";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ShoppingContext from "../../context";

function Details() {
  const { updateDetails } = useContext(ShoppingContext);
  return (
    <>
      <h1>Details</h1>
      <Formik
        initialValues={{
          userName: "",
          userEmail: "",
          userPhone: 0,
        }}
        validationSchema={detailsSchema}
        onSubmit={(values) => {
          updateDetails(values);
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
            <Input
              type="number"
              label="Write your phone number"
              id="userPhone"
              value={values.userPhone}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Write your phone"
              hasErrorMessage={touched.userPhone}
              errorMessage={errors.userPhone}
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

export default Checkout(Details);
