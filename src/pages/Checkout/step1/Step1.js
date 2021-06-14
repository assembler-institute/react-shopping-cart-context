import React from "react";

import AccountForm from "../../../components/Forms/AccountForm";
import OrderSummary from "../../../components/OrderSummary";
import withLayout from "../../../hoc/withLayout";

function Step1() {
  return (
    <div className="row">
      <AccountForm />
      <OrderSummary className="col col-4" />
    </div>
  );
}

export default withLayout(Step1);
