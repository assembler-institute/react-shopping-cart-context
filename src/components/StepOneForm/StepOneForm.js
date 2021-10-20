import React from "react";
import Input from "../Input";


function StepOneForm({
    type = "text",
    label = "input-01",
    id = "input-01",
    value = "fdgdfgfdg",
    placeholder = "",
    handleChange = () => {},
    handleBlur = () => {},
    errorMessage,
    hasErrorMessage,
    ...props
  }){


return(
    <>
    <div>
    <form 
     id="stepOne">
      <Input
        type="text"
        label="Name"
        id="name"
        value={value}
        placeholder="Your name"
     handleChange={handleChange}
       />
      <Input
        type="text"
        label="Email"
        id="email"
      />

      <span>Phone number</span>
        <label htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Your phone number"
            className="phone"
          />
        </label>
    </form>
    </div>
    </>
)
} export default StepOneForm