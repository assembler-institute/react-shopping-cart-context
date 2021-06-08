import React, { useContext } from "react";
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

/* #TODO 
  X Apply country selector on the phone number
  - Create OnSubmit function (Reduce maybe?)
  - Finish the validation Schema
  - Add a function to mark the "completed" state as true
  - Check how the layer components mash together
*/

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
  { img: spain, value: "spain", label: " +34" },
  { img: italy, value: "italy", label: " +39" },
  { img: greece, value: "greece", label: " +30" },
  { img: germany, value: "germany", label: " +49" },
  { img: france, value: "france", label: " +33" },
];

function StepOneForm() {
  const { stepOne } = useContext(orderContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: stepOneSchema,
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(values);
      // eslint-disable-next-line no-console
      console.log(stepOne);
    },

    /* setTimeout(() => {
        setHasSubmitted(true);
      }, 500); 
    }, */
  });
  return (
    <form>
      <Input
        type="text"
        label="Name"
        id="name"
        value={formik.values.name}
        placeholder="Your name"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.title}
        errorMessage={formik.errors.title}
      />
      <Input
        type="text"
        label="Email"
        id="email"
        value={formik.values.email}
        placeholder="Your email address"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.title}
        errorMessage={formik.errors.title}
      />

      <div className="form-group">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="phone">Phone number</label>
        <div
          className={
            formik.touched.title && formik.errors.title
              ? "phoneWrapper form-control is-invalid"
              : "phoneWrapper form-control"
          }
        >
          <Select
            options={options}
            className="countryCode"
            onFocus={formik.handleFocus}
            components={{
              Option: iconOption,
              SingleValue: iconSelect,
            }}
          />
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
          {formik.touched.title && formik.errors.title && (
            <p className="invalid-feedback">{formik.errors.title}</p>
          )}
        </div>
      </div>
    </form>
  );
}

export default StepOneForm;
