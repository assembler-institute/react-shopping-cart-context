import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";

import FormContext from "../../../context/form-context";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { BILLING_URL, HOME_URL } from "../../../utils/constants";

import formSchema from "../form-schema";

function CheckoutProfile() {
  const { data: formData, setData: updateFormData } = useContext(FormContext);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    },
    validationSchema: formSchema,
    onSubmit: (values, { setSubmitting }) => {
      updateFormData(values);
      setSubmitting(true);
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          label="Name"
          id="name"
          value={formik.values.name}
          placeholder="Your Name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.name}
          errorMessage={formik.errors.name}
        />
        <Input
          type="text"
          label="Enail"
          id="email"
          value={formik.values.email}
          placeholder="Your email"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <Input
          type="text"
          label="Phone number"
          id="phone"
          value={formik.values.phone}
          placeholder="Your phone"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.phone}
          errorMessage={formik.errors.phone}
        />
        <Link to={HOME_URL}>
          <Button>Return to Home</Button>
        </Link>
        <Button submitButton disabled={formik.isValidating || !formik.isValid}>
          {formik.isSubmitting ? "Going to Billing..." : "Go to Billing"}
        </Button>
      </form>

      {hasSubmitted && <Redirect to={BILLING_URL} />}
    </>
  );
}

export default CheckoutProfile;
