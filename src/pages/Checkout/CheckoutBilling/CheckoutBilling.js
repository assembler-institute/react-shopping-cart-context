import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";

import FormContext from "../../../context/form-context";
import LoginContext from "../../../context/login-context";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Select from "../../../components/Select";

import { HOME_URL, PAYMENT_URL, PROFILE_URL } from "../../../utils/constants";

import { formBilling } from "../form-schema";

const countryOptions = [
  {
    value: "Spain",
    display: "Spain",
  },
  {
    value: "France",
    display: "France",
  },
  {
    value: "Italy",
    display: "Italy",
  },
  {
    value: "Germany",
    display: "Germany",
  },
];

function CheckoutBilling({ setProcessCompletedFlags }) {
  const { data: formData, setData: updateFormData } = useContext(FormContext);
  const { data: loginData } = useContext(LoginContext);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      address: formData.address,
      city: formData.city,
      postCode: formData.postCode,
      country: formData.country,
    },
    validationSchema: formBilling,
    onSubmit: (values, { setSubmitting }) => {
      updateFormData(values);
      setSubmitting(true);
      setTimeout(() => {
        setProcessCompletedFlags(({ ...prev }) => ({
          ...prev,
          billing: true,
        }));
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} id="billingForm">
        <Input
          type="text"
          label="Address"
          id="address"
          value={formik.values.address}
          placeholder="Your address"
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
          placeholder="Your city"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.city}
          errorMessage={formik.errors.city}
        />
        <Input
          type="text"
          label="Zip/Post Code"
          id="postCode"
          value={formik.values.postCode}
          placeholder="Your zip"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.postCode}
          errorMessage={formik.errors.postCode}
        />
        <Select
          label="Country/Region"
          id="country"
          value={formik.values.country}
          options={countryOptions}
          placeholder="Your country"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.country}
          errorMessage={formik.errors.country}
        />
      </form>
      <div className="navigation-buttons d-flex justify-content-between">
        <Link to={PROFILE_URL}>
          <Button>Profile</Button>
        </Link>
        <Button
          submitButton
          form="billingForm"
          disabled={formik.isValidating || !formik.isValid}
        >
          {formik.isSubmitting ? "Going to Payment..." : "Payment"}
        </Button>

        {hasSubmitted && <Redirect to={PAYMENT_URL} />}
        {!loginData.isLogged && <Redirect to={HOME_URL} />}
      </div>
    </>
  );
}

export default CheckoutBilling;
