import React from "react";

export const classNameInputCondition = (hasErrorMessage, errorMessage) => {
  if (hasErrorMessage && errorMessage) {
    return "form-control is-invalid"
  }
  if (hasErrorMessage && !errorMessage) {
    return "form-control is-valid"
  }
  return "form-control"
}

function Input({
  type = "text",
  label = "input-01",
  id = "input-01",
  value = "",
  placeholder = "",
  handleChange = () => { },
  handleBlur = () => { },
  errorMessage,
  hasErrorMessage,
  ...props
}) {


  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className={
          classNameInputCondition(hasErrorMessage, errorMessage)
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
