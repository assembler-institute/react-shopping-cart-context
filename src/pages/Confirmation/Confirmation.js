import React from "react";

import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";
import CartConfirmation from "../../components/CartConfirmation";

import withLayout from "../../hoc/withLayout";
import PaymentConfirmation from "../../components/PaymentConfirmation";

function Confirmation() {
  return (
    <>
      <div className="row">
        <OrderConfirmation />
        <PaymentConfirmation />
        <div className="col col-6">
          <header className="jumbotron">
            <CartConfirmation />
            <hr />
          </header>
        </div>
      </div>
    </>
  );
}

export default withLayout(Confirmation);
