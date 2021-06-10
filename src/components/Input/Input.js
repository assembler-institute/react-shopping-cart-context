import React from "react";

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
  margins = "",
  isTouched,
  ...props
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className={`${isTouched ? "is-valid" : ""}
          ${
            hasErrorMessage && errorMessage
              ? "form-control is-invalid"
              : "form-control"
          }
        `}
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
        <p className={`invalid-feedback${margins}`}>{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
