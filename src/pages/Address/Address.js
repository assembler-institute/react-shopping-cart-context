import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import "../../components/OrderCart/OrderCart.scss";
import AddressSchema from "./Address-schema";
import Input from "../../components/Input";
import Button from "../../components/Button";
import OrderCart from "../../components/OrderCart";

function Address({ cartItems }) {
  const [hasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
      zip: "",
      country: "",
    },
    validationSchema: AddressSchema,
  });

  return (
    <>
      <div className="row">
        <div className="col col-sm-12 col-lg-8 m-auto">
          <h3>Billing Address</h3>
          <form onSubmit={formik.handleSubmit}>
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
          <div className="col">
            <OrderCart cartItems={cartItems} />
          </div>
          {hasSubmitted && <Link to="/" />}
        </div>
      </div>
    </>
  );
}
export default Address;
