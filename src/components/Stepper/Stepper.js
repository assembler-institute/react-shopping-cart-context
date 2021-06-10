import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Stepper.scss";

function Stepper() {
  const url = window.location.href;
  return (
    <>
      <div className="Stepper">
        <p>User Information</p>
        <p>Shipping Information</p>
        <p>Payment</p>
        <p>Confirmation</p>
      </div>

      {url === "http://localhost:3000/checkout/step-1" && (
        <ProgressBar animated variant="success" now={25} key={1} />
      )}

      {url === "http://localhost:3000/checkout/step-2" && (
        <ProgressBar animated variant="success" now={50} key={2} />
      )}

      {url === "http://localhost:3000/checkout/step-3" && (
        <ProgressBar animated variant="success" now={75} key={3} />
      )}

      {url === "http://localhost:3000/checkout/order-summary" && (
        <ProgressBar animated variant="success" now={100} key={4} />
      )}
    </>
  );
}

export default Stepper;
