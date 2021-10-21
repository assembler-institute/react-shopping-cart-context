import React from "react";
import Input from "../Input";
import  stepOneSchema from "./schema"
import { useFormik } from 'formik';
import {useContext} from "react"




function StepOneForm(){
  // const { submitStepOne, stepOne } = useContext(userContext);
  // const { name, email, countryCode, phone } = stepOne;
  //   const formik = useFormik({
      initialValues: {
        name: name,
        email: email,
        countryCode: countryCode,
        phone: phone,
      },
      validationSchema: stepOneSchema,
      onSubmit: (values) => {
        submitStepOne(values);
        console.log(values)
      },
    });
  


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