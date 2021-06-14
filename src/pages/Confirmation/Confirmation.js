import React from "react";

import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";
import CartConfirmation from "../../components/CartConfirmation";

import withLayout from "../../hoc/withLayout";
import Stepper from "../../components/Stepper/Stepper";

function Confirmation() {
  return (
    <>
      <Stepper />
      <div className="Space " />
      <div className="row ">
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
