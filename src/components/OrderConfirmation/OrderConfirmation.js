import React, { useContext } from "react";
import "./OrderConfirmation.scss";
import UserContext from "../../context/userContext";
import PaymentConfirmation from "../PaymentConfirmation";

function OrderConfirmation() {
  const user = useContext(UserContext);

  return (
    <section className="summaryBox">
      <div className="shippingSummary">
        <h2>Shipping information </h2>
        <hr />
        <div className="clientBox">
          <h6>Order number: </h6> {user[0].id}
        </div>
        <hr />
        <div className="clientBox">
          <h6>Client full name: </h6>
          <span className="firstName">{user[0].firstName}</span>
          {user[0].lastName}
        </div>
        <hr />
        <div className="clientBox ">
          <h6>Phone Number: </h6>+{user[0].prefix} {user[0].phone}
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
      </div>
      <div className="paymentSummary">
        <PaymentConfirmation />
      </div>
    </section>
  );
}

export default OrderConfirmation;
