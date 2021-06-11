import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";

import FormContext from "../../../context/form-context";
import LoginContext from "../../../context/login-context";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { HOME_URL, BILLING_URL } from "../../../utils/constants";

import { formProfile } from "../form-schema";

const phonePrefixOptions = [
  {
    value: "+34",
    display: "ES +34",
  },
  {
    value: "+33",
    display: "FR +33",
  },
  {
    value: "+39",
    display: "IT +39",
  },
  {
    value: "+49",
    display: "DE +49",
  },
];

function CheckoutProfile({ setProcessCompletedFlags }) {
  const { data: formData, setData: updateFormData } = useContext(FormContext);
  const { data: loginData } = useContext(LoginContext);

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: formData.name,
      email: formData.email,
      phonePrefix: formData.phonePrefix,
      phone: formData.phone,
    },
    validationSchema: formProfile,
    onSubmit: (values, { setSubmitting }) => {
      updateFormData(values);
      setSubmitting(true);
      setTimeout(() => {
        setProcessCompletedFlags(({ ...prev }) => ({
          ...prev,
          profile: true,
        }));
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} id="profileForm">
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
          label="Email"
          id="email"
          value={formik.values.email}
          placeholder="Your email"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <Input
          withSelect={{
            id: "phonePrefix",
            options: phonePrefixOptions,
            value: formik.values.phonePrefix,
            placeholder: "Prefix",
            handleChange: formik.handleChange,
            handleBlur: formik.handleBlur,
            hasErrorMessage: formik.touched.phonePrefix,
            errorMessage: formik.errors.phonePrefix,
          }}
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
      </form>
      <div className="navigation-buttons d-flex justify-content-between">
        <Link to={HOME_URL}>
          <Button>Home</Button>
        </Link>
        <Button
          submitButton
          form="profileForm"
          disabled={formik.isValidating || !formik.isValid}
        >
          {formik.isSubmitting ? "Going to Billing..." : "Billing"}
        </Button>

        {hasSubmitted && <Redirect to={BILLING_URL} />}
        {!loginData.isLogged && <Redirect to={HOME_URL} />}
      </div>
    </>
  );
}

export default CheckoutProfile;
