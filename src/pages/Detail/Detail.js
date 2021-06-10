import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";

import UiPhoneInput from "../../components/UiPhoneInput";
import Button from "../../components/Button";
import UiInput from "../../components/UiInput";
import { skipRoutes, getPageIndex } from "../../helpers/order-pages";

import detailSchema from "./Detail-schema";
import { DETAIL, ADDRESS, HOME } from "../../constants/routes";
import { CHECKOUT_CONTEXT_KEY } from "../../constants/local-storage-keys";
import withCheckoutLayout from "../../hoc/withCheckoutLayout";
import CheckoutContext from "../../context/checkout-context";
import ButtonLink from "../../components/ButtonLink";

function Detail() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { updateCheckoutContext, actualPage, name, email, tel } = useContext(
    CheckoutContext,
  );

  useEffect(() => {
    const localStorageContext = JSON.parse(
      localStorage.getItem(CHECKOUT_CONTEXT_KEY),
    );
    if (localStorageContext) {
      updateCheckoutContext(localStorageContext);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: name,
      email: email,
      tel: tel,
    },
    validationSchema: detailSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      updateCheckoutContext(values);
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
    enableReinitialize: true,
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
              type="text"
              label="Mobile phone number"
              name="tel"
              id="tel"
              shrink={Boolean(formik.values.tel)}
              value={formik.values.tel}
              placeholder="Phone number"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.tel}
              errorMessage={formik.errors.tel}
            />

            <div className="row">
              <div className="col col-12 my-4 d-flex justify-content-center">
                <ButtonLink page={HOME}>Go back</ButtonLink>
                <Button
                  submitButton
                  block
                  disabled={
                    formik.isValidating ||
                    !formik.isValid ||
                    !formik.values.name ||
                    !formik.values.email ||
                    !formik.values.tel
                  }
                  handleClick={() =>
                    formik.dirty &&
                    updateCheckoutContext({
                      actualPage: getPageIndex(ADDRESS),
                    })
                  }
                >
                  {formik.isSubmitting ? "Submitting..." : "Next page"}
                </Button>
              </div>
            </div>
          </form>

          {hasSubmitted && <Redirect to={ADDRESS} />}
          {skipRoutes && actualPage < getPageIndex(DETAIL) && (
            <Redirect to={HOME} />
          )}
        </div>
      </div>
    </>
  );
}

export default withCheckoutLayout(Detail);
