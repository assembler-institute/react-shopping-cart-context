import React from "react";
import Input from "../Input";
import stepOneSchema from "./schema"
import { useFormik } from 'formik';
import{ useUser } from "../../context/userContext/userContex"




function StepOneForm() {
  const { name,email,countryCode,phone,submitStepOne} = useUser();
  
  const formik = useFormik({
    initialValues: {
      name: name,
      email: email,
      countryCode: countryCode,
      phone: phone,
    },
    validationSchema: stepOneSchema,
    onSubmit: (values) => {
      submitStepOne(values);
      console.log(values)
    },
  });


  return (
    <>
      <div>
      <form onSubmit={formik.handleSubmit} id="stepOne">
      <Input
        type="text"
        label="Name"
        id="name"
        value={formik.values.name}
        placeholder="Your name"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.name}
        errorMessage={formik.errors.name}
        isTouched={formik.touched.name}
      />
      <Input
        type="text"
        label="Email"
        id="email"
        value={formik.values.email}
        placeholder="Your email address"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.email}
        errorMessage={formik.errors.email}
        isTouched={formik.touched.email}
      />

      </form>
      </div>
    </>
  )
} export default StepOneForm