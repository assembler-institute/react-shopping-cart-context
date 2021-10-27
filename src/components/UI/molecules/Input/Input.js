import React from "react";
import PropTypes from "prop-types";

function Input({
  type = "text",
  label = "input-01",
  subtitle,
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
      {subtitle && <p className="form-subtitle">{subtitle}</p>}
      <input
        className={
          hasErrorMessage && errorMessage
            ? "form-control is-invalid"
            : "form-control"
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

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errorMessage: PropTypes.string,
  hasErrorMessage: PropTypes.bool,
};

Input.defaultProps = {
  subtitle: "",
  placeholder: "",
  handleChange: null,
  handleBlur: null,
  errorMessage: "",
  hasErrorMessage: false,
};

export default Input;
