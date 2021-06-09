/* eslint-disable no-console */
import React from "react";

import Input from "../Input";

function EmailForm({ formik, isPaypal }) {
  console.log(isPaypal);
  return (
    <form
      className="container-fluid d-flex flex-wrap px-0 mr-4"
      onSubmit={formik.handleSubmit}
      id="paymentForm"
    >
      {isPaypal ? (
        <>
          <Input
            type="text"
            label="Email name"
            id="payPalpayPalUser"
            value={formik.values.payPal}
            placeholder="user@mail.com"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.payPal}
            errorMessage={formik.errors.payPal}
          />
          <Input
            type="password"
            label="Password"
            id="payPalpayPalPassword"
            value={formik.values.payPal}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.payPal}
            errorMessage={formik.errors.payPal}
          />{" "}
        </>
      ) : (
        <>
          {" "}
          <Input
            type="text"
            label="Apple pay user"
            id="applePay.applePayUser"
            value={formik.values.applePay}
            placeholder="user@mail.com"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.applePay}
            errorMessage={formik.errors.applePay}
          />
          <Input
            type="password"
            label="Password"
            id="applePay.applePayPassword"
            value={formik.values.applePay}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.applePay}
            errorMessage={formik.errors.applePay}
          />
        </>
      )}
    </form>
  );
}

export default EmailForm;
