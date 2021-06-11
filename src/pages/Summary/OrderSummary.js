import React from "react";

function OrderSummary() {
  return (
    <div className="col-12">
      <div className="row">
        <h1>Your Order Confirmed</h1>
      </div>
      <div className="row">
        <h4>Hi ..name..</h4>
      </div>
      <hr />

      <div className="row">
        <div className="col-3">
          <h4>Order Date</h4>
          <p>18, March, 2021</p>
        </div>

        <div className="col-3">
          <h4>Order Date</h4>
          <p>BK98601090</p>
        </div>

        <div className="col-3">
          <h4>Payment</h4>
          <p>Visa -4699</p>
        </div>

        <div className="col-3">
          <h4>Address</h4>
          <p>8502 Preston Road</p>
        </div>
      </div>

      <hr />

      <div className="row">
        <h2>Cart</h2>
      </div>

      <hr />

      <div className="row">
        <h2>Total</h2>
        <h4>$180.98</h4>
      </div>

      <hr />

      <div className="row">
        <p>
          We&apos;ll send you shippingconfirmation when your item&apos;s are on
          the way! We appreciate your bussines, and hope you enjoy your purchase
        </p>
      </div>
    </div>
  );
}

export default OrderSummary;
