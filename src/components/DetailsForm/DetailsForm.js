import React from 'react';

import { useFormik, Formik } from 'formik';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import AppForm from '../AppForm';
import Input from "../Input";
import Button from "../Button";

import detailsSchema from "./details-schema";

const DetailsForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: 'yes',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    onSubmit: values => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));

      resetForm();
    },
  });

  return (

    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: '',
        email: "",
      }}
      validationSchema={detailsSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        values,
        touched,
        isValidating,
        isValid,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            id="firstName"
            label="First name"
            subtitle="The first name of the person making the purchase."
            value={values.firstName}
            placeholder="First name"
            handleChange={handleChange}
            handleBlur={handleBlur}
            hasErrorMessage={touched.firstName}
            errorMessage={errors.firstName}
          />
          <Input
            type="text"
            id="lastName"
            label="Last name"
            subtitle="The last name of the person making the purchase."
            value={values.lastName}
            placeholder="Last name"
            handleChange={handleChange}
            handleBlur={handleBlur}
            hasErrorMessage={touched.lastName}
            errorMessage={errors.lastName}
          />
          <label htmlFor="tel">Mobile phone number</label>
          <p>The shop will only reach you in case of an emergency.</p>
          <PhoneInput
            id="phoneNumber"
            country={'us'}
            onlyCountries={['es', 'us', 'fr', 'at']}
            value={values.phoneNumber}
            placeholder="Enter phone number"
            // isValid={(value, country) => {
            //   if (value.match(/12345/)) {
            //     return 'Invalid value: ' + value + ', ' + country.name;
            //   } else if (value.match(/1234/)) {
            //     return false;
            //   } else {
            //     return true;
            //   }
            // }}
            onChange={handleChange}
            inputProps={{ name: "phoneNumber" }}
            onChange={(phoneNumber, country, e) => { handleChange(e) }}
            handleBlur={handleBlur}
            hasErrorMessage={touched.phoneNumber}
            errorMessage={errors.phoneNumber}
          />
          <Input
            type="email"
            id="email"
            label="Email Address"
            subtitle="Where you will receive your confirmation email."
            value={values.email}
            placeholder="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            hasErrorMessage={touched.email}
            errorMessage={errors.email}
          />
          <Button submitButton block disabled={isValidating || !isValid}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default DetailsForm;