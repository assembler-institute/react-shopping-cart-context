import React, { useContext } from "react";

import checkoutContext from "../../context/checkoutData";

function Input({
  type = "text",
  label,
  id = "input-01",
  value = "",
  placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  ...props
}) {
  const { tempData, focusCreditCard } = useContext(checkoutContext);

  function saveTempData(e) {
    // const data = `{"protectedCardNumber" : "${e.target.value}"}`;
    const data = `{"${e.target.id}" : "${e.target.value}"}`;
    tempData(JSON.parse(data));
  }

  function customClass() {
    if (type === "checkbox") {
      return "form-check form-switch";
    }
    return null;
  }

  return (
    <div
      // className="form-group"
      className={
        type === "checkbox" || type === "radio" ? customClass() : "form-group"
      }
    >
      {(type !== "checkbox" || type !== "radio") && (
        <label htmlFor={id} className={type === "checkbox" ? "" : "mt-3 mb-2"}>
          {label}
        </label>
      )}
      <input
        className={
          hasErrorMessage && errorMessage
            ? `${
                type === "checkbox"
                  ? "form-check-input is-invalid mt-4"
                  : "form-control is-invalid"
              }`
            : `${
                type === "checkbox" ? "form-check-input mt-4" : "form-control"
              }`
        }
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          handleChange(e);
          saveTempData(e);
          // if (id === "cardNumber") {
          //   protectCardNumber(e);
          // }
        }}
        onBlur={(e) => {
          handleBlur(e);
        }}
        onFocus={(e) => {
          focusCreditCard(e);
        }}
        {...props}
      />
      {type === "checkbox" && (
        <label
          htmlFor={id}
          className={type === "checkbox" ? "custom-control-label" : ""}
        >
          {label}
        </label>
      )}
      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
