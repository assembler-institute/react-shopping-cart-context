import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

// import Input from "../../components/Input";
import Button from "../../components/Button";
import UiSelect from "../../components/UiSelect";
import UiInput from "../../components/UiInput";

import withCheckoutLayout from "../../hoc/withCheckoutLayout";
import AdressSchema from "./Address-schema";

function Address() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
      zip: "",
      country: "",
    },
    validationSchema: AdressSchema,
    onSubmit: (values, { setSubmitting }) => {
      //   const newProduct = addProductDetails(values);
      //   saveNewProduct(newProduct);
      setSubmitting(true);

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <div className="row">
        <div className="col col-8 m-auto">
          <h3>Billing Address</h3>
          <form onSubmit={formik.handleSubmit}>
            <UiInput
              id="address"
              label="Address"
              name="address"
              className="mb-3"
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
              className="mb-3"
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
              className="mb-3"
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
              options={["Spain", "Argentina", "Morrocco"]}
              value={formik.values.country}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.country}
              errorMessage={formik.errors.country}
            />

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

          {hasSubmitted && <Redirect to="/" />}
        </div>
      </div>

      {/* <UiInput /> */}
    </>
  );
}

export default withCheckoutLayout(Address);
