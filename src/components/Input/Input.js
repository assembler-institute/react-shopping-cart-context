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
  const { tempData } = useContext(checkoutContext);

  function expiryDate(e) {
    const data = `{"${e.target.id}" : "${e.target.value}"}`;
    tempData(JSON.parse(data));
    return value;
  }
  return (
    <div
      // className="form-group"
      className={
        type === "checkbox" ? "custom-control custom-switch" : "form-group"
      }
    >
      <input
        // className={
        //   hasErrorMessage && errorMessage
        //     ? "form-control is-invalid"
        //     : "form-control is-valid"
        // }
        className={
          hasErrorMessage && errorMessage
            ? `${
                type === "checkbox"
                  ? "custom-control-input is-invalid"
                  : "form-control is-invalid"
              }`
            : `${
                type === "checkbox"
                  ? "custom-control-input is-valid"
                  : "form-control  is-valid"
              }`
        }
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          expiryDate(e);
          handleChange(e);
        }}
        onBlur={handleBlur}
        {...props}
      />
      <label
        htmlFor={id}
        className={type === "checkbox" ? "custom-control-label" : ""}
      >
        {label}
      </label>
      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
