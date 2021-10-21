import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import withCheckout from "hoc/withCheckout";
import withLayout from "hoc/withLayout";
import { Button, Input } from "components";

import AddressSchema from "./AddressSchema";

function AddressForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      Address: "",
      City: "",
      ZipCode: "",
      Country: "",
      Instructions: "",
    },
    validationSchema: AddressSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log(values);
      setTimeout(() => {
        setHasSubmitted(true);
        history.push("/checkout/step-3");
      }, 500);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="col col-8">
      <Input
        type="text"
        label="Address"
        id="Address"
        value={formik.values.Address}
        placeholder="Please type your full Address"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.Address}
        errorMessage={formik.errors.Address}
      />
      <div class="form-group">
        <label for="Country">Country</label>
        <CountryDropdown
          className="form-control"
          id="Country"
          value={country}
          onChange={(val) => setCountry(val)}
          required
        />
      </div>
      <div class="form-group">
        <label for="City">City</label>
        <RegionDropdown
          className="form-control"
          id="City"
          required
          country={country}
          value={region}
          onChange={(val) => setRegion(val)}
        />
      </div>
      <Input
        type="text"
        label="Zipcode"
        id="ZipCode"
        value={formik.values.ZipCode}
        placeholder=""
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.ZipCode}
        errorMessage={formik.errors.ZipCode}
      />
      <Input
        type="text"
        label="Instructions"
        id="Instructions"
        value={formik.values.Instructions}
        placeholder="Delivery Instructions"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.Instructions}
        errorMessage={formik.errors.Instructions}
      />
      <Button
        submitButton
        block
        disabled={formik.isValidating || !formik.isValid}
      >
        {formik.isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}

export default withLayout(withCheckout(AddressForm));
