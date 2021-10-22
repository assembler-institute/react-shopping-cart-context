import React from "react";

import { Formik } from "formik";
import { useHistory, Redirect } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Input } from "components/UI/molecules";
import { Button } from "components/UI/atoms";

import detailsSchema from "./details-schema";

import { useData } from "context/checkoutForm/reducer";
import { useCartItems } from "context/cartItems/reducer";

const DetailsForm = () => {
  let history = useHistory();

  const {
    handleNameChange,
    handleLastNameChange,
    handlePhoneNumber,
    handleEmailChange,
  } = useData();

  const { cartItemIds } = useCartItems();

  if (cartItemIds.length > 0) {
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
        }}
        validationSchema={detailsSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            history.push("/checkout/step-2");
          }, 250);
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
          <form onSubmit={handleSubmit} className="col">
            <Input
              type="text"
              id="firstName"
              label="First name"
              subtitle="The first name of the person making the purchase."
              value={values.firstName}
              placeholder="First name"
              handleChange={(e) => {
                handleChange(e);
                handleNameChange(e);
              }}
              // handleBlur={handleNameChange}
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
              handleChange={(e) => {
                handleChange(e);
                handleLastNameChange(e);
              }}
              //handleBlur={handleLastNameChange}
              hasErrorMessage={touched.lastName}
              errorMessage={errors.lastName}
            />
            <label htmlFor="tel">Mobile phone number</label>
            <p>The shop will only reach you in case of an emergency.</p>
            <PhoneInput
              id="phoneNumber"
              country={"es"}
              onlyCountries={["es", "de", "fr"]}
              localization={{ de: "Germany", es: "Spain", fr: "France" }}
              value={values.phoneNumber}
              placeholder="Enter phone number"
              inputProps={{ name: "phoneNumber" }}
              onChange={(phoneNumber, country, e) => {
                handleChange(phoneNumber, country, e);
                handlePhoneNumber(e);
              }}
              //onBlur={handlePhoneNumber}
              // handleInputBlur={handlePhoneNumber}
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
              handleChange={(e) => {
                handleChange(e);
                handleEmailChange(e);
              }}
              // handleBlur={handleEmailChange}
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
  } else {
    return <Redirect to="/" />;
  }
};

export default DetailsForm;
