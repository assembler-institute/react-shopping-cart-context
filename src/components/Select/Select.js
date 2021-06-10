import React from "react";

function Select({
  id,
  label,
  value,
  options,
  placeholder,
  handleChange,
  handleBlur,
  hasErrorMessage,
  errorMessage,
}) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        className={
          hasErrorMessage && errorMessage
            ? "form-control is-invalid"
            : "form-control"
        }
        name={id}
        id={id}
        label={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        {placeholder && <option hidden>{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.display}
          </option>
        ))}
      </select>

      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )}
    </div>
  );
}

export default Select;
