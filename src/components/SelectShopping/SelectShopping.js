import React from "react";

import "./SelectShopping.scss";

function SelectShopping({ handleChange = () => {}, handleBlur = () => {} }) {
  return (
    <div className="form">
      <select
        className="selectTel"
        id="country"
        name="country"
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="">Select country</option>
        <option value="España">España</option>
        <option value="Portugal">Portugal</option>
        <option value="Francia">Francia</option>
        <option value="Italia">Italia</option>
      </select>
    </div>
  );
}

export default SelectShopping;
