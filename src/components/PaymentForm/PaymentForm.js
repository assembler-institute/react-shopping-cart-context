import React from "react";

function PaymentForm() {
  return (
    <>
      <form>
        <p>
          <strong>How would you like to pay?</strong>
        </p>
        <div className="d-flex justify-content-around">
          <div
            className="card col-3 p-2 align-middle"
            style={{ fontSize: "11px" }}
          >
            Credit/Debit Card
          </div>
          <div className="card col-3 p-2">paypal</div>
          <div className="card col-3 p-2">apple pay</div>
        </div>
      </form>
    </>
  );
}

export default PaymentForm;
