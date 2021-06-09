import React from "react";

import PaymentForm from "../../../components/Forms/PaymentForm";
import OrderSummary from "../../../components/OrderSummary";
import withLayout from "../../../hoc/withLayout";

function Step3() {
  return (
    <div className="row">
      <PaymentForm />
      <OrderSummary className="col col-4" />
    </div>
  );
}

export default withLayout(Step3);
