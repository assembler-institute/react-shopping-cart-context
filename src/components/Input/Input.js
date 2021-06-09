import React from "react";
// import { CheckedIcon } from "../SVGIcons";

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
  ...props
}) {
  const success =
    !errorMessage && !hasErrorMessage && value ? "is-valid border-success" : "";
  const error =
    errorMessage && hasErrorMessage ? "is-invalid border border-danger" : "";
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className={`form-control ${success} ${error}`}
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
      {!hasErrorMessage && !errorMessage && value && (
        <p className="valid-feedback">Looks good!</p>
      )}
    </div>
  );
}

export default Input;
