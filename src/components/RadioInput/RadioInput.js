import React from "react";
import { Field } from "formik";

function RadioInput(label = "radio-01", id = "radio-01", ...props) {
  return (
    <>
      <label htmlFor={id}>
        <Field name={id} {...props} type="radio" value={id} />
        {label}
      </label>
    </>
  );
}
export default RadioInput;
