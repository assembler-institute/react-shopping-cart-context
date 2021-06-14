import React from "react";

// import NewClientForm from "../../../components/NewClientForm";
import BillingForm from "../../../components/Forms/BillingForm";
import OrderSummary from "../../../components/OrderSummary";
import withLayout from "../../../hoc/withLayout";

function Step2() {
  return (
    <div className="row">
      <BillingForm />
      <OrderSummary className="col col-4" />
    </div>
  );
}

export default withLayout(Step2);
