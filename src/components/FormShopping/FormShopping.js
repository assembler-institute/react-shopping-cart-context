import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

import "./FormShopping.scss";

import InputShopping from "../InputShopping";
import ButtonShopping from "../ButtonShopping";

import formSchemaShopping from "./formSchemaShopping";
import SelectShopping from "../SelectShopping";
import Select2Shopping from "../Select2Shopping";

function FormShopping({ props, ...routeProps }) {
  const [Url, setUrl] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const activeUrl = routeProps.match.path;
    const activeUrlstring = activeUrl.substring(15, 16);
    const activeUrlId = parseInt(activeUrlstring, 16);
    setUrl(activeUrlId);
    // console.log(activeUrlId);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: formSchemaShopping,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log(values);

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
            <Select2Shopping />
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
        <section className="form__container">
          <div className="headerPage">
            <h2>Billing address</h2>
            <span>Step {Url} of 3</span>
          </div>
          <hr />
          <form onSubmit={formik.handleSubmit}>
            <InputShopping
              className="inputMediun"
              type="text"
              label="Address:"
              id="address"
              value={formik.values.address}
              placeholder="address..."
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.address}
              errorMessage={formik.errors.address}
            />
            <InputShopping
              className="inputMediun"
              type="text"
              label="City: "
              id="city"
              value={formik.values.city}
              placeholder="city..."
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.city}
              errorMessage={formik.errors.city}
            />
            <InputShopping
              className="inputMediun"
              type="number"
              label="Code post: "
              id="post"
              value={formik.values.post}
              placeholder="post..."
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.post}
              errorMessage={formik.errors.post}
            />
            <SelectShopping />
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
