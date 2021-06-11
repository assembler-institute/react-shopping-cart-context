import React from "react";
import "./input.scss";
import classNames from "classnames";

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
  const inputState = classNames({
    "form-control": true,
    "is-invalid": hasErrorMessage && errorMessage,
    "is-checked": hasErrorMessage && !errorMessage,
  });

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className={inputState}
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
