import React, { useContext } from "react";
import "./OrderConfirmation.scss";
import UserContext from "../../context/userContext";
import PaymentContext from "../../context/paymentContext";

function OrderConfirmation() {
  const paymentInfo = useContext(PaymentContext);
  console.log(paymentInfo);
  const user = useContext(UserContext);
  // eslint-disable-next-line no-console
  console.log(user);
  return (
    <section className="summaryBox">
      <h2>Order Summary </h2>
      <hr />
      <div className="clientBox">
        <h6>Order number: </h6> {user[0].id}
      </div>
      <hr />
      <div className="clientBox">
        <h6>Client full name: </h6>
        {user[0].firstName}
        {user[0].lastName}
      </div>
      <hr />
      <div className="clientBox ">
        <h6>Email: </h6> {user[0].email}
      </div>
      <hr />
      <div className="clientBox">
        <h6>Address: </h6> {user[0].addressOne}
      </div>
      <hr />
      <div className="clientBox">
        <h6>Country: </h6> {user[0].country}
      </div>
      <hr />
      <div className="clientBox">
        <h6>State: </h6> {user[0].state}
      </div>
      <hr />
      <div className="clientBox">
        <h6>City:</h6> {user[0].city}
      </div>
    </section>
  );
}

export default OrderConfirmation;
