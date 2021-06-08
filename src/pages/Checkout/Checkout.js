import React from "react";

import NewClientForm from "../../components/NewClientForm";
import OrderSummary from "../../components/OrderSummary";
import withLayout from "../../hoc/withLayout";

function Checkout() {
  return (
    <div className="row">
      <NewClientForm />
      <OrderSummary className="col col-4" />
    </div>
  );
}

export default withLayout(Checkout);
