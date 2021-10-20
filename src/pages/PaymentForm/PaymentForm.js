import { Formik, validateYupSchema } from 'formik';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';


function PaymentForm() {
    return ( 
        <div>
         <Formik
          initialValues={{
              paymentType:"",
              cardHolderName:"",
              cardNumber:"",
              cardExpiryDate:"",
              CVVCode: null,
              hasRead: false
          }}

          validationSchema = {Yup.object({
            paymentType: Yup.string()
            .required("Come on, don't be so Catalan and choose your payment type"),
            cardHolderName: Yup.string()
            .required("Come on, don't be so Catalan and input your cardholder name"),
            cardNumber: Yup.number()
            .required("Come on, don't be so Catalan and input your card number"),
            cardExpiryDate: Yup.number()
            .required("Come on, don't be so Catalan and input your card expiry date"),
            CVVCode: Yup.number()
            .required("Come on, don't be so Catalan and input your CVV code"),           
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
                <label className="control-label">How would you like to pay?</label><br/>
                <input class="form-check-input" type="radio" {...getFieldProps}></input>
                <input class="form-check-input" type="radio" {...getFieldProps}></input>
                <input class="form-check-input" type="radio" {...getFieldProps}></input>
                <span>We accept the following debit/credit cards</span><br/>
                <image alt="visa"></image ><image alt="mastercard"></image><image alt="american express"></image><br/>
                <label className="control-label">Cardholder name*</label><br/>
                <input className="form-control" {...getFieldProps}/><br/>
                <label htmlFor="" className="control-label">Card number*</label><br/>
                <input type="text" className="form-control" {...getFieldProps} /><br/>
                <label htmlFor="" className="control-label">Card expiry date*</label>
                <input type="text" className="form-control" placeholder="mm/yy" {...getFieldProps} />
                <label htmlFor="" className="control-label">CVV Code*</label><img cvv pic/>
                <input type="text" className="form-control" {...getFieldProps} /><br/>
                <input type="checkbox" className="form-check-input" {...getFieldProps} /><label>I have read and accept the booking conditions general terms  and privacy policy</label><br/>
                <img></img> <span>We use secure SSL transmission and encrypted storage to protect your personal information.</span><br/>
                <span></span><br/>
                <button type="submit" className="btn btn-primary">Complete booking</button>
            </form>
            }
         </Formik>
        </div>
     );
}

export default PaymentForm;