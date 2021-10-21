import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import { useFormik } from "formik";
import { Redirect } from "react-router-dom";

import Input from "../Input";
import Button from "../Button";
import creditCardSchema from "./credit-card-schema";

import paypal from "../../img/PayPal.svg";
import applePay from "../../img/apple_pay.png";

import visa from "../../img/visa.png";
import mastercard from "../../img/mastercard.png";
import american from "../../img/american.png";

function CreditCard() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [focus, setFocus] = useState();

  const formik = useFormik({
    initialValues: {
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",
    },
    validationSchema: creditCardSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(true);

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <div>
      <div className="d-flex justify-content-around">
        <div className="form-check border p-1">
          <input
            className="form-check-input"
            type="radio"
            name="pay"
            id="card"
          />
          <label className="form-check-label" htmlFor="card">
            Credit/Debit Card
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="pay"
            id="paypal"
          />
          <label className="form-check-label" htmlFor="paypal">
            <img src={paypal} />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="pay"
            id="apple"
          />
          <label className="form-check-label" htmlFor="apple">
            <img src={applePay} style={{ width: "50px" }} />
          </label>
        </div>
      </div>

      <div>
        <div>We accept the folling debit/credit cards</div>
        <img src={visa} style={{ width: "50px",border: "1px solid #EEE"}} />
        <img src={mastercard} style={{ width: "50px" ,border: "1px solid #EEE"}} />
        <img src={american} style={{ width: "50px",border: "1px solid #EEE" }} />
      </div>
      <Cards
        cvc={formik.values.cvc}
        expiry={formik.values.expiry}
        focused={focus}
        name={formik.values.name}
        number={formik.values.number}
      />
              
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Cardholder name*"
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          placeholder="Alberto"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.name}
          errorMessage={formik.errors.name}
          handleFocus={() => setFocus("name")}
        />
        <Input
          label="Card number*"
          type="number"
          name="number"
          value={formik.values.number}
          placeholder="Card Number"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.number}
          errorMessage={formik.errors.number}
          handleFocus={() => setFocus("number")}
        />
               
        <Input
          label="Card expiry date*"
          type="string"
          name="expiry"
          value={formik.values.expiry}
          placeholder="Card expiry date"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.expiry}
          errorMessage={formik.errors.expiry}
          handleFocus={() => setFocus("expiry")}
        />
               
        <Input
          label="CVV Code*"
          type="number"
          name="cvc"
          id="cvc"
          value={formik.values.cvc}
          placeholder="CVC"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          handleFocus={() => setFocus("cvc")}
          hasErrorMessage={formik.touched.cvc}
          errorMessage={formik.errors.cvc}
        />
        <input type="checkbox" /> I have read and I accept the booking
        conditions, general terms and privacy policy.
        <Button
          submitButton
          block
          disabled={formik.isValidating || !formik.isValid}
        >
          Complete
        </Button>
      </form>
            {hasSubmitted && <Redirect to="/" />}
    </div>
  );
}

export default CreditCard;

/* import React from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";
 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        	<input
            type="string"
            name="name"
            id="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="number"
            name="expiry"
            id="expiry"
            placeholder="Expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="number"
            name="cvc"
            id="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            maxLength="3"
          />
        </form>
      </div>
    );
  }
} */
