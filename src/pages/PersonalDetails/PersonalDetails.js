import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import personalSchema from "./personal-schema";

function PersonalDetails() {
  const [hasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: 0,
    },
    validationSchema: personalSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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

        <Input
          type="number"
          label="Mobile Phone Number"
          id="phoneNumber"
          value={formik.values.phoneNumber}
          placeholder="Your Mobile Phone Number"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.phoneNumber}
          errorMessage={formik.errors.phoneNumber}
        />

        <Button
          submitButton
          block
          disabled={formik.isValidating || !formik.isValid}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {hasSubmitted && <Link to="/" />}
    </div>
  );
}
export default PersonalDetails;
