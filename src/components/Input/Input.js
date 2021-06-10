import React from "react";
import Select from "../Select";

const classNames = require("classnames");

function Input({
  withSelect,
  type = "text",
  label = "input-01",
  id = "input-01",
  value = "",
  placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  handleFocus = () => {},
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
      {withSelect && (
        <Select
          id={withSelect.id}
          value={withSelect.value}
          options={withSelect.options}
          placeholder={withSelect.placeholder}
          handleChange={withSelect.handleChange}
          handleBlur={withSelect.handleBlur}
          hasErrorMessage={withSelect.hasErrorMessage}
          errorMessage={withSelect.errorMessage}
        />
      )}
      <input
        className={inputClasses}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        {...props}
      />
      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback mb-0">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
