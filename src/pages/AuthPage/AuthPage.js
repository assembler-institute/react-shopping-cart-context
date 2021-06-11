import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";

import Button from "../../components/Button";
import UiInput from "../../components/UiInput";
import { getPageIndex } from "../../helpers/order-pages";

import AuthSchema from "./AuthPage-schema";
import { DETAIL, HOME } from "../../constants/routes";
import withLayout from "../../hoc/withLayout";
import CheckoutContext from "../../context/checkout-context";
import AuthContext from "../../context/auth-context";
import ButtonLink from "../../components/ButtonLink";
import UiInputPassword from "../../components/UiInputPassword/UiInputPassword";

function AuthPage() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { updateCheckoutContext } = useContext(CheckoutContext);
  const { login } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: AuthSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      login(values);
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
    // validateOnMount: true,
  });

  return (
    <div className="row mt-5">
      <div className="col col-4 m-auto">
        <h3>Authentication</h3>
        <form onSubmit={formik.handleSubmit}>
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
          {/* <UiInput
            type="password"
            label="Your password"
            id="password"
            name="password"
            className="mb-4"
            value={formik.values.name}
            placeholder="User password"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.name}
            errorMessage={formik.errors.name}
          /> */}

          <UiInputPassword
            id="password"
            name="password"
            value={formik.values.password}
            handleChange={formik.handleChange}
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
                  !formik.values.password ||
                  !formik.values.email
                }
                handleClick={() =>
                  formik.dirty &&
                  updateCheckoutContext({
                    actualPage: getPageIndex(DETAIL),
                  })
                }
              >
                {formik.isSubmitting ? "Submitting..." : "Log in"}
              </Button>
            </div>
          </div>
        </form>

        {hasSubmitted && <Redirect to={DETAIL} />}
        {/* {skipRoutes && actualPage < getPageIndex(DETAIL) && (
          <Redirect to={HOME} />
        )} */}
      </div>
    </div>
  );
}

export default withLayout(AuthPage);
