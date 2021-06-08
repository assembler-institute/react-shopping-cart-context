import React, { useContext } from "react";
import withLayout from "../../../hoc/withLayout";

import checkoutContext from "../../../context/checkoutData";

const isCheckout = true;

function OrderSummary() {
  const { state } = useContext(checkoutContext);
  console.log(state);
  return (
    <div className="row">
      <div className="col col-12">
        <div className="row">
          <div className="col col-4">
            <h3>Personal data</h3>
            <ul>
              <li>{state.name}</li>
            </ul>
          </div>
          <div className="col col-4">Billing address </div>
          <div className="col col-4">Payment method </div>
        </div>
        <div className="row">
          <div className="col col-12">Pursache resume</div>
        </div>
      </div>
    </div>
  );
}

export default withLayout(OrderSummary, isCheckout);
