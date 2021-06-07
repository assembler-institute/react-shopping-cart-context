import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

import Input from "../../components/Input";
import PhoneInput from "../../components/PhoneInput";
import Button from "../../components/Button";

import withCheckoutLayout from "../../hoc/withCheckoutLayout";
// import Cart from "../../components/Cart";

import detailSchema from "./Detail-schema";
import { ADDRESS } from "../../constants/routes";

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
        <div className="col col-8 m-auto">
          <h3>Payment Details</h3>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              label="Your name"
              id="name"
              value={formik.values.name}
              placeholder="User name"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.name}
              errorMessage={formik.errors.name}
            />
            <Input
              type="email"
              label="Email address"
              id="email"
              value={formik.values.email}
              placeholder="User email address"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.email}
              errorMessage={formik.errors.email}
            />
            {/* <Input
              type="phone"
              label="Mobile phone number"
              id="tel"
              value={formik.values.tel}
              placeholder="Phone number"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.tel}
              errorMessage={formik.errors.tel}
            /> */}

            <PhoneInput
              type="phone"
              label="Mobile phone number"
              id="tel"
              value={formik.values.tel}
              placeholder="Phone number"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.tel}
              errorMessage={formik.errors.tel}
            />

            {/* 
            {console.log("isValidating", formik.isValidating)}
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

          {hasSubmitted && <Redirect to={ADDRESS} />}
        </div>
      </div>
    </>
  );
}

export default withCheckoutLayout(Detail);
