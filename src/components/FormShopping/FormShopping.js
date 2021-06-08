/* eslint-disable no-console */
import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

import "./FormShopping.scss";

import InputShopping from "../InputShopping";
import ButtonShopping from "../ButtonShopping";
import ShoppingContext from "../../context/ShoppingContext";

import formSchemaShopping from "./formSchemaShopping";

function FormShopping({ ...routeProps }) {
  const [Url, setUrl] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const {
    name,
    email,
    phoneNumber,
    submitStep1,
    address,
    city,
    zipCode,
    country,
    paymentMethod,
    cardHolderName,
    cardNumber,
    cardExpirationDate,
    cardCVVCode,
    consentCheckbox,
  } = useContext(ShoppingContext);

  useEffect(() => {
    const activeUrl = routeProps.match.path;
    const activeUrlstring = activeUrl.substring(15, 16);
    const activeUrlId = parseInt(activeUrlstring, 16);
    setUrl(activeUrlId);
    // console.log(activeUrlId);
  }, []);

  function initialValuesSetup() {
    let initialValues = {};
    switch (Url) {
      case 1:
        initialValues = {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
        };
        // console.log("props-->", props);
        console.log("initialValues-->", initialValues);
        break;
      case 2:
        initialValues = {
          address: address,
          city: city,
          zipCode: zipCode,
          country: country,
        };
        break;
      case 3:
        initialValues = {
          paymentMethod: paymentMethod,
          cardHolderName: cardHolderName,
          cardNumber: cardNumber,
          cardExpirationDate: cardExpirationDate,
          cardCVVCode: cardCVVCode,
          consentCheckbox: consentCheckbox,
        };
        break;
      default:
        // eslint-disable-next-line no-console
        console.log("initialValues -->", initialValues);
    }
    return initialValues;
  }

  const formik = useFormik({
    initialValues: initialValuesSetup(),
    validationSchema: formSchemaShopping,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      submitStep1(values);
      // console.log(values);

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      {Url === 1 && (
        <section className="form__container">
          <div className="headerPage">
            <h2>Billing address</h2>
            <span>Step {Url} of 3</span>
          </div>
          <hr />
          <form onSubmit={formik.handleSubmit}>
            <InputShopping
              type="text"
              label="Your Name:"
              id="name"
              value={formik.values.name}
              placeholder="name..."
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.name}
              errorMessage={formik.errors.name}
            />
            <InputShopping
              type="email"
              label="Email address"
              id="email"
              value={formik.values.email}
              placeholder="email..."
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.email}
              errorMessage={formik.errors.email}
            />
            <div className="container">
              <ButtonShopping type="button">back</ButtonShopping>
              <ButtonShopping
                // type="submit"
                submitButton
                // block
                disabled={formik.isValidating || !formik.isValid}
              >
                {formik.isSubmitting ? "Loading..." : "next"}
              </ButtonShopping>
            </div>
          </form>
          {hasSubmitted && <Redirect to={`/checkout/step-${Url + 1}`} />}
        </section>
      )}
      {Url === 2 && (
        <section>
          <div>
            <div className="headerPage">
              <h2>Billing address</h2>
              <span>Step {Url} of 3</span>
            </div>
            <hr />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <InputShopping
              type="text"
              label="Your Name:"
              id="name"
              value={formik.values.name}
              placeholder="name..."
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.name}
              errorMessage={formik.errors.name}
            />
            <InputShopping
              type="text"
              label="Your Name:"
              id="name"
              value={formik.values.name}
              placeholder="name..."
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.name}
              errorMessage={formik.errors.name}
            />
            <div className="container">
              <ButtonShopping type="button">back</ButtonShopping>
              <ButtonShopping
                // type="submit"
                submitButton
                // block
                disabled={formik.isValidating || !formik.isValid}
              >
                {formik.isSubmitting ? "Loading..." : "next"}
              </ButtonShopping>
            </div>
          </form>
          {hasSubmitted && <Redirect to={`/checkout/step-${Url + 1}`} />}
        </section>
      )}
      {Url === 3 && (
        <section>
          <div>
            <div className="headerPage">
              <h2>Billing address</h2>
              <span>Step {Url} of 3</span>
            </div>
            <hr />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <InputShopping
              type="text"
              label="Your Name:"
              id="name"
              value={formik.values.name}
              placeholder="name..."
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.name}
              errorMessage={formik.errors.name}
            />
            <InputShopping
              type="text"
              label="Your Name:"
              id="name"
              value={formik.values.name}
              placeholder="name..."
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.name}
              errorMessage={formik.errors.name}
            />
            <div className="container">
              <ButtonShopping type="button" className="btnForm">
                back
              </ButtonShopping>
              <ButtonShopping
                type="button"
                className="btnForm"
                submitButton
                // block
                disabled={formik.isValidating || !formik.isValid}
              >
                {formik.isSubmitting ? "Submitting..." : "next"}
              </ButtonShopping>
            </div>
          </form>
        </section>
      )}
      {Url === 4 && (
        <section>
          <div>
            <div className="headerPage">
              <h2>Billing address</h2>
              <span>Step {Url} of 3</span>
            </div>
            <hr />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <InputShopping
              type="text"
              label="Your Name:"
              id="name"
              value={formik.values.name}
              placeholder="name..."
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.name}
              errorMessage={formik.errors.name}
            />
            <InputShopping
              type="text"
              label="Your Name:"
              id="name"
              value={formik.values.name}
              placeholder="name..."
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.name}
              errorMessage={formik.errors.name}
            />
            <div className="container">
              <ButtonShopping type="button" className="btnForm">
                back
              </ButtonShopping>
              <ButtonShopping
                type="button"
                className="btnForm"
                submitButton
                // block
                disabled={formik.isValidating || !formik.isValid}
              >
                {formik.isSubmitting ? "Submitting..." : "next"}
              </ButtonShopping>
            </div>
          </form>
        </section>
      )}
    </>
  );
}

export default FormShopping;
