import React from "react";

import "./Select2Shopping.scss";

function Select2Shopping({
  type,
  label,
  id,
  value,
  placeholder,
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  ...props
}) {
  return (
    <div className="formulario">
      <select
        className="selectTel"
        id="countryPrefix"
        name="countryPrefix"
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value=""> Select...</option>
        <option value="+34">ES +34</option>
        <option value="+4">PO +4</option>
        <option value="+3">FA +3</option>
        <option value="+10">IT +10</option>
      </select>
      <input
        className={
          hasErrorMessage && errorMessage
            ? "form-control is-invalid"
            : "form-control prueba"
        }
        id={id}
        label={label}
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

export default Select2Shopping;
