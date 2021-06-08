import React, { useContext } from "react";
import { Formik } from "formik";
import Checkout from "../../hoc/withCheckout";
import adressSchema from "./adress-schema";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ShoppingContext from "../../context";

function Adress() {
  const { updateAdress } = useContext(ShoppingContext);
  return (
    <>
      <h1>Adress</h1>
      <Formik
        initialValues={{
          streetName: "",
          cityName: "",
          postCode: 0,
          country: "",
        }}
        validationSchema={adressSchema}
        onSubmit={(values) => {
          updateAdress(values);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          values,
          touched,
          isValidating,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Write your street adress"
              id="streetName"
              value={values.streetName}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Write your street adress"
              hasErrorMessage={touched.streetName}
              errorMessage={errors.streetName}
            />
            <Input
              type="text"
              label="Write your city name"
              id="cityName"
              value={values.cityName}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Write your city name"
              hasErrorMessage={touched.cityName}
              errorMessage={errors.cityName}
            />
            <Input
              type="number"
              label="Write your post code"
              id="postCode"
              value={values.postCode}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Write your post code "
              hasErrorMessage={touched.postCode}
              errorMessage={errors.postCode}
            />
            <Input
              type="text"
              label="Write your country"
              id="country"
              value={values.country}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Write your country "
              hasErrorMessage={touched.country}
              errorMessage={errors.country}
            />
            <Button submitButton block disabled={isValidating || !isValid}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Checkout(Adress);
