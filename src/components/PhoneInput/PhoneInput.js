import React from "react";
import cn from "clsx";
import InputMask from "react-input-mask";
import SelectCountryCode from "../SelectCountryCode";

function PhoneInput({
  // type = "text",
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
    <div className="form-group mt-3">
      <label htmlFor={id}>{label}</label>
      <div className="position-relative">
        <SelectCountryCode />
        <InputMask
          mask="999 999 999"
          className={classes}
          style={{ paddingLeft: "125px" }}
          id={id}
          name={id}
          type="tel"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
        {hasErrorMessage && errorMessage && (
          <p className="invalid-feedback">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default PhoneInput;
