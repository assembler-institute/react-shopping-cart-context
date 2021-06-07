import React from "react";

const classNames = require("classnames");

function Input({
  type = "text",
  label = "input-01",
  id = "input-01",
  value = "",
  placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  shortInput = false,
  ...props
}) {
  const inputClasses = classNames({
    "form-control": true,
    "form-control is-invalid": hasErrorMessage && errorMessage,
    "short-input": shortInput,
  });

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className={inputClasses}
        id={id}
        name={id}
        type={type}
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
  );
}

export default Input;
