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
  const formItemClasses = classNames({
    "form-group": true,
    "short-input": shortInput,
  });

  const inputClasses = classNames({
    "form-control": true,
    "form-control is-invalid": hasErrorMessage && errorMessage,
  });

  return (
    <div className={formItemClasses}>
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
