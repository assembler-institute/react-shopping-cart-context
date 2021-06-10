import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import withLayout from "../../hoc/withLayout";
import "../../components/OrderCart/OrderCart.scss";
import "../layouts.scss";
import AddressSchema from "./Address-schema";
import Input from "../../components/Input";
import Button from "../../components/Button";
import OrderCart from "../../components/OrderCart";

function Address({ cartItems }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
      zip: "",
      country: "",
    },
    validationSchema: AddressSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <section className="form__container">
        <div className="step__main--container">
          <div className="step__main--container--form">
            <div className="headerPage">
              <h3>Billing Address</h3>
            </div>
            <form onSubmit={formik.handleSubmit} className="col-10">
              <Input
                label="Address"
                id="address"
                value={formik.values.address}
                placeholder="Address*"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.address}
                errorMessage={formik.errors.address}
              />

              <Input
                label="City"
                id="city"
                value={formik.values.city}
                placeholder="city*"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.city}
                errorMessage={formik.errors.city}
              />

              <Input
                type="number"
                label="Zip Code"
                id="zip"
                value={formik.values.zip}
                placeholder="Zip Code*"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.zip}
                errorMessage={formik.errors.zip}
              />
              <Input
                type="country"
                id="country"
                label="Country"
                name="country"
                placeholder="Country*"
                value={formik.values.country}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.country}
                errorMessage={formik.errors.country}
              />
              <Button
                submitButton
                block
                disabled={formik.isValidating || !formik.isValid}
              >
                {formik.isSubmitting ? "Submitting..." : "Next page"}
              </Button>
            </form>
          </div>
          <div className="col">
            <OrderCart cartItems={cartItems} />
          </div>
          {hasSubmitted && <Redirect to="/checkout/order-summary" />}
        </div>
      </section>
    </>
  );
}
export default withLayout(Address);
