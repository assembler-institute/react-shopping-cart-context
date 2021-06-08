import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";

import UiPhoneInput from "../../components/UiPhoneInput";
import Button from "../../components/Button";
import UiInput from "../../components/UiInput";
// import PhoneInput2 from "../../components/PhoneInput2";

import detailSchema from "./Detail-schema";
import { ADDRESS } from "../../constants/routes";
import withCheckoutLayout from "../../hoc/withCheckoutLayout";

function Detail() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tel: "",
    },
    validationSchema: detailSchema,
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
        <div className="col col-sm-12 col-lg-8 m-auto">
          <h3>Your Details</h3>
          <form onSubmit={formik.handleSubmit}>
            <UiInput
              type="text"
              label="Your name"
              id="name"
              name="name"
              className="mb-4"
              value={formik.values.name}
              placeholder="User name"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.name}
              errorMessage={formik.errors.name}
            />
            <UiInput
              type="email"
              label="Email address"
              id="email"
              name="email"
              className="mb-4"
              value={formik.values.email}
              placeholder="User email address"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.email}
              errorMessage={formik.errors.email}
            />
            <UiPhoneInput
              type="tel"
              label="Mobile phone number"
              name="tel"
              id="tel"
              value={formik.values.tel}
              placeholder="Phone number"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.tel}
              errorMessage={formik.errors.tel}
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

          {hasSubmitted && <Redirect to={ADDRESS} />}
        </div>
      </div>
    </>
  );
}

export default withCheckoutLayout(Detail);
