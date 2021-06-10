import React from "react";

import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";
import CartConfirmation from "../../components/CartConfirmation";

import withLayout from "../../hoc/withLayout";
<<<<<<< HEAD
<<<<<<< HEAD
import Stepper from "../../components/Stepper/Stepper";
=======
import PaymentConfirmation from "../../components/PaymentConfirmation";
>>>>>>> 5b3f5b0d8ca7ba3fc45f0910626a0e816fd53b1b
=======
>>>>>>> 6857897967e7c5d2c5e05d465c551c53ad5bdcf1

function Confirmation() {
  return (
    <>
<<<<<<< HEAD
      <Stepper />
      <div className="row">
=======
      <div className="row ">
>>>>>>> 6857897967e7c5d2c5e05d465c551c53ad5bdcf1
        <OrderConfirmation />
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
