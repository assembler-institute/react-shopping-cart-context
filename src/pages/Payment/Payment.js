import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import clsx from "clsx";
// import { v4 as uuid } from "uuid";
// import { useFormik } from "formik";

// import Input from "../../components/Input";
// import Button from "../../components/Button";

// import Cart from "../../components/Cart";

// import paymentSchema from "./Payment-schema";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";

import withCheckoutLayout from "../../hoc/withCheckoutLayout";

import paypalImage from "../../img/icons/payment/Paypal.png";
import applePayImage from "../../img/icons/payment/Apple.png";
import visaImage from "../../img/icons/payment/Visa.png";
import mastercardImage from "../../img/icons/payment/MasterCard.png";
import amexImage from "../../img/icons/payment/AmericanExpress.png";

function Payment() {
  const [hasSubmitted /* , setHasSubmitted */] = useState(false);
  // const [value, setValue] = React.useState("card");
  const [paymentValue, setPaymentValue] = React.useState("card");

  const handleChange = (event) => {
    setPaymentValue(event.target.value);
  };

  const paymentOptions = [
    {
      value: "card",
      formText: "Credit/Debit Card",
      formImage: false,
      disabled: false,
    },
    {
      value: "paypal",
      formText: false,
      formImage: paypalImage,
      disabled: true,
    },
    {
      value: "applePay",
      formText: false,
      formImage: applePayImage,
      disabled: true,
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col col-8 m-auto">
          <h3>Payment Details</h3>
          <hr />
          <h5>How would you like to pay?</h5>
          <RadioGroup
            aria-label="payment-method"
            name="payment-method"
            value={paymentValue}
            onChange={handleChange}
            row
          >
            {paymentOptions.map((payment) => {
              return (
                <div
                  className={clsx(
                    "radio-border-box",
                    paymentValue === payment.value && "selected",
                  )}
                  key={payment.value}
                >
                  <FormControlLabel
                    value={payment.value}
                    control={
                      <Radio
                        checked={paymentValue === payment.value}
                        /* onChange={handleChange} */
                        name="radio-button-demo"
                        inputProps={{ "aria-label": payment.value }}
                      />
                    }
                    label={
                      payment.formText ? (
                        payment.formText
                      ) : (
                        <img src={payment.formImage} alt={payment.name} />
                      )
                    }
                    /* disabled={payment.disabled} */
                  />
                </div>
              );
            })}
          </RadioGroup>
          <div className="row">We accept the following debit/credit cards</div>
          <img className="radio-border-box" src={visaImage} alt="" />
          <img className="radio-border-box" src={mastercardImage} alt="" />
          <img className="radio-border-box" src={amexImage} alt="" />
          <form onSubmit={() => {}}>
            <div className="row">
              <div className="col col-12 mt-4 d-flex justify-content-center">
                {/* <Button
                  submitButton
                  block
                  disabled={formik.isValidating || !formik.isValid}
                >
                  {formik.isSubmitting ? "Submitting..." : "Next page"}
                </Button> */}
              </div>
            </div>
          </form>
          {hasSubmitted && <Redirect to="/" />}
        </div>
      </div>
    </>
  );
}

export default withCheckoutLayout(Payment);
