import React from "react";
import withLayout from "../../hoc/withLayout";

import PaymentForm from "../../components/PaymentForm";

function Payment() {
  return (
    <>
      <h2>Payment</h2>
      <div className="row">
        <div className="col col-6">
          <header className="jumbotron">
            <h4>Payment details</h4>
            <hr />
            <PaymentForm />
          </header>
        </div>

        <div className="col col-6">
          <header className="jumbotron">
            <h3>Your Cart</h3>

            <hr />
          </header>
        </div>
      </div>
    </>
  );
}

export default withLayout(Payment);
