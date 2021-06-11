import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";

import { skipRoutes, getPageIndex } from "../../helpers/order-pages";
import Button from "../../components/Button";
import UiSelect from "../../components/UiSelect";
import UiInput from "../../components/UiInput";

import withCheckoutLayout from "../../hoc/withCheckoutLayout";
import AddressSchema from "./Address-schema";
import CheckoutContext from "../../context/checkout-context";

import { PAYMENT, DETAIL, HOME, ADDRESS } from "../../constants/routes";
import { CHECKOUT_CONTEXT_KEY } from "../../constants/local-storage-keys";
import ButtonLink from "../../components/ButtonLink";

function Address() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const {
    updateCheckoutContext,
    actualPage,
    address,
    city,
    zip,
    country,
  } = useContext(CheckoutContext);

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
      address: address,
      city: city,
      zip: zip,
      country: country,
    },
    validationSchema: AddressSchema,
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
            type="number"
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
          <div className="row">
            <div className="col col-12 my-4 d-flex justify-content-center">
              <ButtonLink page={DETAIL}>Go back</ButtonLink>
              <Button
                submitButton
                block
                disabled={
                  formik.isValidating ||
                  !formik.isValid ||
                  !formik.values.address ||
                  !formik.values.city ||
                  !formik.values.zip
                }
                handleClick={() =>
                  formik.dirty &&
                  updateCheckoutContext({
                    actualPage: getPageIndex(PAYMENT),
                  })
                }
              >
                {formik.isSubmitting ? "Submitting..." : "Next page"}
              </Button>
            </div>
          </div>
        </form>
        {hasSubmitted && <Redirect to={PAYMENT} />}
        {skipRoutes && actualPage < getPageIndex(ADDRESS) && (
          <Redirect to={HOME} />
        )}
      </div>
    </div>
  );
}

export default withCheckoutLayout(Address);
