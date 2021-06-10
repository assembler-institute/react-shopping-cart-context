import React, { useContext } from "react";
import PaymentContext from "../../context/paymentContext";
import "../OrderConfirmation/OrderConfirmation.scss";

function PaymentConfirmation() {
  const { paymentInfo } = useContext(PaymentContext);
  // eslint-disable-next-line no-console
  const payment = paymentInfo[0];
  return (
    <div>
      <h2>Payment summary</h2>
      <hr />
      <p className="clientBox">
        <h6> Card holder name: </h6>
        {payment.cardHolderName}
      </p>
      <hr className="linebreak" />
      <p className="clientBox paymentSum">
        <h6>Card number: </h6>
        {payment.cardNumber}
      </p>
      <hr />
      <p className="clientBox paymentSum">
        <h6>Payment method: </h6>
        {payment.payMethod}
      </p>
      <hr />
    </div>
  );
}

export default PaymentConfirmation;
