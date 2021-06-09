/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
import React, { useState } from "react";

// import Input from "../../../components/Input";
import PaymentMethod from "../../../components/PaymentMethod";
import CardForm from "../../../components/PaymentForms/CardForm";
import PayPalForm from "../../../components/PaymentForms/PayPalForm";
import ApplePayForm from "../../../components/PaymentForms/ApplePayForm";

import "../Checkout.scss";

// Image routes
import payPal from "../../../img/payment/paypal-logo.svg";
import applePay from "../../../img/payment/apple_pay-logo.svg";

const CARD_PAY = "CARD_PAY";
const PAYPAL_PAY = "PAYPAL_PAY";
const APPLE_PAY = "APPLE_PAY";

function CheckoutPayment() {
  const [payment, setPayment] = useState(CARD_PAY);
  return (
    <>
      <div className="col col-8">
        {/* TOP PART */}
        <div className="step-top">
          <div className="d-flex justify-content-between align-items-end">
            <h4 className="step-title">Payment details</h4>
            <h5 className="step-subtitle">Step 3 of 3</h5>
          </div>
          <hr />
        </div>
        {/* BOTTOM PART */}
        <div className="step-bottom d-flex flex-column">
          <p>How would you like to pay?</p>
          <div className="payment-methods d-flex justify-content-between mb-4">
            <PaymentMethod
              id={CARD_PAY}
              text="Credit/Debit Card"
              setPayment={setPayment}
              checked
            />
            <PaymentMethod
              id={PAYPAL_PAY}
              src={payPal}
              setPayment={setPayment}
            />
            <PaymentMethod
              id={APPLE_PAY}
              src={applePay}
              setPayment={setPayment}
            />
          </div>
          {payment === CARD_PAY && <CardForm paymentMethod={payment} />}
          {payment === PAYPAL_PAY && <PayPalForm paymentMethod={payment} />}
          {payment === APPLE_PAY && <ApplePayForm paymentMethod={payment} />}
        </div>
      </div>
    </>
  );
}

export default CheckoutPayment;
