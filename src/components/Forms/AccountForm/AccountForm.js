import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import { useFormik } from "formik";
import formHeader from "../../../hoc/formHeader";

import Input from "../../Input";
import Button from "../../Button";

import clientSchema from "../client-schema";

// function addClientDetails(client) {
//   return {
//     id: uuid(),
//     ...client,
//     quantity: 0,
//     isFavorite: false,
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//     votes: {
//       upVotes: {
//         upperLimit: 10,
//         currentValue: 0,
//       },
//       downVotes: {
//         lowerLimit: 10,
//         currentValue: 0,
//       },
//     },
//     author: {
//       id: uuid(),
//       ...client.author,
//     },
//   };
// }

function AccountForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      // personalInfo: "",
    },
    validationSchema: clientSchema,
    onSubmit: (values, { setSubmitting }) => {
      // const newClient = () => {};
      setSubmitting(true);
      setHasSubmitted(true);

      // setTimeout(() => {
      //   setHasSubmitted(true);
      // }, 500);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          label="Your name*"
          id="clientName"
          value={formik.values.clientName}
          placeholder="Insert your full-name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientName}
          errorMessage={formik.errors.clientName}
        />
        <Input
          type="email"
          label="Email Adress*"
          id="clientEmail"
          value={formik.values.clientEmail}
          placeholder="Insert your e-mail"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientEmail}
          errorMessage={formik.errors.clientEmail}
        />
        <Input
          type="text"
          label="Mobile phone number*(falta el prefijo fijo)"
          id="clientPhone"
          value={formik.values.clientPhone}
          placeholder="Insert your phone number"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.clientPhone}
          errorMessage={formik.errors.clientPhone}
        />
        <Link className="btn btn-primary px-5" disabled="disabled" to="/">
          Back Home
        </Link>
        <Button
          submitButton
          block
          disabled={formik.isValidating || !formik.isValid}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {hasSubmitted && <Redirect to="/checkout/step-2" />}
    </>
  );
}

export default formHeader(AccountForm);
