import React from "react";

// import NewClientForm from "../../../components/NewClientForm";
import AccountForm from "../../../components/Forms/AccountForm";
import OrderSummary from "../../../components/OrderSummary";
import withLayout from "../../../hoc/withLayout";

function Step1({ cartItems }) {
  return (
    <div className="row">
      <AccountForm />
      <OrderSummary className="col col-4" cartItems={cartItems} />
    </div>
  );
}

export default withLayout(Step1);
