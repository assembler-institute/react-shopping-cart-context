import React, { useContext } from "react";
import PaymentContext from "../../context/paymentContext";

function PaymentConfirmation() {
  const { paymentInfo } = useContext(PaymentContext);
  console.log(paymentInfo);
  const payment = paymentInfo[0];
  return (
    <div className="bg-info">
      <p>{payment.cardHolderName}</p>
      <p>{payment.cardNumber}</p>
      <p>{payment.payMethod}</p>
    </div>
  );
}

export default PaymentConfirmation;
