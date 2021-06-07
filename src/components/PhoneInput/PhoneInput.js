import React from "react";
import cn from "clsx";
import SelectCountryCode from "../SelectCountryCode/SelectCountryCode";

function PhoneInput({
  type = "text",
  label = "input-01",
  id = "input-01",
  value = "",
  placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  ...props
}) {
  const classes = cn({
    "form-control": true,
    "is-invalid": hasErrorMessage && errorMessage,
    "is-valid": hasErrorMessage && !errorMessage,
  });
  return (
    <div className="form-group mt-5">
      <label htmlFor={id}>{label}</label>
      <div className="d-flex position-relative">
        <SelectCountryCode />
        <input
          className={classes}
          style={{ paddingLeft: "125px" }}
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
      </div>
      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )}
    </div>
  );
}

export default PhoneInput;
