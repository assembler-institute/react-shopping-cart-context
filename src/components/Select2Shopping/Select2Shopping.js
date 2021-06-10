import React from "react";

import "./Select2Shopping.scss";

function Select2Shopping({
  type,
  // label = "input-01",
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
      <select className="selectTel">
        <option>ES +34</option>
        <option>PO +34</option>
        <option>FA +34</option>
        <option>IT +34</option>
      </select>
      <input
        className={
          hasErrorMessage && errorMessage
            ? "form-control is-invalid"
            : "form-control prueba"
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

export default Select2Shopping;
