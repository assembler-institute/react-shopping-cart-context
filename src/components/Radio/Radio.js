import React from "react";

function Radio({
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
    <>
      <div className="form-group">
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
        <label htmlFor={id} className="form-check-label">
          {label}
        </label>
      </div>
      <div>
        {hasErrorMessage && errorMessage && (
          <p className="invalid-feedback">{errorMessage}</p>
        )}
      </div>
    </>
  );
}

export default Radio;
