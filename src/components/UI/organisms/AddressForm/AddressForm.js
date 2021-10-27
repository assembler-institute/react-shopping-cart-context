import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import { useData } from "context";

import { Button } from "components/UI/atoms";
import { Input } from "components/UI/molecules";

import AddressSchema from "./AddressSchema";

function AddressForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  let history = useHistory();
  const {
    handleAddressChange,
    handleCountryChange,
    handleCityChange,
    handleZipCode,
    handleDelivery,
  } = useData();

  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
      zipCode: "",
      country: "",
      instructions: "",
    },
    validationSchema: AddressSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      setTimeout(() => {
        setHasSubmitted(true);
        history.push("/checkout/step-3");
      }, 500);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="col">
      <Input
        type="text"
        label="Address"
        id="address"
        value={formik.values.address}
        placeholder="Please type your full address"
        handleChange={(e) => {
          formik.handleChange(e);
          handleAddressChange(e);
        }}
        //handleBlur={handleAddressChange}
        hasErrorMessage={formik.touched.address}
        errorMessage={formik.errors.address}
      />
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <CountryDropdown
          className="form-control"
          id="country"
          value={country}
          onChange={(val) => {
            setCountry(val);
            handleCountryChange(val);
          }}
          //onBlur={}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <RegionDropdown
          className="form-control"
          id="city"
          required
          country={country}
          value={region}
          onChange={(val) => {
            setRegion(val);
            handleCityChange(val);
          }}
        // onBlur={handleCityChange}
        />
      </div>
      <Input
        type="text"
        label="Zipcode"
        id="zipCode"
        value={formik.values.zipCode}
        placeholder=""
        handleChange={(e) => {
          formik.handleChange(e);
          handleZipCode(e);
        }}
        //handleBlur={handleZipCode}
        hasErrorMessage={formik.touched.zipCode}
        errorMessage={formik.errors.zipCode}
      />
      <Input
        type="text"
        label="Instructions"
        id="instructions"
        value={formik.values.instructions}
        placeholder="Delivery instructions"
        handleChange={(e) => {
          formik.handleChange(e);
          handleDelivery(e);
        }}
        //handleBlur={handleDelivery}
        hasErrorMessage={formik.touched.instructions}
        errorMessage={formik.errors.instructions}
      />
      <Button
        submitButton
        block
        disabled={formik.isValidating || !formik.isValid}
      >
        {formik.isSubmitting ? "Submitting..." : "Next step"}
      </Button>
    </form>
  );
}

export default AddressForm;
