import React from "react";
import "./input.scss";

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
  label = false,
  id = "input-01",
  value = "",
  placeholder = "",
  radioChecked = false,
  creditCardRadios = false,
  payMethod = false,
  imageLabel = false,
  handleChange = () => { },
  handleBlur = () => { },
  errorMessage,
  hasErrorMessage,
  ...props
}) {

  if (creditCardRadios) {
    return (
      <>
        <label
          className={radioChecked ? "creditCardWrapper checked"
            : "creditCardWrapper"}
          htmlFor={id}>
          <img src={label} alt="creditCard" />

          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            {...props}
          />
        </label>
      </>
    )
  }

  if (payMethod) {
    return (
      <label
        className="bolder paymethodWrapper"
        htmlFor={id}>

        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
        {imageLabel ? <img src={label} alt="payment Method" /> : label}
      </label>
    )
  }

  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
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
