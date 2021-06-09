import React, { useContext } from "react";
import { StateContext } from "../../context/state-context";
import SummaryItem from "../SummaryItem";
// import { ACTIONS } from "../../../context/state-reducer";

function Summary() {
  const value = useContext(StateContext);
  const { cartItems, account, billing, payment } = value;
  return (
    <div className="p-3 shadow-sm">
      <div className="border-bottom mb-4">
        <h2 className="text-primary mb-5">Order Confirmed!</h2>
        <h5>{`Hi ${account.userName},`}</h5>
        <p>Your order has been confirmed and will be shipping soon.</p>
      </div>
      <div className="border-bottom">
        <h6 className="text-muted">Address</h6>
        <p>{billing.address}</p>
        <p>{billing.postCode}</p>
        <p>{billing.city}</p>
        <p>{billing.country}</p>
        <h6 className="text-muted">Payment Type</h6>
        <p>{payment.paymentType}</p>
        <p>{payment.cardholderName}</p>
        <p>{payment.cardNumber}</p>
        <p>{payment.cardExpiryDate}</p>
      </div>
      <div className="row">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <SummaryItem
              className="col col-3"
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              quantity={item.quantity}
            />
          ))}
      </div>
    </div>
  );
}

export default Summary;
