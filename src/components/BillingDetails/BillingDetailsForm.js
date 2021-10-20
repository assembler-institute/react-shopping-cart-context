import { Formik, validateYupSchema } from 'formik';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';

function BillingDetailsForm() {
    return ( 
        <div className="div">
            <Formik
              initialValues={{
                  address:'',
                  city: '',
                  zipCode: null,
                  country:''}}

              validationSchema = {Yup.object({
                  address: Yup.string()
                  .required('Come on, do not be lazy and input your address here'),
                  city: Yup.string()
                  .required('Come on, do not be lazy and input your address here'),
                  zipCode: Yup.number()
                  .required('Come on, do not be lazy and input your zip code here')
                  .max(10, 'zip code can not be longer than 15 digits'),
                  country: Yup.string()
                  .required('Come on, do not be lazy and input your zip code here')
              })}

              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({handleSubmit, getFieldProps, isValid, isValidating, errors}) => 
                <form onSubmit={handleSubmit}>
                <label htmlFor="address"  className="control-label">Address*</label> <br/>
                <input placeholder="Input your address" name="address" type="text" className="form-control" {...getFieldProps}></input><br/>
                <label htmlFor="city" className="control-label">City*</label><br/>
                <input placeholder="Input your city" name="city" type="text" {...getFieldProps} className="form-control"></input><br/>
                <label htmlFor="zipCode" className="control-label">Zip/post code*</label><br/>
                <input placeholder="Input your zip code" name="zipCode" type="number" {...getFieldProps} className="form-control"></input><br/>
                <label htmlFor="country" className="control-label">Country/region*</label><br/>
                <input placeholder="Input country/region" name="country" type="text" {...getFieldProps} className="form-control"></input><br/>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              }
                          
              
            </Formik>
        </div>
     );
}

export default BillingDetailsForm;