import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { Redirect, Link } from "react-router-dom";

import withLayout from "../../../hoc/withLayout";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import OverviewSidebar from "../../../components/OverviewSidebar";

import BillingAddressSchema from "./BillingAddressSchema";

import "./BillingAddress.scss";

import checkoutContext from "../../../context/checkoutData";

const isCheckout = true;

function BillingAddress({ cartItems }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { setCheckoutData, state } = useContext(checkoutContext);

  const formik = useFormik({
    initialValues: {
      address: state.address,
      city: state.city,
      ZC: state.ZC,
      country: state.country ? state.phonePrefix : "Spain",
    },
    validationSchema: BillingAddressSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setCheckoutData({
        address: values.address,
        city: values.city,
        ZC: values.ZC,
        country: values.country,
        navBar: 62.5,
        disabledPaymentDetails: false,
      });
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      {state.disabledBillingAddress && <Redirect to="/" />}
      <div className="row mt-5">
        <div className="col col-8">
          <h4 className="mb-4">Billing Address</h4>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              label="Address"
              id="address"
              value={formik.values.address}
              placeholder="Address"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.address}
              errorMessage={formik.errors.address}
            />
            <Input
              type="text"
              label="City"
              id="city"
              value={formik.values.city}
              placeholder="City"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.city}
              errorMessage={formik.errors.city}
            />
            <Input
              type="text"
              label="Zip Code"
              id="ZC"
              value={formik.values.ZC}
              placeholder="Zip Code"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.ZC}
              errorMessage={formik.errors.ZC}
            />
            <p className="mb-2 mt-3"> Country </p>

            <div className="form-group d-flex mb-4">
              <select
                className="country-select w-100"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="country"
              >
                <option value="Spain">Spain</option>
                <option value="Italy">Italy</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Netherlands">Netherlands</option>
              </select>
            </div>
            <div className="row">
              <div className="col col-6">
                <Link className="w-100" to="/checkout/step-1">
                  <Button block>Back</Button>
                </Link>
              </div>
              <div className="col col-6">
                <Button
                  submitButton
                  block
                  disabled={formik.isValidating || !formik.isValid}
                >
                  {formik.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </div>
          </form>
          {hasSubmitted && <Redirect to="/checkout/step-3" />}
        </div>
        <div className="col col-4">
          <OverviewSidebar className="col" cartItems={cartItems} />
        </div>
      </div>
    </>
  );
}

export default withLayout(BillingAddress, isCheckout);
