import React from "react";
import Select from "../Select";

function Input({
  withSelect,
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
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {withSelect && (
        <Select
          id={withSelect.id}
          value={withSelect.value}
          options={withSelect.options}
          handleChange={withSelect.handleChange}
          handleBlur={withSelect.handleBlur}
        />
      )}
      <input
        className={
          hasErrorMessage && errorMessage
            ? "form-control is-invalid"
            : "form-control"
        }
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
