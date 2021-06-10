import React from "react";

import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";
import CartConfirmation from "../../components/CartConfirmation";

import withLayout from "../../hoc/withLayout";
<<<<<<< HEAD
import Stepper from "../../components/Stepper/Stepper";
=======
import PaymentConfirmation from "../../components/PaymentConfirmation";
>>>>>>> 5b3f5b0d8ca7ba3fc45f0910626a0e816fd53b1b

function Confirmation() {
  return (
    <>
      <Stepper />
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
