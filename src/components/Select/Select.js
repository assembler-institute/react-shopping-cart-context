import React from "react";

function Select({ id, value, options, handleChange, handleBlur }) {
  return (
    <select
      className="form-control"
      name={id}
      id={id}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.display}
        </option>
      ))}
    </select>
  );
}

export default Select;
