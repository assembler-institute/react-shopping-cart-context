import { useFormik } from "formik";
import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import "../../components/OrderCart/OrderCart.scss";
import "../layouts.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import personalSchema from "./personal-schema";
// import ShoppingCartItem from "../../components/ShoppingCartItem";
import OrderCart from "../../components/OrderCart";

function PersonalDetails({ cartItems }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: personalSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <section className="form__container">
      <div className="step__main--container">
        <div className="step__main--container--form">
          <div className="headerPage">
            <h3>Personal Details</h3>
          </div>
          <form onSubmit={formik.handleSubmit} className="col-10">
            <Input
              type="text"
              label="Your name"
              id="name"
              value={formik.values.name}
              placeholder="Your Name"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.name}
              errorMessage={formik.errors.name}
            />

            <Input
              type="email"
              label="Email Address"
              id="email"
              value={formik.values.email}
              placeholder="Your Email Address"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.email}
              errorMessage={formik.errors.email}
            />

            {/* <Input
              type="number"
              label="Mobile Phone Number"
              id="phoneNumber"
              value={formik.values.phoneNumber}
              placeholder="Your Mobile Phone Number"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.phoneNumber}
              errorMessage={formik.errors.phoneNumber}
            /> */}
            <p>Mobile Phone Number</p>
            <PhoneInput
              id="phoneNumber"
              value={formik.values.phoneNumber}
              placeholder="Your Mobile Phone Number"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.phoneNumber}
              errorMessage={formik.errors.phoneNumber}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
            />
            <br />
            <Button
              submitButton
              block
              disabled={formik.isValidating || !formik.isValid}
            >
              {formik.isSubmitting ? "Submitting..." : "Next Page"}
            </Button>
          </form>
        </div>
        <div className="col">
          <OrderCart cartItems={cartItems} />
        </div>
        {hasSubmitted && <Redirect to="/checkout/step-2" />}
      </div>
    </section>
  );
}
export default PersonalDetails;
