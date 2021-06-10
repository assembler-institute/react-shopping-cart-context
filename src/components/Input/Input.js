import React from "react";
import "./input.scss";

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
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className={
          hasErrorMessage && errorMessage
            ? "form-control is-invalid"
            : "form-control is-checked"
        }
        // className={() => {
        //   if (hasErrorMessage && errorMessage) {
        //     return "form-control is-invalid";
        //   }
        //   if (hasErrorMessage) {
        //     return "form-control is-checked";
        //   }
        //   return "form-control";
        // }}
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
