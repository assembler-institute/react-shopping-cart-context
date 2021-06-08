import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

// import Input from "../../components/Input";
import Button from "../../components/Button";
import UiSelect from "../../components/UiSelect";
import UiInput from "../../components/UiInput";

import withCheckoutLayout from "../../hoc/withCheckoutLayout";
import AddressSchema from "./Address-schema";
import CheckoutContext from "../../context/checkout-context";

import { PAYMENT } from "../../constants/routes";

function Address() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { updateCheckoutContext } = useContext(CheckoutContext);

  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
      zip: "",
      country: "",
    },
    validationSchema: AddressSchema,
    onSubmit: (values, { setSubmitting }) => {
      //   const newProduct = addProductDetails(values);
      //   saveNewProduct(newProduct);
      setSubmitting(true);
      updateCheckoutContext(values);
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <div className="row">
        <div className="col col-sm-12 col-lg-8 m-auto">
          <h3>Billing Address</h3>
          <form onSubmit={formik.handleSubmit}>
            <UiInput
              id="address"
              label="Address"
              name="address"
              className="mb-4"
              value={formik.values.address}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.address}
              errorMessage={formik.errors.address}
            />
            <UiInput
              id="city"
              label="City"
              name="city"
              className="mb-4"
              value={formik.values.city}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.city}
              errorMessage={formik.errors.city}
            />
            <UiInput
              id="zip"
              label="Zip/code postal"
              name="zip"
              className="mb-4"
              value={formik.values.zip}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.zip}
              errorMessage={formik.errors.zip}
            />
            <UiSelect
              id="country"
              label="Country"
              name="country"
              options={["Spain", "Argentina", "Morocco"]}
              value={formik.values.country}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.country}
              errorMessage={formik.errors.country}
            />

            {/* {console.log("isValidating", formik.isValidating)}
            {console.log("isValid", formik.isValid)} */}

            <div className="row">
              <div className="col col-12 mt-4 d-flex justify-content-center">
                <Button
                  submitButton
                  block
                  disabled={formik.isValidating || !formik.isValid}
                >
                  {formik.isSubmitting ? "Submitting..." : "Next page"}
                </Button>
              </div>
            </div>
          </form>

          {hasSubmitted && <Redirect to={PAYMENT} />}
        </div>
      </div>

      {/* <UiInput /> */}
    </>
  );
}

export default withCheckoutLayout(Address);
