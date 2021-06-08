import React, { useContext } from "react";
import "./OrderConfirmation.scss";
import { UserContext } from "../../Context/UserContext";

function OrderConfirmation() {
  const user = useContext(UserContext);
  // eslint-disable-next-line no-console
  console.log(user);
  return (
    <section className="summaryBox">
      <h1>Order Summary </h1>
      <div className="OrderNumber">
        <h4>Order number: </h4> {user[0].id}
      </div>
      <div className="clientFullName">
        <h4>Client full name </h4>
        {user[0].firstName}
        {user[0].lastName}
        <div className="email">
          <h4>Email: </h4> {user[0].email}
        </div>
        <div className="address">
          <h4>Address: </h4> {user[0].addressOne}
        </div>
        <div className="country">
          <h4>Country: </h4> {user[0].country}
        </div>
        <div className="state">
          <h4>State: </h4> {user[0].state}
        </div>
        <div className="city">
          <h4>City:</h4> {user[0].city}
        </div>
      </div>
    </section>
  );
}

export default OrderConfirmation;
