import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import Select, { components } from "react-select";
import { orderContext } from "../../CheckoutContext";

import Input from "../Input";
import stepTwoSchema from "./StepTwo-schema";
import spain from "../../assets/img/spain16.png";
import italy from "../../assets/img/italy16.png";
import greece from "../../assets/img/greece16.png";
import germany from "../../assets/img/germany16.png";
import france from "../../assets/img/france16.png";

const { Option } = components;
const countryOption = (props) => (
  <Option {...props}>
    <img src={props.data.img} alt={props.data.value} />
    {props.data.label}
  </Option>
);

const countrySelect = (props) => (
  <div>
    <img src={props.data.img} alt={props.data.value} />
    &nbsp;{props.data.label}
  </div>
);

const options = [
  { img: spain, value: "Spain", label: " Spain" },
  { img: italy, value: "Italy", label: " Italy" },
  { img: greece, value: "Greece", label: " Greece" },
  { img: germany, value: "Germany", label: " Germany" },
  { img: france, value: "France", label: " France" },
];

function StepTwoForm() {
  const { submitStepTwo, stepTwo } = useContext(orderContext);
  const { address, city, zip, country } = stepTwo;
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      address: address,
      city: city,
      zip: zip,
      country: country,
    },
    validationSchema: stepTwoSchema,
    onSubmit: (values) => {
      submitStepTwo(values);
      history.push("/checkout/step-3");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} id="stepTwo">
      <Input
        type="text"
        label="Address"
        id="address"
        value={formik.values.address}
        placeholder="Your complete address"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.address}
        errorMessage={formik.errors.address}
        isTouched={formik.touched.address}
      />

      <Input
        type="text"
        label="City"
        id="city"
        value={formik.values.city}
        placeholder="Your city"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.city}
        errorMessage={formik.errors.city}
        isTouched={formik.touched.city}
      />

      <Input
        type="text"
        label="Zip code"
        id="zip"
        value={formik.values.zip}
        placeholder="Your zip code"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.zip}
        errorMessage={formik.errors.zip}
        isTouched={formik.touched.zip}
      />

      <span>Country</span>
      <Select
        options={options}
        className="mt-2 valid"
        onChange={(value) => formik.setFieldValue("country", value.value)}
        defaultValue={options[0]}
        components={{
          Option: countryOption,
          SingleValue: countrySelect,
        }}
      />
    </form>
  );
}

export default StepTwoForm;
