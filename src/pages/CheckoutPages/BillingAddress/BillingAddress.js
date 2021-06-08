import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";

import withLayout from "../../../hoc/withLayout";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import BillingAddressSchema from "./BillingAddressSchema";

import checkoutContext from "../../../context/checkoutData";

const isCheckout = true;

function BillingAddress({ cartItems }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { setChceckoutData } = useContext(checkoutContext);
  // const { setBillingAddress, state } = useContext(checkoutContext);

  const formik = useFormik({
    // initialValues: {
    //   name: state.name ? state.name : "",
    //   email: state.email,
    //   phonePrefix: state.phonePrefix,
    //   phoneNumber: state.phoneNumber,
    // },
    initialValues: { address: "", city: "", ZC: "", country: "Spain" },
    validationSchema: BillingAddressSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setChceckoutData({
        address: values.address,
        city: values.city,
        ZC: values.ZC,
        country: values.country,
      });
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <div className="row">
      <div className="col col-8">
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
          <div className="country-inputs w-100">
            <label htmlFor="country">
              Country
              <br />
              <select
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
            </label>
          </div>
          <Button
            submitButton
            block
            disabled={formik.isValidating || !formik.isValid}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
        {hasSubmitted && <Redirect to="/" />}
      </div>

      <div className="col col-4">
        {cartItems.map((item) => (
          <div key={item.id} id={item.id}>
            <p>Product name: {item.title}</p>
            <img
              src={item.img}
              alt={item.title}
              style={({ width: "100px" }, { height: "100px" })}
            />
            <p>Amount: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withLayout(BillingAddress, isCheckout);
