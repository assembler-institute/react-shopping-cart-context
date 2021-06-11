import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import Select, { components } from "react-select";
import { orderContext } from "../../CheckoutContext";

import Input from "../Input";
import stepOneSchema from "./StepOne-schema";
import spain from "../../assets/img/spain16.png";
import italy from "../../assets/img/italy16.png";
import greece from "../../assets/img/greece16.png";
import germany from "../../assets/img/germany16.png";
import france from "../../assets/img/france16.png";
import "./StepOneForm.scss";

const { Option } = components;
const iconOption = (props) => (
  <Option {...props} className="options">
    <img src={props.data.img} alt={props.data.value} />
    {props.data.label}
  </Option>
);

const iconSelect = (props) => (
  <div>
    <img src={props.data.img} alt={props.data.value} />
    &nbsp;{props.data.label}
  </div>
);

const options = [
  { img: spain, value: "+34", label: " +34" },
  { img: italy, value: "+39", label: " +39" },
  { img: greece, value: "+30", label: " +30" },
  { img: germany, value: "+49", label: " +49" },
  { img: france, value: "+33", label: " +33" },
];

function StepOneForm() {
  const { submitStepOne } = useContext(orderContext);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      countryCode: "",
      phone: "",
    },
    validationSchema: stepOneSchema,
    onSubmit: (values) => {
      submitStepOne(values);
      history.push("/checkout/step-2");
    },
  });
  return (
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

      <span>Phone number</span>
      <div
        className={`phoneWrapper form-control
        ${formik.touched.phone && !formik.errors.phone ? "is-valid" : "valid"}
          ${
            formik.touched.phone && formik.errors.phone ? "is-invalid" : "valid"
          }
            `}
      >
        <Select
          options={options}
          className="countryCode"
          onChange={(value) => formik.setFieldValue("countryCode", value.value)}
          defaultValue={options[0]}
          components={{
            Option: iconOption,
            SingleValue: iconSelect,
          }}
        />
        <label htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Your phone number"
            className="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
      </div>
      {formik.touched.phone && formik.errors.phone && (
        <p className="invalid-feedback-phone">{formik.errors.phone}</p>
      )}
    </form>
  );
}

export default StepOneForm;
