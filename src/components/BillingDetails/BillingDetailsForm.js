import { Formik, validateYupSchema } from 'formik';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';

function BillingDetails() {
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
              <label htmlFor="address">Address*</label>
              <field placeholder="input your address here" name="address" type="text"></field>
              <label htmlFor="city"></label>
              <field placeholder="input your city here" name="city" type="text">City*</field>
              <label htmlFor="zipCode"></label>
              <field placeholder="input your zip code here" name="zipCode" type="number">Zip/post code*</field>
              <label htmlFor="country"></label>
              <field placeholder="input your country/region here" name="country" type="text">Country/region*</field>
            </Formik>
        </div>
     );
}

export default BillingDetails;