import React from 'react';

import { Formik } from 'formik';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import Input from "../Input";
import Button from "../Button";

import detailsSchema from "./details-schema";

const DetailsForm = () => {
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
            country={'es'}
            onlyCountries={['es', 'de', 'fr']}
            localization={{ de: 'Germany', es: 'Spain', fr: 'France' }}
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
            inputProps={{ name: "phoneNumber" }}
            onChange={(phoneNumber, country, e) => { handleChange(phoneNumber, country, e) }}
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