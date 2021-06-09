/* eslint-disable no-console */
import React from "react";

import Input from "../Input";

function EmailForm({ formik, isPaypal }) {
  // console.log(isPaypal);
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
            id="payPalUser"
            name="payPalUser"
            value={formik.values.payPalUser}
            placeholder="user@mail.com"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.payPalUser}
            errorMessage={formik.errors.payPalUser}
          />
          <Input
            type="password"
            label="Password"
            id="payPalPassword"
            value={formik.values.payPalPassword}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.payPalPassword}
            errorMessage={formik.errors.payPalPassword}
          />
        </>
      ) : (
        <>
          <Input
            type="text"
            label="Apple pay user"
            id="applePayUser"
            value={formik.values.applePayUser}
            placeholder="user@mail.com"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.applePayUser}
            errorMessage={formik.errors.applePayUser}
          />
          <Input
            type="password"
            label="Password"
            id="applePayPassword"
            value={formik.values.applePayPassword}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.applePayPassword}
            errorMessage={formik.errors.applePayPassword}
          />
        </>
      )}
    </form>
  );
}

export default EmailForm;
