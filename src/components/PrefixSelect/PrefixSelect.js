import React from "react";

function PrefixSelect({
  type = "text",
  label = "input-01",
  id = "input-01",
  option = "Select your country",
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
      <select
        className={`form-control ${success} ${error}`}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      >
        <option>Select your countries prefix</option>
        <option data-countrycode="ES" value="34">
          Spain (+34)
        </option>
        <option data-countrycode="AD" value="376">
          Andorra (+376)
        </option>
        <option data-countrycode="FR" value="33">
          France (+33)
        </option>
        <option data-countrycode="IT" value="39">
          Italy (+39)
        </option>
        <option data-countrycode="PT" value="351">
          Portugal (+351)
        </option>
      </select>
      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )}
      {!hasErrorMessage && !errorMessage && value && (
        <p className="valid-feedback">Looks good!</p>
      )}
    </div>
  );
}

export default PrefixSelect;
