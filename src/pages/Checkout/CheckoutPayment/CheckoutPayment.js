import React, { useState } from "react";

import PaymentMethod from "../../../components/PaymentMethod";
import CardForm from "../../../components/PaymentForms/CardForm";
import PayPalForm from "../../../components/PaymentForms/PayPalForm";
import ApplePayForm from "../../../components/PaymentForms/ApplePayForm";

import "../Checkout.scss";

// Image routes
import payPal from "../../../img/payment/paypal-logo.svg";
import applePay from "../../../img/payment/apple_pay-logo.svg";

const CARD_PAY = "Card";
const PAYPAL_PAY = "PayPal";
const APPLE_PAY = "ApplePay";

function CheckoutPayment({ setProcessCompletedFlags }) {
  const [payment, setPayment] = useState(null);
  return (
    <>
      <div className="container-fluid">
        <div className="step-bottom d-flex flex-column">
          <p>How would you like to pay?</p>
          <div className="payment-methods d-flex justify-content-between mb-4">
            <PaymentMethod
              id={CARD_PAY}
              text="Credit/Debit Card"
              setPayment={setPayment}
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
          {payment === CARD_PAY && (
            <CardForm
              setProcessCompletedFlags={setProcessCompletedFlags}
              paymentMethod={payment}
            />
          )}
          {payment === PAYPAL_PAY && (
            <PayPalForm
              setProcessCompletedFlags={setProcessCompletedFlags}
              paymentMethod={payment}
            />
          )}
          {payment === APPLE_PAY && (
            <ApplePayForm
              setProcessCompletedFlags={setProcessCompletedFlags}
              paymentMethod={payment}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default CheckoutPayment;
