import React from "react";
import classNames from "classnames";

import "./Select.scss";

function Select({
  isChild,
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
    <div className={!isChild ? "mt-3" : ""}>
      {!isChild && <label htmlFor={id}>{label}</label>}
      <div
        className={classNames("flex-prop", "select-wrapper", {
          "select-fail": hasErrorMessage && errorMessage,
          "select-success": hasErrorMessage && !errorMessage,
          "select-child": isChild,
        })}
      >
        <select
          className="select-input mr-2"
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
        {hasErrorMessage && errorMessage && !isChild && (
          <i className="uit uit-times-circle custom-icon-fail" />
        )}
        {hasErrorMessage && !errorMessage && !isChild && (
          <i className="uit uit-check-circle custom-icon-success" />
        )}
      </div>
      {hasErrorMessage && errorMessage && !isChild && (
        <p className="select-feedback">{errorMessage}</p>
      )}
    </div>
  );
}

export default Select;
