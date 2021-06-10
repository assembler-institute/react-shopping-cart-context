import React, { useContext } from "react";
import PaymentContext from "../../context/paymentContext";
import "../OrderConfirmation/OrderConfirmation.scss";

function PaymentConfirmation() {
  const { paymentInfo } = useContext(PaymentContext);
  // eslint-disable-next-line no-console
  console.log(paymentInfo);
  const payment = paymentInfo[0];
  return (
    <div>
      <h2>Payment summary</h2>
      <hr />
      <div className="clientBox">
        <h6> Card holder name: </h6>
        {payment.cardHolderName}
      </div>
      <hr className="linebreak" />
      <div className="clientBox paymentSum">
        <h6>Card number: </h6>
        {payment.cardNumber}
      </div>
      <hr />
      <div className="clientBox paymentSum">
        <h6>Payment method: </h6>
        {payment.payMethod}
      </div>
      <hr />
    </div>
  );
}

export default PaymentConfirmation;
