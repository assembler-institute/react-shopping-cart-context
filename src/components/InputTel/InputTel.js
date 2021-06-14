import React /* , { useState } */ from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// import Spain from "../../img/countries/espana.svg";
// import England from "../../img/countries/inglaterra.svg";
// import Portugal from "../../img/countries/portugal.svg";

function Input({
  // type = "text",
  label = "",
  id = "input-01",
  value = "",
  // placeholder = "",
  handleChange = () => {},
  // handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  ...props
}) {
  // const [value, setValue] = useState();
  // console.log(value);
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <PhoneInput
        id={id}
        name={id}
        className="border p-1 rounded"
        {...props}
        // placeholder={placeholder}
        value={value}
        onChange={handleChange}
        // onBlur={handleBlur}
      />
      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )}
    </div>
  );

  //
  //   <label htmlFor={id}>{label}</label>
  //   <div className="d-flex">
  //     <select name="flags" className="border w-25 rounded">
  //       <option value="+34">Spain +34</option>
  //       <option value="+44">England +44</option>
  //       <option value="+351">Portugal +351</option>
  //     </select>
  //     <input
  //       className={
  //         hasErrorMessage && errorMessage
  //           ? "form-control is-invalid"
  //           : "form-control"
  //       }
  //       id={id}
  //       name={id}
  //       type={type}
  //       placeholder={placeholder}
  //       value={value}
  //       onChange={handleChange}
  //       onBlur={handleBlur}
  //       {...props}
  //     />
  //   </div>
  //   {hasErrorMessage && errorMessage && (
  //     <p className="invalid-feedback">{errorMessage}</p>
  //   )}
  // </div>
}

export default Input;
