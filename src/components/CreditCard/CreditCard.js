import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import { Field, useFormik } from "formik";
import { Redirect } from "react-router-dom";

import Input from "../Input";
import Button from "../Button";
import creditCardSchema from "./credit-card-schema";

import paypal from "../../img/PayPal.svg";
import applePay from "../../img/apple_pay.png";

import visa from "../../img/visa.png";
import mastercard from "../../img/mastercard.png";
import american from "../../img/american.png";
import { useUsers } from "../Context/UserContext";

function toogleCard(method) {
  const $div = document.querySelector("#payment1");
  const $div2 = document.querySelector("#payment2");

  if (method === "paypal" || method === "apple") {
    $div.classList.add("d-none");
    $div2.classList.add("d-none");
  } else {
    console.log(method);
    $div.classList.toggle("d-none");
    $div2.classList.toggle("d-none");
  }
}

function CreditCard() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [focus, setFocus] = useState();
  const { cvc, expiry, name, number, paymentMethod, savePayment } = useUsers();

  const formik = useFormik({
    initialValues: {
      cvc: cvc || "",
      expiry: expiry || "",
      focus: "",
      name: name || "",
      number: number || "",
      pay: paymentMethod || "",
      rules: false,
    },
    validationSchema: creditCardSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      savePayment(values);
      setSubmitting(true);
      console.log(values);
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <div>
      <div id="payment1">
        <Cards
          cvc={formik.values.cvc}
          expiry={formik.values.expiry}
          focused={focus}
          name={formik.values.name}
          number={formik.values.number}
        />
      </div>
        
      <form onSubmit={formik.handleSubmit}>
        <div className="form-check">
          <Input
            label=""
            type="radio"
            name="pay"
            value="Visa"
            checked={formik.values.pay === "Visa"}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.pay}
            errorMessage={formik.errors.pay}
            handleClick={() => toogleCard("visa")}
          />
          <label className="form-check-label" htmlFor="card">
            Credit/Debit Card
          </label>
        </div>
        <div className="form-check">
          <Input
            label=""
            type="radio"
            name="pay"
            value="Paypal"
            checked={formik.values.pay === "Paypal"}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.pay}
            errorMessage={formik.errors.pay}
            handleClick={() => toogleCard("paypal")}
          />
          <label className="form-check-label" htmlFor="paypal">
            <img src={paypal} />
          </label>
        </div>
        <div className="form-check">
          <Input
            label=""
            type="radio"
            name="pay"
            value="Apple Pay"
            checked={formik.values.pay === "Apple Pay"}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.pay}
            errorMessage={formik.errors.pay}
            handleClick={() => toogleCard("apple")}
          />
          <label className="form-check-label" htmlFor="apple">
            <img src={applePay} style={{ width: "50px" }} />
          </label>
        </div>
        <div id="payment2">
          <div>
            <div>We accept the folling debit/credit cards</div>
            <img
              src={visa}
              style={{ width: "50px", border: "1px solid #EEE" }}
            />
            <img
              src={mastercard}
              style={{ width: "50px", border: "1px solid #EEE" }}
            />
            <img
              src={american}
              style={{ width: "50px", border: "1px solid #EEE" }}
            />
          </div>
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
        </div>
        <Input
          style={{ display: "inline", width: "3%", float: "left" }}
          type="checkbox"
          name="rules"
          id="rules"
          label=""
          value={formik.values.rules}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.rules}
          errorMessage={formik.errors.rules}
        />
        <span>
          I have read and I accept the booking conditions, general terms and
          privacy policy.
        </span>
        <Button
          submitButton
          block
          disabled={formik.isValidating || !formik.isValid}
        >
          Complete
        </Button>
      </form>
            {hasSubmitted && <Redirect to="/checkout/order-summary" />}
    </div>
  );
}

export default CreditCard;
